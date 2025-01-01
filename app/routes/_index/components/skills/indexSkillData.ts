import { breakpoint } from "@/common/components/atoms/LineBreak";
import { SkillProps } from "./indexSkillType";

export const skillData: SkillProps[] = [
  // last update : 25.01.01
  {
    title: "JavaScript",
    content: [
      "debouncing 활용 사용자 입력 처리 최적화",
      `Node.js 환경에서 동작하는${breakpoint}CRON 작업 기반 그룹 스터디용 Discord 봇 개발`,
      "Jest 활용 안정적 클라이언트 애플리케이션 개발 경험",
      "Remix 기반 풀스택 애플리케이션 개발 경험"
    ],
    img: "javascript",
  },
  {
    title: "TypeScript",
    content: [`Interface, as const 키워드 활용${breakpoint}타입 안정적 애플리케이션 개발`],
    img: "typescript",
  },
  {
    title: "React",
    content: ["Zustand 활용 전역 상태관리", "useMemo 훅을 이용한 컴포넌트 렌더링 최적화 경험", "커스텀 hook을 활용한 UI와 컴포넌트 상태 분리"],
    img: "react",
  },
  /*
  {
    title: "Node.js",
    content: "Skilled in server-side development using Node.js.",
    img: "node",
  },
  */
];
