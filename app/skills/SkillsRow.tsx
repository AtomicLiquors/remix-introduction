import Center from "@/components/common/Center";
import Skill from "./Skill";
import { skillData } from "./skillData";

export default function SkillsRow() {
  return (
    <Center flex>
    {/* To-Do : uneven size with small screen */}
      <div className="flex flex-wrap justify-center gap-16 max-w-128">
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
