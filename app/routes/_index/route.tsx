import IndexCertificates from "@/components/index/certificates/IndexCertificates";
import IndexContactMe from "@/components/index/contact_me/IndexContactMe";
import IndexEducations from "@/components/index/eductaions/IndexEducations";
import IndexProjects from "@/components/index/projects/IndexProjects";
import IndexSkills from "@/components/index/skills/IndexSkills";
import IndexAwards from "@/components/index/awards/IndexAwards";
import IndexIntroduction from "@/components/index/introduction/IndexIntroduction";
import Container from "@/components/common/general/atoms/Container";

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
