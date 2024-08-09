import { StackBadgeInterface } from "./stackBadgeConst";

export const backStackConsts = {
  SpringBoot: {
    name: "Spring",
    tailwindHexBg: "bg-[#6DB33F]",
  },
  MyBatis: {
    name: "MyBatis",
    tailwindHexBg: "bg-[#B52E31]",
  },
  MySQL: {
    name: "MySQL",
    tailwindHexBg: "bg-[#4479A1]",
  },

  PostgreSQL: {
    name: "PostgreSQL",
    tailwindHexBg: "bg-[#336791]",
  },
  MongoDB: {
    name: "MongoDB",
    tailwindHexBg: "bg-[#47A248]",
  },
} as const satisfies Record<string, StackBadgeInterface>;
