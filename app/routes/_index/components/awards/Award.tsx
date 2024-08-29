
import TLItemTitle from "@/common/timeline/atoms/timeline/TLItemTitle";
import TLItemCaption from "@/common/timeline/atoms/timeline/TLItemTime";
import { AwardProps } from "./awardType";
import { FONT_AWESOME_TYPES } from "@/common/icon/FontAwesome";

const Award: React.FC<AwardProps> = (award) => {
  return (
    <>
      <TLItemTitle title={award.name} icon={FONT_AWESOME_TYPES.AWARD}/>
      <TLItemCaption>
        {award.date.toLocaleDateString("ko-KR")} {award.authority}
      </TLItemCaption>
    </>
  );
};

export default Award;
