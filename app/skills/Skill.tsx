import Center from "@/components/common/Center";
import { SkillProps } from "./skillType";

const path = "/skills"

const Skill: React.FC<SkillProps> = ({ title, content, img }) => {
  return (
    <>
      <Center flex className="sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white p-4 shadow-md rounded-lg">
        <img src={`${path}/${img}.png`} className="w-64"/>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p>{content}</p>
      </Center>
    </>
  );
}

export default Skill;
