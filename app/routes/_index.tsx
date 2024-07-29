import Center from "@/components/common/Center";
import Container from "@/components/common/Container";
import Skills from "@/skills/Skills";

export default function Index() {
  return (
    <Container>
      <Center>
        <p id="index-page" className="text-3xl font-bold underline">
          최 효 빈
        </p>
        <p>Java & JavaScript 개발자 Powered By Remix</p>
      </Center>
      <Skills />
    </Container>
  );
}
