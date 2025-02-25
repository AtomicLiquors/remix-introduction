import RowCard from "@/components/common/general/molecules/RowCard";
import IndexItemTitles from "../IndexItemTitles";
import Timeline from "../timeline/Timeline";
import Education from "./Education";
import { educationData } from "./educationData";

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
