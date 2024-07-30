import { themeClasses } from "@/theme/theme";
import { EducationProps } from "./educationType";

const Education: React.FC<EducationProps> = (edu) => {
  return (
    <>
      <p className={`${themeClasses.text.primary}`}>
        <b>{edu.title}</b>
      </p>
      <p className={`${themeClasses.text.secondary}`}>
        {edu.startDate.toDateString()} - {edu.endDate.toDateString()} (
        {edu.time}시간), {edu.location}
      </p>
      <p>
        {edu.content.map((line) => (
          <p>{line}</p>
        ))}
      </p>
    </>
  );
};

export default Education;
