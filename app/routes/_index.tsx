import Index from "@/pages/index/Index";
import { getBoard } from "@/model/board.server";
import { useLoaderData } from "@remix-run/react";

export const loader = async () => {
  return await getBoard();
};

export default function IndexRoute() {

  let data = useLoaderData();
  console.log(data);

  return (
    <Index/>
  );
}
