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
      </Container>
    </>
  );
}
