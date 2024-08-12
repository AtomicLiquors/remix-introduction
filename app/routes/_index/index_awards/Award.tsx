
import TLItemTitle from "@/common/components/atoms/timeline/TLItemTitle";
import TLItemCaption from "@/common/components/atoms/timeline/TLItemTime";
import { AwardProps } from "./awardType";

const Award: React.FC<AwardProps> = (award) => {
  return (
    <>
      <TLItemTitle>{award.name}</TLItemTitle>
      <TLItemCaption>
        {award.date.toLocaleDateString("ko-KR")} {award.authority}
      </TLItemCaption>
    </>
  );
};

export default Award;
