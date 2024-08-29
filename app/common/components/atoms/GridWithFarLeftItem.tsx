import { ReactNode } from "react";

interface GridWithFarLeftItemProps {
    className?: string;
    onClick?: () => void;
    left: ReactNode;
    up: ReactNode;
    down: ReactNode;
}

export default function IconGrid({className, onClick, left, up, down}: GridWithFarLeftItemProps) {
  return (
    <div className={`grid grid-cols-[auto_1fr] grid-rows-2 ${className} ${!!onClick && "cursor-pointer"}`}>
      <div className="row-span-1 col-span-1 sm:row-span-2">
        {left}
      </div>
      <div className="row-span-1">{up}</div>
      <div className="col-span-2 sm:col-span-1">{down}</div>
    </div>
  );
}
