import Center from "@/common/components/atoms/Center";
import { ReactNode } from "react";

interface BoardItemLayoutProps {
  children: ReactNode;
}

export default function BoardItemContainer({children}: BoardItemLayoutProps) {
  return (
    <Center
      flex
      className="p-5 order border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
    >
      <div
        className="
      w-full lg:w-5/6 flex justify-between
      "
      >
        {children}
      </div>
    </Center>
  )
}
