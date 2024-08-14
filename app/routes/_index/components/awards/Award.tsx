
import TLItemTitle from "@/common/components/atoms/timeline/TLItemTitle";
import TLItemCaption from "@/common/components/atoms/timeline/TLItemTime";
import { AwardProps } from "./awardType";
import { FONT_AWESOME_TYPES } from "@/common/icon/FontAwesome";

const Award: React.FC<AwardProps> = (award) => {
  return (
    <>
      <TLItemTitle title={award.name} icon={FONT_AWESOME_TYPES.EDUCATION}/>
      <TLItemCaption>
        {award.date.toLocaleDateString("ko-KR")} {award.authority}
      </TLItemCaption>
    </>
  );
};

export default Award;
