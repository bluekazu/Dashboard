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
