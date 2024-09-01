import { EducationProps } from "./educationType";
import TLItemTitle from "@/common/timeline/atoms/TLItemTitle";
import TLItemCaption from "@/common/timeline/atoms/TLItemTime";
import TLItemDescription from "@/common/timeline/atoms/TLItemContent";
import { FONT_AWESOME_TYPES, TAILWIND_COLOR_TYPES } from "@/common/icon/FontAwesome";
import LineBreak, { breakpoint } from "@/common/components/atoms/LineBreak";

const Education: React.FC<EducationProps> = (edu) => {
  return (
    <>
      <TLItemTitle title={edu.title} icon={FONT_AWESOME_TYPES.EDUCATION} color={TAILWIND_COLOR_TYPES.EDUCATION}/>
      <TLItemCaption>
        {edu.startDate.toLocaleDateString("ko-KR")} -{" "}
        {edu.endDate.toLocaleDateString("ko-KR")} ({edu.time}시간) <span className="hidden sm:inline">|{" "}</span>
        <LineBreak>{edu.location}</LineBreak>
      </TLItemCaption>
      <TLItemDescription>
        {edu.content.map((line, idx) => (
          <p className="text-sm" key={idx}>{line.split(breakpoint).map((e) => <LineBreak>{e}</LineBreak> )}</p>
        ))}
      </TLItemDescription>
    </>
  );
};

export default Education;
