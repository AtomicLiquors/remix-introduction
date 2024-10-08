import { EducationProps } from "./educationType";
import TLItemTitle from "@/common/timeline/atoms/TLItemTitle";
import TLItemCaption from "@/common/timeline/atoms/TLItemTime";
import TLItemDescription from "@/common/timeline/atoms/TLItemContent";
import {
  FONT_AWESOME_TYPES,
  TAILWIND_COLOR_TYPES,
} from "@/common/icon/FontAwesome";
import LineBreak, { breakpoint } from "@/common/components/atoms/LineBreak";
import BulletListItem from "@/common/components/atoms/BulletListItem";

const Education: React.FC<EducationProps> = (edu) => {
  return (
    <>
      <TLItemTitle
        title={edu.title}
        icon={FONT_AWESOME_TYPES.EDUCATION}
        color={TAILWIND_COLOR_TYPES.EDUCATION}
      />
      <TLItemCaption>
        <div className="block sm:flex">
          <div className="mb-1 sm:mb-0">
            {edu.startDate.toLocaleDateString("ko-KR")} -{" "}
            {edu.endDate.toLocaleDateString("ko-KR")} ({edu.time}시간){" "}
            <span className="hidden sm:inline">|&nbsp;</span>
          </div>
          <div>{edu.location}</div>
        </div>
      </TLItemCaption>
      <TLItemDescription>
        {edu.content.map((line, lineIdx) => (
        <BulletListItem className={"text-sm"} key={lineIdx} spacing={0} bullet={<>‧</>} item={line.split(breakpoint).map((token, tokenIdx) => (
              <LineBreak key={tokenIdx}>{token}</LineBreak>
            ))}/>
          ))}
      </TLItemDescription>
    </>
  );
};

export default Education;
