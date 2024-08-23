import {
  BoardEditRequestDTO,
  editBoard,
} from "@/model/board.server";
import { ActionFunction, ActionFunctionArgs, json } from "@remix-run/node";

export const action: ActionFunction = async ({
  params, request,
}: ActionFunctionArgs) => {

  const formData = await request.formData();
  const post_id = +(params.postId as string);
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  if (!title || !content || !post_id) {
    console.log(title);
    console.log(content);
    console.log(post_id);
    const response = json({ success: false, error: "missing field" }, { status: 422 });
    console.log(response);
    return response;
  }
  const data: BoardEditRequestDTO = {
    post_id: post_id,
    title: title,
    content: content,
  };

  const result = await editBoard(data);
  console.log(result);
  // if(result.rowCount === 0)
  return result;
};
