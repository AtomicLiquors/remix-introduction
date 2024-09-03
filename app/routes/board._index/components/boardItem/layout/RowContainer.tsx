import { ReactNode } from "react";

interface BoardItemLayoutProps {
  className?: string;
  children: ReactNode;
}

export default function BoardItemRowContainer({
  children, className
}: BoardItemLayoutProps) {
  return (
    <div
      className={`${className} 
      w-full lg:w-5/6 flex justify-between
      `}
    >
      {children}
    </div>
  );
}
