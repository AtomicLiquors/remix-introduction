import Container from "@/common/components/atoms/Container";
import IndexCertificates from "@/routes/_index/components/certificates/IndexCertificates";
import IndexContactMe from "@/routes/_index/components/contact_me/IndexContactMe";
import IndexEducations from "@/routes/_index/components/eductaions/IndexEducations";
import IndexProjects from "@/routes/_index/components/projects/IndexProjects";
import IndexSkills from "@/routes/_index/components/skills/IndexSkills";
import IndexAwards from "@/routes/_index/components/awards/IndexAwards";
import { themeClasses } from "@/theme/theme";
import Center from "@/common/components/atoms/Center";
import IndexItemTitles from "./components/IndexItemTitles";

export default function IndexRoute() {
  return (
    <>
      <Container className="flex flex-col mt-20 gap-20">
        <div>
          <IndexItemTitles title="Introduction" />
          <Center className={`mt-5 ${themeClasses.text.secondary}`}>
            <p>안녕하세요! 프론트엔드 웹 개발자 최효빈입니다.</p>
            <p>프론트엔드 분야의 다양한 기술과 빠른 피드백을 즐깁니다.</p>
            <p>
              사소한 아이디어도 진지하게 경청하고, 안 되는 이유보다 되는 이유를
              찾으며
            </p>
            <p>색다른 소프트웨어를 만들어내는 팀원입니다.</p>
          </Center>
        </div>
        <IndexSkills />
        <IndexProjects />
        <IndexEducations />
        <IndexAwards />
        <IndexCertificates />
        <IndexContactMe />
      </Container>
    </>
  );
}
