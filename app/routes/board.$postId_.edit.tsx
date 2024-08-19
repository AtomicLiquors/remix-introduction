import {
  BoardEditRequestDTO,
  createBoard,
  BoardCreateRequestDTO,
  editBoard,
} from "@/model/board.server";
import { ActionFunction, ActionFunctionArgs, json } from "@remix-run/node";

export const action: ActionFunction = async ({
  request,
}: ActionFunctionArgs) => {
  const formData = await request.formData();
  const post_id = +(formData.get("post_id") as string);
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  if (!title || !content || !post_id) {
    return json({ success: false, error: "missing field" }, { status: 422 });
  }
  const data: BoardEditRequestDTO = {
    post_id: post_id,
    title: title,
    content: content,
  };

  const result = editBoard(data);
  return result;
};
