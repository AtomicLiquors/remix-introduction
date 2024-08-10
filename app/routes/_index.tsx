import Container from "@/common/display/Container";
import IndexContactMe from "@/pages/index/index_contact_me/IndexContactMe";
import IndexEducations from "@/pages/index/index_eductaions/IndexEducations";
import IndexProfile from "@/pages/index/index_profile/IndexProfile";
import IndexProjects from "@/pages/index/index_projects/IndexProjects";
import IndexSkills from "@/pages/index/index_skills/IndexSkills";

export default function Index() {
  return (
    <>
      <IndexProfile />
      <Container>
        <IndexSkills />
        <IndexProjects />
        <IndexEducations />
        <IndexContactMe />
      </Container>
    </>
  );
}
