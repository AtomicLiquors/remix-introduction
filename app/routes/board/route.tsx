import { useFetcher, useLoaderData } from "@remix-run/react";
import { createBoard, getBoard } from "@/model/board.server";
import { ActionFunctionArgs, redirect } from "@remix-run/node";
import MarkdownEditor from "@/common/markdown/MarkdownEditor";
import Comments from "./comments/Comments";
import BoardItem, { BoardItemProps } from "./components/BoardItem";

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
    fetcher.submit(
      null, 
      {
        action: `/board`,
        method: "POST",
      }
    );
  }
  
  

  const data = useLoaderData<typeof loader>();

  //To-Do: Loading시 기존 화면 뿌옇게 표시.

  
  return (
    <>
      <button onClick={handleButtonClick} disabled={loading}>{loading ? 'Waiting...' : 'Create' }</button>
      
      {
        data?.boards!.map((board, idx) => <BoardItem key={idx} {...board as BoardItemProps}></BoardItem>)
      }
      {/*
      <MarkdownRenderer/>
       */}
      <MarkdownEditor/>
      <Comments/>
    </>
  );
}
