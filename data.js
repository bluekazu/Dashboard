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
// =====================================================================

const UPDATED = "2026-10-23";

const DASHBOARD = [
  {
    category: "건강",
    icon: "🌿",
    tasks: [
      {
        name: "식단",
        subtasks: [
          { name: "야식 금지", status: "in-progress", detail: "저녁 6시 이후 금식" },
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
];
