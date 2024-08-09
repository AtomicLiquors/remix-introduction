import { StackBadgeInterface } from "./stackBadgeConst";

export const frontStackConsts = {
  HTML: {
    name: "HTML",
    color: "#E34F26",
    bgClassName: "bg-[#E34F26]",
  },
  CSS: {
    name: "CSS",
    color: "#1572B6",
    bgClassName: "bg-[#1572B6]",
  },
  JavaScript: {
    name: "JavaScript",
    color: "#F7DF1E",
    bgClassName: "bg-yellow-400",
  },
  TypeScript: {
    name: "TypeScript",
    color: "#3178C6",
    bgClassName: "bg-blue-500",
  },
  'React.js' : {
    name: "React",
    color: "#61DAFB",
    bgClassName: "bg-sky-400",
  },
  'Vue.js': {
    name: "Vue.js",
    color: "#42B883",
    bgClassName: "bg-emerald-500",
  },
  Angular: {
    name: "Angular",
    color: "#DD0031",
    bgClassName: "bg-red-700",
  },
  SASS: {
    name: "SASS",
    color: "#CC6699",
    bgClassName: "bg-pink-500",
  },
  Tailwind: {
    name: "Tailwind CSS",
    color: "#06B6D4",
    bgClassName: "bg-teal-400",
  },
  Bootstrap: {
    name: "Bootstrap",
    color: "#7952B3",
    bgClassName: "bg-purple-600",
  },
} as const satisfies Record<string, StackBadgeInterface>;
