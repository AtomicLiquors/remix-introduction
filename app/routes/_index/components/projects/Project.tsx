import { themeClasses } from "@/theme/theme";
import { ProjectProps } from "./projectType";

import StackBadge from "@/common/stack/StackBadge";
import RowCard from "@/common/components/molecules/RowCard";

const Project: React.FC<ProjectProps> = (proj) => {
  return (
    <RowCard imgSrc={proj.screenshots[0]}>
      <div className={`${themeClasses.text.primary} font-bold text-xl mb-2`}>
        <span className="text-sm text-gray-600">{proj.emoji}</span>
        &nbsp;
        {proj.title}
      </div>
      <div className="flex gap-2 flex-wrap text-sm sm:text-base">
        {proj.stacks.map((stack, idx) => (
          <StackBadge key={idx} stackKey={stack}/>
        ))}
      </div>
      <div className={`break-keep ${themeClasses.text.secondary}`}>{proj.description}</div>
      <br/>
      <div className="hidden sm:block">
      <div className={`${themeClasses.text.primary} font-bold`}>
        성과 및 리뷰
      </div>
      {proj.achievements.map((achievement, idx) => (
        <p key={idx} className="break-keep text-gray-700 text-base">
          <div className="flex gap-1">
            <div>-</div>
          {achievement}
          </div>
        </p>
      ))}
      </div>

      {proj.links.code && (
        <div className="flex items-center mt-4">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src="/img/github.png"
            alt="Github"
          />
          <div className="text-sm">
            <p className="text-gray-900 leading-none font-bold">| 소스 코드 |</p>
            <p className="text-gray-600 mt-1">{proj.links.code}</p>
          </div>
        </div>
      )}
    </RowCard>
  );
};

export default Project;
