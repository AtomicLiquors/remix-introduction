import Container from "@/common/components/atoms/Container";
import IndexCertificates from "@/routes/_index/components/certificates/IndexCertificates";
import IndexContactMe from "@/routes/_index/components/contact_me/IndexContactMe";
import IndexEducations from "@/routes/_index/components/eductaions/IndexEducations";
import IndexProjects from "@/routes/_index/components/projects/IndexProjects";
import IndexSkills from "@/routes/_index/components/skills/IndexSkills";
import IndexAwards from "@/routes/_index/components/awards/IndexAwards";
import IndexIntroduction from "./components/introduction/IndexIntroduction";

export default function IndexRoute() {
  return (
    <>
      <Container className="flex flex-col mt-20 gap-20">
        <IndexIntroduction/>
        <IndexSkills />
        <IndexProjects />
        <IndexEducations />
        <IndexAwards />
        <IndexCertificates />
        <IndexContactMe />
        <div></div> {/* Container의 flex gap을 통해 하단 여백을 주기 위한 빈 div */}
      </Container>
    </>
  );
}
