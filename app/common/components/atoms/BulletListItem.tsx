import { ReactNode } from "react";

interface ListItemProps {
  className?: string;
  key: number;
  bullet: ReactNode;
  item: ReactNode;
  spacing?: number;
}

const spacingTWClass: {
  [key: number]: string;
} = {
  0: "mr-2 sm: mr-0",
  1: "mr-3 sm: mr-1",
  2: "mr-4 sm: mr-2",
};

export default function BulletListItem({
  className,
  bullet,
  item,
  spacing,
}: ListItemProps) {
  return (
    <div className={`flex text-left items-start ${className}`}>
      <div
        className={
          spacing !== undefined && spacingTWClass[spacing]
            ? spacingTWClass[spacing]
            : spacingTWClass[0]
        }
      >
        {bullet}
      </div>
      <div className="block">{item}</div>
    </div>
  );
}
