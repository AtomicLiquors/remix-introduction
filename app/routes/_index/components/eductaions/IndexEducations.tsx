import RowCard from "@/common/components/molecules/RowCard";
import Education from "./Education";
import { educationData } from "./educationData";
import Timeline from "@/common/timeline/Timeline";
import IndexItemTitles from "../IndexItemTitles";

export default function IndexEducations() {
  return (
    <div>
      <IndexItemTitles title="교육사항" />
      <RowCard>
        <Timeline>
          {educationData &&
            educationData.map((edu, idx) => <Education key={idx} {...edu} />)}
        </Timeline>
      </RowCard>
    </div>
  );
}
