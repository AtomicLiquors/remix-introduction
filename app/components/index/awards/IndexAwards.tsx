import RowCard from "@/components/common/general/molecules/RowCard";
import IndexItemTitles from "../IndexItemTitles";
import Timeline from "../timeline/Timeline";
import Award from "./Award";
import { awardsData } from "./awardsData";

export default function IndexAwards() {
  return (
    <div>
      <IndexItemTitles title="수상내역" />
      <RowCard>
        <Timeline className="mb-8">
          {awardsData &&
            awardsData.map((cert, idx) => <Award key={idx} {...cert} />)}
        </Timeline>
      </RowCard>
    </div>
  );
}
