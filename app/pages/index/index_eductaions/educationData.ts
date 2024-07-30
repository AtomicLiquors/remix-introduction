import { EducationProps } from "./educationType";

export const educationData: EducationProps[] = [
  {
    title: "삼성 청년 SW 아카데미 9기",
    subtitle: "Java · 전공자 분반",
    startDate: new Date("2023-01-04"),
    endDate: new Date("2023-12-29"),
    time: 1600,
    location: "삼성전자주식회사 · 멀티캠퍼스 역삼",
    content: [
      "• 수료등급 : 우수 (상위 30% 이내)",
      "• 1학기 몰입형 코딩 집중 교육 (800시간) : Java + JavaScript 웹 개발 실습, Java 알고리즘 문제 해결",
      "• 2학기 심화 프로젝트 (800시간) : 자기주도형 팀 프로젝트 기반 실전 SW 개발 실습",
    ],
  },
  {
    title: "Java 기반 클라우드 융합 응용SW개발 과정",
    startDate: new Date("2022.01.17"),
    endDate: new Date("2022.07.26"),
    time: 900,
    location: "부산IT교육센터",
    content: [
      "Java 기초 프로그래밍,",
      "Java 프레임워크 기반 애플리케이션 개발 실습 (Swing, JSP, Spring)",
    ],
  },
];
