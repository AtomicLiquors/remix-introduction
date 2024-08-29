import { ReactNode } from "react";

interface LineBreakProps {
  children: ReactNode;
}

export default function LineBreak({ children }: LineBreakProps) {
  return <span className="inline-block">{children}</span>;
}
