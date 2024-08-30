import { EducationProps } from "./educationType";
import TLItemTitle from "@/common/timeline/atoms/TLItemTitle";
import TLItemCaption from "@/common/timeline/atoms/TLItemTime";
import TLItemDescription from "@/common/timeline/atoms/TLItemContent";
import { FONT_AWESOME_TYPES, TAILWIND_COLOR_TYPES } from "@/common/icon/FontAwesome";

const Education: React.FC<EducationProps> = (edu) => {
  return (
    <>
      <TLItemTitle title={edu.title} icon={FONT_AWESOME_TYPES.EDUCATION} color={TAILWIND_COLOR_TYPES.EDUCATION}/>
      <TLItemCaption>
        {edu.startDate.toLocaleDateString("ko-KR")} -{" "}
        {edu.endDate.toLocaleDateString("ko-KR")} ({edu.time}시간) |{" "}
        {edu.location}
      </TLItemCaption>
      <TLItemDescription>
        {edu.content.map((line, idx) => (
          <p className="text-sm" key={idx}>{line}</p>
        ))}
      </TLItemDescription>
    </>
  );
};

export default Education;
