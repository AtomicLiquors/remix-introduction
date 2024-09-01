import LineBreak, { breakpoint } from "@/common/components/atoms/LineBreak";
import { SkillProps } from "./indexSkillType";
import { themeClasses } from "@/theme/theme";
import BulletListContainer from "@/common/components/molecules/BulletListContainer";
import BulletListItem from "@/common/components/atoms/BulletListItem";

const path = "/img/skills";

const IndexSkill: React.FC<SkillProps> = ({ title, content, img }) => {
  return (
    <div
      className={`${themeClasses.bg.card} flex gap-5 w-5/6 p-4 shadow-md rounded-lg text-left`}
    >
      <img src={`${path}/${img}.png`} className="w-16 h-16" />
      <div>
        <h3
          className={`${themeClasses.text.primary} text-lg text-primary font-semibold mb-2`}
        >
          {title}
        </h3>
        
        <BulletListContainer className={themeClasses.text.secondary}>
          {content.map((line, lineIdx) => (
            <BulletListItem key={lineIdx} bullet={<>•</>} item={line.split(breakpoint).map((token, tokenIdx) => (
              <LineBreak key={tokenIdx}>{token}</LineBreak>
            ))}/>
          ))}
        </BulletListContainer>

      </div>
    </div>
  );
};

export default IndexSkill;
