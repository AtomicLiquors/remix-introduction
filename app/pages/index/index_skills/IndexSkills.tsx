import Center from "@/components/common/Center";
import Skill from "./IndexSkill";
import { skillData } from "./indexSkillData";
import { themeClasses } from "@/theme/theme";

export default function IndexSkills() {
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
