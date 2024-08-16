import { getBoards } from "@/model/board.server";

export const loader = async () => {
  return await getBoards();
};
