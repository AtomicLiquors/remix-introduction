import Center from "@/common/components/atoms/Center";
import { ReactNode } from "react";

interface BoardDetailContainerLayoutProps {
  children: ReactNode;
}

export default function BoardModalContainer({children}: BoardDetailContainerLayoutProps) {
  return (
    <div
      className="h-full flex flex-col items-center gap-5 p-5 order border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
    >
      {children}
    </div>
  )
}
