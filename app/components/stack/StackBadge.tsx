import { stackBadgeDataMap } from "./stackBadgeConst";

interface StackBadgeProps {
  stackKey: string;
}

function getLuminance(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;

  const a = [r, g, b].map(val =>
    val <= 0.03928
      ? val / 12.92
      : Math.pow((val + 0.055) / 1.055, 2.4)
  );

  const luminance = a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
  return luminance;
}


function isLight(color: string) {  
  
  const match = color.match(/#[0-9A-Fa-f]{6}/);
  if(!match){
    console.log(`invalid hex code : ${match}`);
    return false;
  }    

  return getLuminance(match[0]) > 0.5;
}


export default function SkillBadge({
  stackKey,
}: StackBadgeProps): React.ReactElement {
  const stack = stackBadgeDataMap.get(stackKey);

  const bg = !!stack ? stack.tailwindHexBg : 'bg-[#111111]';

  return (
    <div className={`${bg} rounded pl-2 pr-2 font-bold `}>
      <span className={`${isLight(bg) ? 'text-black' : 'text-white'}`}>{!!stack ? stack.name : stackKey}</span>
    </div>
  );
}
