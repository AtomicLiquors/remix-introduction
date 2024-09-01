import { ReactNode } from "react";
import BulletListItem from "./BulletListItem";

interface BulletListProps {
  listItemClassName: string;
  bullet: ReactNode;
  data: ReactNode[];
}

export default function BulletList({
  listItemClassName,
  bullet,
  data,
}: BulletListProps) {
  return (
    <div className="space-y-1">
      {data.map((e, idx) => (
        <BulletListItem
          key={idx}
          className={listItemClassName}
          bullet={bullet}
          item={e}
        />
      ))}
    </div>
  );
}
