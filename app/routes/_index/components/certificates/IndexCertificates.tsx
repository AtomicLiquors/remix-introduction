import RowCard from "@/common/components/molecules/RowCard";
import Timeline from "@/common/components/organisms/timeline/Timeline";
import { certificateData, linguisticsData } from "./certificateData";
import Certificate from "./Certificate";
import { FONT_AWESOME_TYPES } from "@/common/icon/FontAwesome";
import IndexItemTitles from "../IndexItemTitles";

export default function IndexCertificates() {
  return (
    <>
      <IndexItemTitles title="자격사항" />
      <RowCard>
        <Timeline className="mb-8">
          {certificateData &&
            certificateData.map((cert, idx) => (
              <Certificate key={idx} {...cert} icon={FONT_AWESOME_TYPES.CARD} />
            ))}
        </Timeline>
        <Timeline>
          {linguisticsData &&
            linguisticsData.map((cert, idx) => (
              <Certificate
                key={idx}
                {...cert}
                icon={FONT_AWESOME_TYPES.WORLD}
              />
            ))}
        </Timeline>
      </RowCard>
    </>
  );
}
