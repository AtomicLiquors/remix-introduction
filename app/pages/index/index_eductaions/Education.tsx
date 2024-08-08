import { themeClasses } from "@/theme/theme";
import { EducationProps } from "./educationType";

const Education: React.FC<EducationProps> = (edu) => {
  return (
    <>
      <h3
        className={`${themeClasses.text.primary} flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white`}
      >
        {edu.title}
      </h3>
      <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {edu.startDate.toLocaleDateString("ko-KR")} -{" "}
        {edu.endDate.toLocaleDateString("ko-KR")} ({edu.time}시간) |{" "}
        {edu.location}
      </time>
      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        {edu.content.map((line, idx) => (
          <p key={idx}>{line}</p>
        ))}
      </p>
    </>
  );
};

export default Education;
