import { themeClasses } from "@/theme/theme";
import { ProjectProps } from "./projectType";

const Project: React.FC<ProjectProps> = (proj) => {
  return (
    <div className="p-4 flex justify-center">
      <div className="bg-white w-full lg:w-5/6 shadow-md border-r border-b border-l border-gray-200 p-4 flex sm:flex-col md:flex-col lg:flex-row-reverse justify-between leading-normal">
        <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover bg-black rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden text-white">
          image
        </div>
        <div className="mb-8">
          <div>
            <div
              className={`${themeClasses.text.primary} font-bold text-xl mb-2`}
            >
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
            <div className={themeClasses.text.secondary}>
              {proj.description}
            </div>
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
        </div>
      </div>
    </div>
  );
};

export default Project;
