// =====================================================================
//  인생 대시보드 데이터
//  구조: 카테고리 > task > sub task > 진행상황 > 세부
//
//  status 값 (진행상황):
//    "to-review"   → To review   (검토필요)
//    "in-review"   → In review   (검토중)
//    "in-progress" → In progress (진행중)
//    "done"        → Done        (진행완료)
//
//  카테고리/항목을 추가하려면 아래 배열에 같은 형식으로 추가하면 된다.
//  sub task 에 link: "https://..." 를 넣으면 이름이 새 탭 링크가 된다.
// =====================================================================

const UPDATED = "2026-11-01";

const DASHBOARD = [
  {
    category: "건강",
    icon: "🌿",
    tasks: [
      {
        name: "식단",
        subtasks: [
          { name: "아침: 그릭요거트 / 그래놀라 / 유산균", status: "in-progress" },
          { name: "점심: 단백질 / 채소", status: "in-progress" },
          { name: "저녁: 소식 / 야식 금지", status: "in-progress", detail: "저녁 6시 이후 금식" },
          { name: "주말: 먹고 싶은 것 먹기", status: "in-progress" },
        ],
      },
      {
        name: "운동",
        subtasks: [
          { name: "조깅", status: "in-progress", detail: "밤 10시 조깅" },
        ],
      },
      {
        name: "금주",
        subtasks: [
          { name: "금주", status: "in-progress", detail: "1달 1회 음주" },
        ],
      },
      {
        name: "당뇨",
        subtasks: [
          { name: "혈당 관리", status: "in-progress", detail: "당 조심, 혈당차" },
        ],
      },
    ],
  },
  {
    category: "개발",
    icon: "💻",
    tasks: [
      {
        name: "MEVN",
        subtasks: [
          {
            name: "실시간 모니터링 시스템을 만들며 정복하는 MEVN",
            status: "in-progress",
            detail: "매일 조금씩",
          },
        ],
      },
      {
        name: "C",
        subtasks: [{ name: "미정", status: "to-review", detail: "매일 조금씩" }],
      },
      {
        name: "C++",
        subtasks: [{ name: "미정", status: "to-review", detail: "매일 조금씩" }],
      },
      {
        name: "Rust",
        subtasks: [{ name: "미정", status: "to-review", detail: "매일 조금씩" }],
      },
      {
        name: "AI",
        subtasks: [{ name: "미정", status: "to-review", detail: "매일 조금씩" }],
      },
    ],
  },
  {
    category: "취미",
    icon: "📚",
    link: { href: "hobby/", text: "리뷰 갤러리 →" }, // 새 탭으로 열림
    tasks: [
      {
        name: "독서",
        subtasks: [
          { name: "인간의 아들", status: "in-progress", detail: "20261023 독서 시작" },
          { name: "가호", status: "to-review", detail: "도서 도착 시 시작" },
        ],
      },
    ],
  },
  {
    category: "프로젝트",
    icon: "🎯",
    tasks: [
      {
        name: "한국사능력검정시험",
        subtasks: [
          {
            name: "심화 1급 (제81회)",
            status: "in-progress",
            detail: "2026-11-28 (토) 시험 · 11/2 공부 시작",
            link: "https://claude.ai/artifact/MUo1YYYfY6sNmA9ukLwJrK", // 새 탭으로 열림
          },
        ],
      },
    ],
  },
];
