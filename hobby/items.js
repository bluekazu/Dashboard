// =====================================================================
//  취미 리뷰 데이터
//
//  category : "영화" | "만화" | "독서" | "전시" | "드라마" | "애니메이션"
//  start/end: "YYYY-MM-DD" (요일은 자동 표시). end 가 비어 있으면 '감상중'
//  source   : 감상한 장소 / 매체 / 링크 (http 로 시작하면 자동 링크)
//  image    : 이미지 주소 (외부 URL 또는 "images/파일명.jpg")
//  review   : 리뷰 (줄바꿈 유지)
//
//  id 는 주소에 쓰이므로 영문/숫자/하이픈으로 고유하게 작성한다.
// =====================================================================

const ITEMS = [
  {
    id: "2026-drama-killers-shopping-mall-2",
    title: "킬러들의 쇼핑몰 2",
    category: "드라마",
    start: "2026-09-19",
    end: "2026-09-20",
    source: "디즈니 플러스",
    image: "https://cdnimage.dailian.co.kr/news/202608/news_1785674992_1673640_m_1.jpg",
    review:
      "킬러들의 쇼핑몰 시즌 1을 재미있게 봤었고, 킬러들의 쇼핑몰 시즌 2가 새로 나와서 보았다. " +
      "정진만 정지안 사이드에 추가된 협력자들과 바빌론 사이드에 추가된 새로운 악역들 덕분에 풍성한 대립과 액션을 볼 수 있었다. " +
      "원작 소설인 살인자의 쇼핑몰과는 스토리 갭이 더 커졌지만 드라마 오리지널 스토리도 꽤 흥미로웠다. " +
      "새로운 악역인 쿠사나기 진의 연기가 인상 깊었다. " +
      "머더헬프와 바빌론의 관계가 새로 정립되면서 시즌 3은 기대하기가 힘들 것 같다고 생각한다.",
  },
  {
    id: "2026-movie-alita-battle-angel",
    title: "알리타 배틀엔젤",
    category: "영화",
    start: "2026-09-12",
    end: "2026-09-12",
    source: "디즈니 플러스",
    image: "https://an2-img.amz.wtchn.net/image/v2/vNBcG5ZiEVlKFE16_gJU0Q.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXhMM0ZzYm5wamEzWTJZbmg0WTI5cGJIWnJjekIySW4wLkNDYTlkdmF6MzVfWUNFa2pFeGFLeUJmS05FQURPdkVNRWdidGxxQlM5Sk0=",
    review:
      "일본 만화 총몽을 원작으로 하는 미국 영화이다. 실사 영화임에도 주인공 알리타만 컴퓨터그래픽으로 후처리를 한 것 같다. " +
      "사이보그 소녀가 잊어버린 기억과 새로운 환경에서 정체성 혼란을 겪으며 좌충우돌하고 모터볼에 참가하며 벌어지는 액션과 인간관계의 변화가 재미있었다. " +
      "원작 만화는 좀 더 시리즈가 길고 세계관이 흥미로워보여서 이후 만화를 볼 수 있으면 좋겠다.",
  },
  {
    id: "2026-book-toemarok",
    title: "퇴마록",
    category: "독서",
    start: "2026-07-05",
    end: "2026-08-03",
    source: "밀리의 서재",
    image: "https://image.aladin.co.kr/product/1300/36/cover500/8954615864_2.jpg",
    review:
      "퇴마록 국내편(2권), 세계편(3권), 혼세편(4권), 말세편(5권), 외전(3권), 신퇴마록 신세편(3권) 을 밀리의 서재에서 순서대로 읽었다. " +
      "주술과 괴이 그리고 인간 의지와 음모 등 몰입하여 읽기 좋은 설정을 가진 소설이다. " +
      "각 캐릭터들도 능력을 얻고 세월을 겪으며 좀 더 입체적인 면모를 띄어가는 점도 좋았다. " +
      "이후 출간 예정인 마세편, 창세편도 기대가 되는 작품이다.",
  },
];
