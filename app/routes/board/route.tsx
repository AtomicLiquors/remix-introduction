import { useFetcher, useLoaderData } from "@remix-run/react";
import { createBoard, getBoards, PartialBoard } from "@/model/board.server";
import { ActionFunction, ActionFunctionArgs, json } from "@remix-run/node";
import MarkdownEditor from "@/common/markdown/MarkdownEditor";
import BoardItem, { BoardItemProps } from "./components/BoardItem";
import NewBoard from "./components/NewBoard";

export const loader = async () => {
  return await getBoards();
};

export default function BoardRoute() {
  const fetcher = useFetcher();
  const loading = fetcher.state !== "idle";

  const data = useLoaderData<typeof loader>();

  //To-Do: Loading시 기존 화면 뿌옇게 표시.

  return (
    <>
      {data?.boards!.map((board, idx) => (
        <BoardItem key={idx} {...(board as BoardItemProps)}></BoardItem>
      ))}
      {/*
      <MarkdownRenderer/>
       */}
      <NewBoard />
      <MarkdownEditor />
    </>
  );
}
