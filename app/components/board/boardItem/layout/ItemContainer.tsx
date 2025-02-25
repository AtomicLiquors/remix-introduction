import Center from "@/components/common/general/atoms/Center";
import { ReactNode } from "react";

interface BoardItemLayoutProps {
  children: ReactNode;
}

export default function BoardItemContainer({children}: BoardItemLayoutProps) {
  return (
    <Center
      flex flexCol
      className="gap-5 p-5 order border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
    >
      {children}
    </Center>
  )
}
