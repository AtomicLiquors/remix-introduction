import TimelineListItem from "./TimelineListItem";

interface TimelineProps {
  children: React.ReactNode;
}

export default function Timeline({
  children,
}: TimelineProps): React.ReactElement {
  return (
    <ol className="ml-8 relative border-s border-gray-200 dark:border-gray-700">
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
