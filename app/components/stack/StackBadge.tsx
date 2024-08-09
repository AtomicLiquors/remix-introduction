import { stackBadgeDataMap } from "./stackBadgeConst";

interface StackBadgeProps {
  stackKey: string;
}

export default function SkillBadge({
  stackKey,
}: StackBadgeProps): React.ReactElement {
  const stack = stackBadgeDataMap.get(stackKey);

  const bg = !!stack ? stack.bgClassName : 'bg-gray-500';

  return (
    <div className={`${bg} text-white  rounded pl-2 pr-2 font-bold mix-blend-difference`}>
      {!!stack ? stack.name : stackKey}
    </div>
  );
}
