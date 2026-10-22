// 갤러리/디테일 페이지 공용 헬퍼

const CATEGORIES = ["영화", "만화", "독서", "전시", "드라마", "애니메이션"];
const CAT_COLOR = {
  "영화": "#c2410c", "만화": "#7c3aed", "독서": "#2563c9",
  "전시": "#0f766e", "드라마": "#be185d", "애니메이션": "#ca8a04",
};
const WEEKDAYS = ["일", "월", "화", "수", "목", "금", "토"];

const esc = t => String(t ?? "").replace(/[&<>"']/g, c =>
  ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

// "2026-07-05" → "2026-07-05-일"
function fmtDate(s) {
  if (!s) return "";
  const [y, m, d] = s.split("-").map(Number);
  return `${s}-${WEEKDAYS[new Date(y, m - 1, d).getDay()]}`;
}

// 연도/정렬 기준: 감상 완료일 (감상중이면 시작일)
const keyDate = it => it.end || it.start || "";
const itemYear = it => keyDate(it).slice(0, 4);
const sortedItems = () => [...ITEMS].sort((a, b) => keyDate(b).localeCompare(keyDate(a)));

// 이미지가 없거나 깨지면 카테고리 색 + 제목 카드로 대체
function coverHTML(it) {
  const fb = `<div class="fallback" style="--c:${CAT_COLOR[it.category] || "#6f6b64"}"><span>${esc(it.title)}</span></div>`;
  if (!it.image) return fb;
  return `<img src="${esc(it.image)}" alt="${esc(it.title)}" loading="lazy" referrerpolicy="no-referrer"
            onerror="this.replaceWith(document.createRange().createContextualFragment(this.dataset.fb))"
            data-fb="${esc(fb)}">`;
}
