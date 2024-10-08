import RowCard from "@/common/components/molecules/RowCard";
import Timeline from "@/common/timeline/Timeline";
import { certificateData, linguisticsData } from "./certificateData";
import Certificate from "./Certificate";
import { FONT_AWESOME_TYPES, TAILWIND_COLOR_TYPES } from "@/common/icon/FontAwesome";
import IndexItemTitles from "../IndexItemTitles";

export default function IndexCertificates() {
  return (
    <div>
      <IndexItemTitles title="자격사항" />
      <RowCard>
        <Timeline className="mb-8">
          {certificateData &&
            certificateData.map((cert, idx) => (
              <Certificate key={idx} {...cert} icon={FONT_AWESOME_TYPES.CARD} color={TAILWIND_COLOR_TYPES.CARD}/>
            ))}
        </Timeline>
        <Timeline>
          {linguisticsData &&
            linguisticsData.map((cert, idx) => (
              <Certificate
                key={idx}
                {...cert}
                icon={FONT_AWESOME_TYPES.WORLD}
                color={TAILWIND_COLOR_TYPES.WORLD}
              />
            ))}
        </Timeline>
      </RowCard>
    </div>
  );
}
