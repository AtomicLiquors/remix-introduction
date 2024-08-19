import { ReactNode } from "react";

interface BoardItemLayoutProps {
  children: ReactNode;
}

export default function BoardItemRowContainer({children}:BoardItemLayoutProps) {
  return (
    <div
        className="
      w-full lg:w-5/6 flex justify-between
      "
      >
        {children}
      </div>
  )
}
