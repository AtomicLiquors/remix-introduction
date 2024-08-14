import RowCard from "@/common/components/molecules/RowCard";
import Timeline from "@/common/components/organisms/timeline/Timeline";
import { awardsData } from "./awardsData";
import Award from "./Award";
import { FONT_AWESOME_TYPES } from "@/common/icon/FontAwesome";

export default function IndexAwards() {
  return (
    <RowCard>
      <Timeline className="mb-8">
        {awardsData &&
          awardsData.map((cert, idx) => (
            <Award key={idx} {...cert} />
          ))}
      </Timeline>
    </RowCard>
  );
}
