import { ReactNode } from "react";

interface TLItemCaptionProps {
  children: ReactNode;
}

export default function TLItemCaption({ children }: TLItemCaptionProps) {
  return (
    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {children}
    </time>
  );
}
