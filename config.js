/**
 * Watercolor Soft Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 1. 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 2. 메인 (히어로) ──
  groom: {
    name: "정구열",
    nameEn: "Groom",
    father: "정관용",
    mother: "정민영",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "이은지",
    nameEn: "Bride",
    father: "이성기",
    mother: "정혜숙",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2027-02-21",
    time: "14:00",
    venue: "서울대학교 이라운지",
    hall: "",
    address: "서울특별시 관악구 관악로 1",
    tel: "02-875-7761"
  },

  // ── 3. 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "서로 다른 길을 걷던 두 사람이 만나\n나의 속도로 발을 맞추게 되었습니다.\n\n저희의 첫페이지가 펼쳐지는 날,\n귀한 걸음으로 함께해 주시길 바랍니다."
  },

  // ── 4. 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "함께 웃고 대화하는 평범한 하루 속에서\n평생을 곁에 두고 싶은 확신을 얻었습니다.\n\n언제나 서로의 가장 든든한 온기가되어\n바르게 살아가겠습니다."
  },

  // ── 5. 오시는 길 ──
  mapLinks: {
    kakao: "https://place.map.kakao.com/1408612060",
    naver: "https://naver.me/5N15n4Vu"
  },

  // ── 6. 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "정구열", bank: "우리은행", number: "1002-146-384245" },
      { role: "아버지", name: "정관용", bank: "우리은행", number: "429-07-037538" },
      { role: "어머니", name: "정민영", bank: "국민은행", number: "294-21-0299-034" }
    ],
    bride: [
      { role: "신부", name: "이은지", bank: "국민은행", number: "90226535121" },
      { role: "아버지", name: "이성기", bank: "국민은행", number: "399102-04-132452" },
      { role: "어머니", name: "정혜숙", bank: "국민은행", number: "427502-04-001772" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "정구열 ♥ 이은지 결혼합니다",
    description: "2027년 2월 21일, 소중한 분들을 초대합니다."
  }
};
