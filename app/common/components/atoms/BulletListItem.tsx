import { ReactNode } from "react";

interface ListItemProps {
  className?: string;
  bullet: ReactNode;
  item: ReactNode;
}

export default function BulletListItem({
  className,
  bullet,
  item,
}: ListItemProps) {
  return (
    <div className={`flex text-left items-start ${className}`}>
      <span className="mr-2">{bullet}</span>
      <div className="block">{item}</div>
    </div>
  );
}
