import { ReactNode } from "react";

export const breakpoint = "(break)"

interface LineBreakProps {
  children: ReactNode;
}

export default function LineBreak({ children }: LineBreakProps) {
  return <span className="inline-block">{children}&nbsp;</span>;
}
