import { getBoards } from "@/model/board/board.server";

export const loader = async () => {
  return await getBoards();
};
