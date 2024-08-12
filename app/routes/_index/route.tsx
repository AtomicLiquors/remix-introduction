
import Container from "@/common/components/atoms/Container";
import IndexCertificates from "@/routes/_index/index_certificates/IndexCertificates";
import IndexContactMe from "@/routes/_index/index_contact_me/IndexContactMe";
import IndexEducations from "@/routes/_index/index_eductaions/IndexEducations";
import IndexProfile from "@/routes/_index/index_profile/IndexProfile";
import IndexProjects from "@/routes/_index/index_projects/IndexProjects";
import IndexSkills from "@/routes/_index/index_skills/IndexSkills";
import IndexAwards from "@/routes/_index/index_awards/IndexAwards";


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
