import { ReactNode } from "react";

interface BulletListContainerProps {
  className?: string;
  children: ReactNode;
}

export default function BulletListContainer({children, className}: BulletListContainerProps) {
  return (
    <div className={`space-y-1 ${className}`}>
      {children}
    </div>
  );
}
