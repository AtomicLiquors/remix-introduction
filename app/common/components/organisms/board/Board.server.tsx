/*
import { useLoaderData } from "@remix-run/react";

export const loader = async () => {
  const { getBoard } = await import("@/model/board.server");
  return await getBoard();
};

export default function Board() {
  let data = useLoaderData();
  console.log(data);

  return <div></div>;
}
*/