
import TLItemTitle from "@/common/timeline/atoms/TLItemTitle";
import TLItemCaption from "@/common/timeline/atoms/TLItemTime";
import { AwardProps } from "./awardType";
import { FONT_AWESOME_TYPES, TAILWIND_COLOR_TYPES } from "@/common/icon/FontAwesome";

const Award: React.FC<AwardProps> = (award) => {
  return (
    <>
      <TLItemTitle title={award.name} icon={FONT_AWESOME_TYPES.AWARD} color={TAILWIND_COLOR_TYPES.AWARD}/>
      <TLItemCaption>
        {award.date.toLocaleDateString("ko-KR")} {award.authority}
      </TLItemCaption>
    </>
  );
};

export default Award;
