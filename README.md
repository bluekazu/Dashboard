# Dashboard

개인 인생 대시보드 (GitHub Pages one-page).

구조: **카테고리 › task › sub task › 진행상황 › 세부**

- `index.html` — 페이지 (화면/스타일/렌더링)
- `data.js` — 대시보드 데이터. 항목 추가·수정은 이 파일만 고치면 된다.

진행상황(`status`): `to-review`(검토필요) · `in-review`(검토중) · `in-progress`(진행중) · `done`(진행완료)

세부(`detail`)는 항목에 마우스를 올리면(모바일은 탭) 팝업으로 표시된다.

## 취미 리뷰 갤러리 (`hobby/`)

대시보드의 `취미` 카테고리 링크에서 새 탭으로 열린다.

- `hobby/index.html` — 썸네일 갤러리 (카테고리·연도 필터, 감상 완료일 최신순)
- `hobby/item.html?id=...` — 아이템 디테일 페이지 (템플릿 하나로 표시)
- `hobby/items.js` — 리뷰 데이터. 아이템 추가는 이 파일만 고치면 된다.
- `hobby/images/` — 직접 받은 이미지를 넣고 `image: "images/파일명.jpg"` 로 지정 가능

## GitHub Actions

### 리뷰 이미지 자동 보관 (`.github/workflows/archive-images.yml`)

`hobby/items.js` 가 main 에 push 되면 실행된다.

1. `image` 가 외부 주소(`http…`)인 아이템을 찾아 `hobby/images/<id>.<확장자>` 로 내려받는다.
2. `items.js` 의 `image` 값을 `images/<id>.<확장자>` 로 바꿔 `github-actions[bot]` 이 자동 커밋한다.
3. GitHub Pages 재배포를 요청한다.

- 내려받기 실패한 이미지는 외부 주소 그대로 두고 Actions 실행 결과에 경고로 표시한다.
- Actions 탭 › *Archive review images* › *Run workflow* 로 수동 실행도 가능하다.
- 봇이 커밋을 추가하므로, 로컬에서 작업하기 전에는 `git pull` 을 먼저 한다.
