import Center from "@/components/common/general/atoms/Center";
import IndexItemTitles from "../IndexItemTitles";
import IndexSkill from "./IndexSkill";
import { skillData } from "./indexSkillData";

export default function IndexSkills() {
  return (
    <Center flex flexCol className="gap-5">
    {/* To-Do : uneven size with small screen */}
      <IndexItemTitles title="기술 스택"/>
      <div className="flex flex-wrap justify-center gap-5 max-w-128">
        {skillData &&
          skillData.map((skill, idx) => (
            <IndexSkill
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
