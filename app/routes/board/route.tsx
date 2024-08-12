import Board from "./board/Board";
import { useLoaderData } from "@remix-run/react";
import { getBoard } from "@/model/board.server";

export const loader = async () => {
  return await getBoard();
};

export default function BoardRoute() {
  const data = useLoaderData();
  console.log(data);

  return (
    <>
      <Board />
      {JSON.stringify(data)}
    </>
  );
}
