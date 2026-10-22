# Dashboard

개인 인생 대시보드 (GitHub Pages one-page).

구조: **카테고리 › task › sub task › 진행상황 › 세부**

- `index.html` — 페이지 (화면/스타일/렌더링)
- `data.js` — 대시보드 데이터. 항목 추가·수정은 이 파일만 고치면 된다.

진행상황(`status`): `to-review`(검토필요) · `in-review`(검토중) · `in-progress`(진행중) · `done`(진행완료)

세부(`detail`)는 항목에 마우스를 올리면(모바일은 탭) 팝업으로 표시된다.
