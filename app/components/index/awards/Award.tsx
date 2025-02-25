import { FONT_AWESOME_TYPES, TAILWIND_COLOR_TYPES } from "@/components/common/icon/FontAwesome";
import TLItemCaption from "../timeline/atoms/TLItemTime";
import TLItemTitle from "../timeline/atoms/TLItemTitle";
import { AwardProps } from "./awardType";

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
