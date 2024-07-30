import Center from "@/components/common/Center";
import { SkillProps } from "./skillType";
import { themeClasses } from "@/theme/theme";

const path = "/img/skills"

const Skill: React.FC<SkillProps> = ({ title, content, img }) => {
  return (
    <>
      <Center flex className={`${themeClasses.bg.secondary} sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 shadow-md rounded-lg`}>
        <img src={`${path}/${img}.png`} className="w-64"/>
        <h3 className={`${themeClasses.text.primary} text-lg text-primary font-semibold mb-2`}>{title}</h3>
        <p className={themeClasses.text.secondary}>{content}</p>
      </Center>
    </>
  );
}

export default Skill;
