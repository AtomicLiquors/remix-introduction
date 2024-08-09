import { backStackConsts } from "./backStackConsts";
import { frontStackConsts } from "./frontStackConsts";

export interface StackBadgeInterface {
    name: string;
    tailwindHexBg: string;
}

export const stackBadgeDataMap = new Map<string, StackBadgeInterface>([
    ...Object.entries(frontStackConsts),
    ...Object.entries(backStackConsts)
]);