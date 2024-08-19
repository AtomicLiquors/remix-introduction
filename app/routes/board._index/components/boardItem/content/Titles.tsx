

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
      <div className="text-base font-medium">{title}</div>
      <div className="text-sm font-normal">{subtitle}</div>
    </>
  );
}
