
import Container from "@/common/components/atoms/Container";
import IndexCertificates from "@/routes/_index/components/certificates/IndexCertificates";
import IndexContactMe from "@/routes/_index/components/contact_me/IndexContactMe";
import IndexEducations from "@/routes/_index/components/eductaions/IndexEducations";
import IndexProfile from "@/routes/_index/components/profile/IndexProfile";
import IndexProjects from "@/routes/_index/components/projects/IndexProjects";
import IndexSkills from "@/routes/_index/components/skills/IndexSkills";
import IndexAwards from "@/routes/_index/components/awards/IndexAwards";
import { LoaderFunction } from "@remix-run/node";


export default function IndexRoute() {

  return (
    <>
      <IndexProfile />
      <Container>
        <IndexSkills />
        <IndexProjects />
        <IndexEducations />
        <IndexAwards/>
        <IndexCertificates/>
        <IndexContactMe />
      </Container>
    </>
  );
}
