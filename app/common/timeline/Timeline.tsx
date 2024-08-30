import TimelineListItem from "./TimelineListItem";

interface TimelineProps {
  children: React.ReactNode;
  className?: string;
}

export default function Timeline({
  children, className
}: TimelineProps): React.ReactElement {
  return (
    <ol className={`relative lg:ml-8 lg:border-s border-gray-200 dark:border-gray-700 ${className || ''}`}>
      {Array.isArray(children) ? (
        children.map((chlid, idx) => (
          <TimelineListItem key={idx}>{chlid}</TimelineListItem>
        ))
      ) : (
        <TimelineListItem>{children}</TimelineListItem>
      )}
    </ol>
  );
}
