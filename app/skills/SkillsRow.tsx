import Center from "@/components/common/Center";
import Skill from "./Skill";
import { skillData } from "./skillData";

export default function SkillsRow() {
  return (
    <Center flex>
    {/* To-Do : replace grid to get contents centered. */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mx-auto">
        {skillData &&
          skillData.map((skill, idx) => (
            <Skill
              key={idx}
              title={skill.title}
              content={skill.content}
              img={skill.img}
            />
          ))}
      </div>
    </Center>
  );
}
