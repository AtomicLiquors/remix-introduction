
import { certificateData, linguisticsData } from "./certificateData";
import Certificate from "./Certificate";
import IndexItemTitles from "../IndexItemTitles";
import RowCard from "@/components/common/general/molecules/RowCard";
import { FONT_AWESOME_TYPES, TAILWIND_COLOR_TYPES } from "@/components/common/icon/FontAwesome";
import Timeline from "../timeline/Timeline";

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
