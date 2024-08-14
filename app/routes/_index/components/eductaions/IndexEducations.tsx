import RowCard from "@/common/components/molecules/RowCard";
import Education from "./Education";
import { educationData } from "./educationData";
import Timeline from "@/common/components/organisms/timeline/Timeline";
import { FONT_AWESOME_TYPES } from "@/common/icon/FontAwesome";

export default function IndexEducations() {
  return (
    <RowCard>
      <Timeline icon={FONT_AWESOME_TYPES.EDUCATION}>
        {educationData &&
          educationData.map((edu, idx) => <Education key={idx} {...edu} />)}
      </Timeline>
    </RowCard>
  );
}
