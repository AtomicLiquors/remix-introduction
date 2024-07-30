import Container from "@/components/common/Container";
import IndexEducations from "@/pages/index/index_eductaions/IndexEducations";
import IndexProfile from "@/pages/index/index_profile/IndexProfile";
import IndexProjects from "@/pages/index/index_projects/IndexProjects";
import IndexSkills from "@/pages/index/index_skills/IndexSkills";

export default function Index() {
  return (
    <Container>
      <IndexProfile/>
      <IndexSkills/>
      <IndexProjects/>
      <IndexEducations/>
    </Container>
  );
}
