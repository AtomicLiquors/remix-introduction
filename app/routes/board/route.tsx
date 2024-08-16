import { useFetcher, useLoaderData } from "@remix-run/react";
import { createBoard, getBoard, PartialBoard } from "@/model/board.server";
import { ActionFunction, ActionFunctionArgs, json } from "@remix-run/node";
import MarkdownEditor from "@/common/markdown/MarkdownEditor";
import BoardItem, { BoardItemProps } from "./components/BoardItem";
import NewBoard from "./components/NewBoard";

export const loader = async () => {
  return await getBoard();
};

export const action: ActionFunction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;
  const author = formData.get('author') as string;
  const password = formData.get('password') as string;


  if (!title || !content || !author || !password) {
    return json({ success: false, error: 'missing field' }, { status: 400 });
  }
  const ip = request.headers.get('x-forwarded-for') || 'Unknown IP';

  const data: PartialBoard = {
    title: title, 
    content: content, 
    author: author, 
    password: password, 
    ip: ip
  }

  const result = createBoard(data);
  return true;
};

export default function BoardRoute() {
  const fetcher = useFetcher();
  const loading = fetcher.state !== "idle";

  const handleButtonClick = async () => {
    fetcher.submit(null, {
      action: `/board`,
      method: "POST",
    });
  };

  const data = useLoaderData<typeof loader>();

  //To-Do: Loading시 기존 화면 뿌옇게 표시.

  return (
    <>
      <button onClick={handleButtonClick} disabled={loading}>
        {loading ? "Waiting..." : "Create"}
      </button>

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
