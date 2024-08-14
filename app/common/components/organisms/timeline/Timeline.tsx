import { FAType } from "@/common/icon/FontAwesome";
import TimelineListItem from "./TimelineListItem";

interface TimelineProps {
  children: React.ReactNode;
  className?: string;
  icon: FAType;
}

export default function Timeline({
  children, icon, className
}: TimelineProps): React.ReactElement {
  return (
    <ol className={`ml-8 relative border-s border-gray-200 dark:border-gray-700 ${className}`}>
      {Array.isArray(children) ? (
        children.map((chlid, idx) => (
          <TimelineListItem key={idx} icon={icon}>{chlid}</TimelineListItem>
        ))
      ) : (
        <TimelineListItem icon={icon}>{children}</TimelineListItem>
      )}
    </ol>
  );
}
