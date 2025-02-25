

interface BoardItemTitlesProps {
  title: string;
  subtitle?: string;
}

export default function BoardItemTitles({
  title,
  subtitle,
}: BoardItemTitlesProps) {
  return (
    <>
      <div className="break-keep text-left text-base font-medium">{title}</div>
      <div className="text-sm text-left font-normal">{subtitle}</div>
    </>
  );
}
