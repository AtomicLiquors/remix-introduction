import { ProjectProps } from "./projectType";

export const projectData: ProjectProps[] = [
  {
    emoji: "🎹",
    title: "OnTheBlock",
    subtitle: "빅데이터 온라인 합주 플랫폼",
    period: "2023.08.28 - 2023.10.06 (6주)",
    teamSize: 5,
    description:
      "뮤지션들이 연주 영상들을 공유하고, 연주 영상을 조합해 합주 영상을 제작하는 서비스",
    stacks: [
      "React.js",
      "SpringBoot",
      "Vite.js",
      "Zustand",
      "Styled-Component",
    ],
    role: "Front-end",
    responsibilities: [
      "핵심 기능 ‘합주 영상 제작' 구현 : 실시간 녹화, 파일 업로드 및 연주 영상 조합과 싱크 조정을 구현",
      "프론트엔드 개발 환경 설정, 화면 설계 및 구현, DB 설계 참여",
    ],
    achievements: [
      "화면 렌더링 성능 개선 : debouncing 및 useMemo hook 활용 렌더링 최적화",
      "JWT 인증 과정의 XSS 취약점 개선을 위한 프론트엔드 및 백엔드 리팩토링",
      "삼성 청년 SW 아카데미 특화 프로젝트 우수상, 4주차 Best Member 선정",
    ],
    links: {
      code: "https://github.com/AtomicLiquors/ontheblock",
    },
    screenshots: ["/img/project/ontheblock/ontheblock.png"],
  },
  {
    emoji: "🍏",
    title: "Ringo",
    subtitle: "여행지 커뮤니티 서비스",
    period: "2023.05.01 - 2023.05.26 (3주)",
    teamSize: 2,
    description:
      "관광지 공공데이터 기반 여행 계획 작성, 포토 리뷰 기능을 제공하는 여행 정보 커뮤니티 서비스",
    stacks: ["SpringBoot", "Vue.js"],
    role: "팀장, Full-Stack",
    responsibilities: [
      "회원 기능, 관광지 정보, 포토리뷰, 여행계획 등 주요 핵심 기능의 REST API 및 화면 구현",
      "DB구조 및 화면 설계, 협업체계(Git) 관리",
    ],
    achievements: [
      "가상 테이블(View) 활용을 통한 SQL문 재사용과 가독성 증진",
      "공공데이터에 대한 INSERT/UPDATE 연산을 하나의 SQL문으로 병합해 대용량 데이터의 중복 호출 제거",
      "삼성 청년 SW 아카데미 1학기 관통 프로젝트 최우수상",
    ],
    links: {
      demo: "https://www.youtube.com/watch?v=Zujd17yREBY",
    },
    screenshots: ["/img/project/ringo/ringo.png"],
  },
  {
    emoji: "🐶",
    title:
      "세나보 - 세상에 나쁜 보호자는 있다",
    subtitle: "모바일 AR 반려견 양육 시뮬레이션",
    period: "2023.10.09 - 2023.11.17 (7주)",
    teamSize: 6,
    description: "Unity 3D 기반 3D AR 반려견 양육 시뮬레이션",
    stacks: ["Unity 3D", "C#", "ARCore"],
    role: "3D AR 개발",
    responsibilities: [
      "Unity 3D 활용 평면인식 AR 구현, 3D 및 2D Scene에서의 애니메이션 구현",
    ],
    achievements: [
      "Coroutine 기반 멀티태스킹 환경에서 NPE, 동시성 문제로 인한 AR 오동작 해결",
      "Monolithic한 코드를 책임과 역할별로 분리하여, 가독성과 유지보수성 개선",
      "삼성 청년 SW 아카데미 자율 프로젝트 우수상, 5주차 Best Member 선정",
    ],
    links: {
      code: "https://github.com/AtomicLiquors/senabo",
    },
    screenshots: ["/img/project/senabo/senabo.png"],
  },
];
