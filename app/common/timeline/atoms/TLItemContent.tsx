import { ReactNode } from "react";

interface TLItemDescriptionProps {
    children: ReactNode;
  }
  

export default function TLItemDescription({ children }: TLItemDescriptionProps) {
  return (
    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
      {children}
    </p>
  )
}
