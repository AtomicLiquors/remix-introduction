import { StackBadgeInterface } from "./stackBadgeConst";

export const backStackConsts = {
  SpringBoot: {
    name: "Spring",
    color: "#6DB33F",
    bgClassName: "bg-lime-500",
  },
  MyBatis: {
    name: "MyBatis",
    color: "#B52E31",
    bgClassName: "bg-red-600",
  },
  MySQL: {
    name: "MySQL",
    color: "#4479A1",
    bgClassName: "bg-blue-700",
  },
  NodeJS: {
    name: "Node.js",
    color: "#339933",
    bgClassName: "bg-green-600",
  },
  Express: {
    name: "Express",
    color: "#000000",
    bgClassName: "bg-black",
  },
  Django: {
    name: "Django",
    color: "#092E20",
    bgClassName: "bg-emerald-900",
  },
  Flask: {
    name: "Flask",
    color: "#000000",
    bgClassName: "bg-black",
  },
  RubyOnRails: {
    name: "Ruby on Rails",
    color: "#CC0000",
    bgClassName: "bg-red-600",
  },
  PostgreSQL: {
    name: "PostgreSQL",
    color: "#336791",
    bgClassName: "bg-indigo-800",
  },
  MongoDB: {
    name: "MongoDB",
    color: "#47A248",
    bgClassName: "bg-green-700",
  },
} as const satisfies Record<string, StackBadgeInterface>;