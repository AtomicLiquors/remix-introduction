import Center from "@/common/components/atoms/Center";
import { themeClasses } from "@/theme/theme";
import IndexItemTitles from "../IndexItemTitles";
import LineBreak from "@/common/components/atoms/LineBreak";

export default function IndexIntroduction() {
  return (
    <>
      <IndexItemTitles title="Introduction" />
      <Center className={`mt-5 ${themeClasses.text.secondary}`}>
        <p>안녕하세요!
            <LineBreak>프론트엔드 웹 개발자 최효빈입니다.</LineBreak></p>
        <p>프론트엔드 분야의 다양한 기술과 
            <LineBreak>빠른 피드백을 즐깁니다.</LineBreak></p>
        <p>
          사소한 아이디어도 진지하게 경청하고, 
          <LineBreak>안 되는 이유보다 되는 이유를 찾으며</LineBreak>
        </p>
        <p>색다른 소프트웨어를 <LineBreak>만들어내는 팀원입니다.</LineBreak></p>
      </Center>
    </>
  );
}
