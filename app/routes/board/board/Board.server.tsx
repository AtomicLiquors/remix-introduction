import { useLoaderData } from "@remix-run/react";
import { getBoard } from "@/model/board.server";

export const loader = async () => {
  return await getBoard();
};

export default async function Board() {
  let data = await useLoaderData();
  console.log(data);

  return <div></div>;
}