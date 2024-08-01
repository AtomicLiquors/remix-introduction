import { themeClasses } from "@/theme/theme";
import { ProjectProps } from "./projectType";
import RowCard from "@/components/common/card/RowCard";

const Project: React.FC<ProjectProps> = (proj) => {
  return (
    <RowCard imgSrc="image">
      <div>
        <div className={`${themeClasses.text.primary} font-bold text-xl mb-2`}>
          <span className="text-sm text-gray-600">{proj.emoji}</span>
          &nbsp;
          {proj.title}
        </div>
        <div className="flex gap-4">
          {/*
            {proj.stacks.map((stack, idx) => (
              <span key={idx} className="text-gray-700 text-base">{stack}</span>
            ))}
              */}
        </div>
        <div className={themeClasses.text.secondary}>{proj.description}</div>
        <br></br>
        <div className="font-bold">성과 및 리뷰</div>
        {/*
          <div>
            {proj.achievements.map((achievement, idx) => (
              <p key={idx} className="text-gray-700 text-base">- {achievement}</p>
            ))}
          </div>
           */}
      </div>

      {proj.links.code && (
        <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src="/img/github.png"
            alt="Github"
          />
          <div className="text-sm">
            <p className="text-gray-900 leading-none">| 소스 코드 |</p>
            <p className="text-gray-600">{proj.links.code}</p>
          </div>
        </div>
      )}
    </RowCard>
  );
};

export default Project;
