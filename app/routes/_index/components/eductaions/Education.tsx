import { EducationProps } from "./educationType";
import TLItemTitle from "@/common/components/atoms/timeline/TLItemTitle";
import TLItemCaption from "@/common/components/atoms/timeline/TLItemTime";
import TLItemDescription from "@/common/components/atoms/timeline/TLItemContent";
import TimelineListItem from "@/common/components/organisms/timeline/TimelineListItem";
import { FONT_AWESOME_TYPES } from "@/common/icon/FontAwesome";

const Education: React.FC<EducationProps> = (edu) => {
  return (
    <>
      <TLItemTitle title={edu.title} icon={FONT_AWESOME_TYPES.EDUCATION}/>
      <TLItemCaption>
        {edu.startDate.toLocaleDateString("ko-KR")} -{" "}
        {edu.endDate.toLocaleDateString("ko-KR")} ({edu.time}시간) |{" "}
        {edu.location}
      </TLItemCaption>
      <TLItemDescription>
        {edu.content.map((line, idx) => (
          <p key={idx}>{line}</p>
        ))}
      </TLItemDescription>
    </>
  );
};

export default Education;
