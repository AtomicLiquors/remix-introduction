import { ReactNode } from "react";

interface BoardItemLayoutProps {
    children: ReactNode;
}

export default function BoardItemMiddleBlock({
    children,
  }: BoardItemLayoutProps) {
  return (
    <div className="flex-initial w-auto text-left text-gray-600 dark:text-gray-400">
      {children}
    </div>
  )
}
