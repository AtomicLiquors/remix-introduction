import Center from "@/common/components/atoms/Center";
import { themeClasses } from "@/theme/theme";
import IndexItemTitles from "../IndexItemTitles";
import LineBreak from "@/common/components/atoms/LineBreak";

export default function IndexIntroduction() {
  return (
    <div>
      <IndexItemTitles title="Introduction" />
      <Center className={`mt-5 ${themeClasses.text.secondary} space-y-2`}>
        <div>
          <LineBreak>안녕하세요!</LineBreak>
          <LineBreak>React.js 웹 개발자 최효빈입니다.</LineBreak>
        </div>
        <div>
          <p>
            <LineBreak>프론트엔드 분야의 다양한 기술과</LineBreak>
            <LineBreak>빠른 피드백을 즐깁니다.</LineBreak>
          </p>
          <p>
            <LineBreak>다양한 기술 스택을 활용한</LineBreak>
            <LineBreak>팀 프로젝트를 경험하여,</LineBreak>
          </p>
          <p>
            <LineBreak>웹 애플리케이션 개발 전반에 필요한</LineBreak>
            <LineBreak>기반 역량을 보유하고 있습니다.</LineBreak>
          </p>
          
        </div>
        <div>
          <p>사소한 아이디어도 진지하게 경청하고,</p>
          <p>안 되는 이유보다 되는 이유를 찾으며</p>
          <p>
            <LineBreak>색다른 소프트웨어를</LineBreak>
            <LineBreak>만들어내는 팀원입니다.</LineBreak>
          </p>
        </div>
      </Center>
    </div>
  );
}
