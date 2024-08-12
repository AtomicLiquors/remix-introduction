import type { ShouldRevalidateFunction } from "@remix-run/react";
import Board from "./component/Board";
import { useLoaderData } from "@remix-run/react";
import { createBoard, getBoard } from "@/model/board.server";
import { ActionFunctionArgs, redirect } from "@remix-run/node";
import { useState } from "react";

export const shouldRevalidateFunction: ShouldRevalidateFunction = ({
  actionResult,
  defaultShouldRevalidate,
}) => {
  console.log(actionResult);
  if(actionResult?.ok) {
    return false;
  }
  return defaultShouldRevalidate;
};

export const loader = async () => {
  return await getBoard();
};

export const action = async ({
  request
}: ActionFunctionArgs) => {
  const result = createBoard();
  return true;
}


export default function BoardRoute() {
  const [loading, setLoading] = useState(false);
  
  const handleButtonClick = async () => {
    setLoading(true);
    await fetch("/board", {
      method: "POST"
    })
    setLoading(false); 
  }
  
  const handleDeleteBtnClick = async () => {
    setLoading(true);
    await fetch("/board/destroy", {
      method: "DELETE"
    })
    setLoading(false); 
  }
  //const data = useLoaderData<typeof loader>(); 차이점은?
  const data = useLoaderData();
  console.log(data);

  return (
    <>
      <Board />
      <button onClick={handleButtonClick} disabled={loading}>{loading ? 'Waiting...' : 'Create' }</button>
      <button onClick={handleDeleteBtnClick} disabled={loading}>{loading ? 'Waiting...' : 'Delete' }</button>
      {JSON.stringify(data)}
    </>
  );
}
