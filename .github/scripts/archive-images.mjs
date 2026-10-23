// =====================================================================
//  리뷰 이미지 자동 보관
//
//  hobby/items.js 에서 외부 주소(http/https)로 된 image 를 찾아
//  hobby/images/<id>.<ext> 로 내려받고, items.js 의 image 값을
//  "images/<id>.<ext>" 로 바꾼다. (GitHub Actions 에서 실행)
//
//  사용: node .github/scripts/archive-images.mjs [items.js 경로]
//  외부 의존성 없음 (Node 20+ 내장 fetch 사용)
// =====================================================================

import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const ITEMS_FILE = process.argv[2] || "hobby/items.js";
const IMAGES_DIR = path.join(path.dirname(ITEMS_FILE), "images");
const MAX_BYTES = 10 * 1024 * 1024; // 10MB
const EXT_BY_TYPE = {
  "image/jpeg": "jpg", "image/jpg": "jpg", "image/png": "png",
  "image/webp": "webp", "image/gif": "gif", "image/avif": "avif",
};

// items.js 는 `const ITEMS = [...]` 형태의 JS 파일이므로 샌드박스에서 실행해 읽는다
function loadItems(src) {
  const ctx = {};
  vm.runInNewContext(`${src}\n;this.ITEMS = ITEMS;`, ctx, { timeout: 1000 });
  if (!Array.isArray(ctx.ITEMS)) throw new Error("ITEMS 배열을 찾을 수 없습니다.");
  return ctx.ITEMS;
}

async function download(url) {
  const { origin } = new URL(url);
  const res = await fetch(url, {
    redirect: "follow",
    signal: AbortSignal.timeout(30_000),
    headers: {
      // 일부 이미지 서버는 브라우저 요청/Referer 가 없으면 거부한다
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
      Accept: "image/avif,image/webp,image/png,image/jpeg,image/*;q=0.8",
      Referer: origin + "/",
    },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const type = (res.headers.get("content-type") || "").split(";")[0].trim().toLowerCase();
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length === 0) throw new Error("빈 응답");
  if (buf.length > MAX_BYTES) throw new Error(`너무 큼 (${buf.length} bytes)`);
  const ext = EXT_BY_TYPE[type] || sniffExt(buf);
  if (!ext) throw new Error(`이미지가 아님 (content-type: ${type || "없음"})`);
  return { buf, ext };
}

// content-type 이 부정확할 때 파일 시그니처로 판별
function sniffExt(b) {
  if (b[0] === 0xff && b[1] === 0xd8) return "jpg";
  if (b.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))) return "png";
  if (b.subarray(0, 4).toString() === "RIFF" && b.subarray(8, 12).toString() === "WEBP") return "webp";
  if (b.subarray(0, 3).toString() === "GIF") return "gif";
  return null;
}

const safeId = id => String(id).replace(/[^A-Za-z0-9._-]/g, "-");

async function main() {
  let src = fs.readFileSync(ITEMS_FILE, "utf8");
  const items = loadItems(src);
  const targets = items.filter(it => /^https?:\/\//i.test(it.image || ""));

  if (targets.length === 0) {
    console.log("외부 이미지 없음 — 할 일이 없습니다.");
    return;
  }

  fs.mkdirSync(IMAGES_DIR, { recursive: true });
  const done = new Map(); // 같은 URL 을 여러 아이템이 쓰는 경우 한 번만 받는다
  let failed = 0;

  for (const it of targets) {
    if (done.has(it.image)) continue;
    try {
      const { buf, ext } = await download(it.image);
      const file = `${safeId(it.id)}.${ext}`;
      fs.writeFileSync(path.join(IMAGES_DIR, file), buf);
      done.set(it.image, `images/${file}`);
      console.log(`✔ ${it.title} → images/${file} (${Math.round(buf.length / 1024)} KB)`);
    } catch (e) {
      failed++;
      console.log(`::warning title=이미지 보관 실패::${it.title} (${it.id}) — ${e.message} — ${it.image}`);
    }
  }

  // image 값만 정확히 치환 (파일의 나머지 서식/주석은 그대로 유지)
  for (const [url, local] of done) {
    const lit = JSON.stringify(url);
    const literals = [lit, `'${url}'`];
    let replaced = false;
    for (const l of literals) {
      if (src.includes(l)) { src = src.split(l).join(JSON.stringify(local)); replaced = true; }
    }
    if (!replaced) console.log(`::warning::items.js 에서 주소 문자열을 찾지 못함: ${url}`);
  }

  if (done.size > 0) {
    loadItems(src); // 치환 후에도 문법이 깨지지 않았는지 확인
    fs.writeFileSync(ITEMS_FILE, src);
  }
  console.log(`완료: 보관 ${done.size}개, 실패 ${failed}개`);
  // 실패가 있어도 성공분은 커밋되도록 종료 코드는 0 으로 둔다 (경고로 표시)
}

main().catch(e => {
  console.error(`::error::${e.message}`);
  process.exit(1);
});
