import { themeClasses } from "@/theme/theme";
import { ProjectProps } from "./projectType";

import StackBadge from "@/common/stack/StackBadge";
import RowCard from "@/common/components/molecules/RowCard";
import GridWithFarLeftItem from "@/common/components/atoms/GridWithFarLeftItem";

const Project: React.FC<ProjectProps> = (proj) => {
  return (
    <RowCard imgSrc={proj.screenshots[0]} imgLink={proj.links.code || ""}>
      <div className={`${themeClasses.text.primary} font-bold text-xl mb-2`}>
        <span className="text-sm text-gray-600">{proj.emoji}</span>
        &nbsp;
        {proj.title}
      </div>
      <div className="flex gap-2 flex-wrap text-sm sm:text-base">
        {proj.stacks.map((stack, idx) => (
          <StackBadge key={idx} stackKey={stack} />
        ))}
      </div>
      <div className={`break-keep ${themeClasses.text.secondary}`}>
        {proj.description}
      </div>
      <br />
      <div className="hidden sm:block">
        <div className={`${themeClasses.text.primary} font-bold`}>
          성과 및 리뷰
        </div>
        {proj.achievements.map((achievement, idx) => (
          <p key={idx} className="break-keep text-gray-700 text-sm">
            <div className="flex gap-1">
              <div>-</div>
              {achievement}
            </div>
          </p>
        ))}
      </div>

      {proj.links.code && (
        <a href={proj.links.code} target="blank">
          <GridWithFarLeftItem
            className={"text-sm mt-1 sm:mt-6"}
            left={
              <img
                className="h-[1.5rem] sm:h-[2.5rem] rounded-full mr-1"
                src="/img/github.png"
                alt="Github"
              />
            }
            up={
              <div className="flex items-center h-full text-gray-900 leading-none font-bold">
                | 소스 코드 |
              </div>
            }
            down={
              <div className="flex items-center text-gray-600">
                {proj.links.code}
              </div>
            }
          />
        </a>
      )}
    </RowCard>
  );
};

export default Project;
