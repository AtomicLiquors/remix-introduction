import { isHexcodeLight } from "@/utils";
import { stackBadgeDataMap } from "./stackBadgeConst";

interface StackBadgeProps {
  stackKey: string;
}


export default function SkillBadge({
  stackKey,
}: StackBadgeProps): React.ReactElement {
  const stack = stackBadgeDataMap.get(stackKey);

  const bg = !!stack ? stack.tailwindHexBg : 'bg-[#999999]';

  return (
    <div className={`${bg} rounded pl-2 pr-2 pb-1 font-bold flex`}>
      <span className={`${isHexcodeLight(bg) ? 'text-black' : 'text-white'}`}>
        {!!stack ? stack.name : stackKey}
      </span>
    </div>
  );
}
