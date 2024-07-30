import Container from "@/components/common/Container";
import IndexProfile from "@/pages/index/index_profile/IndexProfile";
import IndexSkills from "@/pages/index/index_skills/IndexSkills";

export default function Index() {
  return (
    <Container>
      <IndexProfile/>
      <IndexSkills />
    </Container>
  );
}
