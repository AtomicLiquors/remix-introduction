import Center from "@/components/common/Center";
import Container from "@/components/common/Container";
import RoundImage from "@/components/common/RoundImage";
import SkillsRow from "@/skills/SkillsRow";
import { themeClasses } from "@/theme/theme";

export default function Index() {
  return (
    <Container>
      <Center flex>
        <RoundImage src="/img/photos/profile.png" className="w-64"/>
        <p
          id="index-page"
          className={`${themeClasses.text.primary} text-3xl font-bold underline`}
        >
          최 효 빈
        </p>
        <div className={themeClasses.text.secondary}>
          <p>Java & JavaScript 개발자</p>
          <p>Powered By Remix</p>
        </div>
      </Center>
      <SkillsRow />
    </Container>
  );
}
