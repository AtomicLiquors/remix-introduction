import type { ShouldRevalidateFunction } from "@remix-run/react";
import Board from "./components/Board";
import { useFetcher, useLoaderData } from "@remix-run/react";
import { createBoard, getBoard } from "@/model/board.server";
import { ActionFunctionArgs, redirect } from "@remix-run/node";
import { useState } from "react";
import { useRevalidator } from "@remix-run/react";

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
  const fetcher = useFetcher();
  const loading = fetcher.state !== "idle";
  
  const handleButtonClick = async () => {
    /*
    await fetch("/board", {
      method: "POST"
    })
    */
    fetcher.submit(
      null, 
      {
        action: `/board`,
        method: "POST",
      }
    );
  }
  
  const handleDeleteBtnClick = async () => {
    
    await fetch("/board/destroy", {
      method: "DELETE"
    })
    
  }
  const data = useLoaderData<typeof loader>(); // 차이점은?
  //const data = useLoaderData();
  console.log(data);

  return (
    <>
      <Board />
      <button onClick={handleButtonClick} disabled={loading}>{loading ? 'Waiting...' : 'Create' }</button>
      <button onClick={handleDeleteBtnClick} disabled={loading}>{loading ? 'Waiting...' : 'Delete' }</button>
      
      {
        data?.boards!.map((board) => <div>{board.post_id} {board.title} {board.content} </div>)
      }
    </>
  );
}
