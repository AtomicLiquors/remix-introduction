import LineBreak, { breakpoint } from "@/common/components/atoms/LineBreak";
import { SkillProps } from "./indexSkillType";
import { themeClasses } from "@/theme/theme";

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
        
        <div className="space-y-1">
          {content.map((line, lineIdx) => (
            <div
              className={`flex text-left items-start ${themeClasses.text.secondary}`}
              key={lineIdx}
            >
              <span className="mr-2">•</span>
              <div className="block">
                {line.split(breakpoint).map((token, tokenIdx) => (
                  <LineBreak key={tokenIdx}>{token}</LineBreak>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default IndexSkill;
