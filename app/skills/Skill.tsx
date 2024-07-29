import Center from "@/components/common/Center";
import { SkillProps } from "./skillType";

export default function Skill({ title, content }: SkillProps) {
  return (
    <>
      <Center className="bg-white p-4 shadow-md rounded-lg">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p>{content}</p>
      </Center>
    </>
  );
}
