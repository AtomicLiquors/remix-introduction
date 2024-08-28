import RowCard from "@/common/components/molecules/RowCard";
import Timeline from "@/common/timeline/Timeline";
import { awardsData } from "./awardsData";
import Award from "./Award";
import IndexItemTitles from "../IndexItemTitles";

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
