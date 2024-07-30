import Container from "@/components/common/Container";
import IndexProfile from "@/pages/index/IndexProfile";
import SkillsRow from "@/skills/SkillsRow";

export default function Index() {
  return (
    <Container>
      <IndexProfile/>
      <SkillsRow />
    </Container>
  );
}
