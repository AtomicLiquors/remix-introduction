import { StackBadgeInterface } from "./stackBadgeConst";

export const frontStackConsts = {
  HTML: {
    name: "HTML",
    tailwindHexBg: "bg-[#E34F26]",
  },
  CSS: {
    name: "CSS",
    tailwindHexBg: "bg-[#1572B6]",
  },
  JavaScript: {
    name: "JavaScript",
    tailwindHexBg: "bg-[#F7DF1E]",
  },
  TypeScript: {
    name: "TypeScript",
    tailwindHexBg: "bg-[#3178C6]",
  },
  "React.js": {
    name: "React",
    tailwindHexBg: "bg-[#61DAFB]",
  },
  "Vue.js": {
    name: "Vue.js",
    tailwindHexBg: "bg-[#42B883]",
  },
  Angular: {
    name: "Angular",
    tailwindHexBg: "bg-[#DD0031]",
  },
  SASS: {
    name: "SASS",
    tailwindHexBg: "bg-[#CC6699]",
  },
  Tailwind: {
    name: "Tailwind CSS",
    tailwindHexBg: "bg-[#06B6D4]",
  },
  Bootstrap: {
    name: "Bootstrap",
    tailwindHexBg: "bg-[#7952B3]",
  },
} as const satisfies Record<string, StackBadgeInterface>;
