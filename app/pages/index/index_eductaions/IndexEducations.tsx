import RowCard from "@/common/components/molecules/RowCard";
import Education from "./Education";
import { educationData } from "./educationData";
import Timeline from "@/common/components/organisms/timeline/Timeline";

export default function IndexEducations() {
  return (
    <RowCard>
      <Timeline>
        {educationData &&
          educationData.map((edu, idx) => <Education key={idx} {...edu} />)}
      </Timeline>
    </RowCard>
  );
}
