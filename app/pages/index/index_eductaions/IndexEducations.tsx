import RowCard from "@/common/display/card/RowCard";
import Education from "./Education";
import { educationData } from "./educationData";
import Timeline from "@/components/common/timeline/Timeline";

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
