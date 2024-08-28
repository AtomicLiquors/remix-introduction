import {
  BoardEditRequestDTO,
  editBoard,
} from "@/model/board.server";
import { ActionFunction, ActionFunctionArgs, json } from "@remix-run/node";
import { isValidEditInput } from "./board._index/util/validateForm";

export const action: ActionFunction = async ({
  params, request,
}: ActionFunctionArgs) => {

  const formData = await request.formData();
  const post_id = +(params.postId as string);
  const avatar_id = formData.get("avatar_id") as string;
  const title = (formData.get("title") as string).trim();
  const content = (formData.get("content") as string).trim();
  const is_private = formData.get("is_private") as string;

  //To-Do: 유효성 규칙 검증

  if (!title || !content || !post_id) {
    console.log(title);
    console.log(content);
    console.log(post_id);
    const response = json({ success: false, error: "missing field" }, { status: 422 });
    console.log(response);
    return response;
  }

  const [isValid, msg]: [boolean, string] = isValidEditInput(title, content);

  if (!isValid){
    return json({ success: false, error: `유효하지 않은 ${msg}` }, { status: 422 });
  }

  const data: BoardEditRequestDTO = {
    avatar_id: +avatar_id || 0,
    post_id: post_id,
    title: title,
    content: content,
    is_private: is_private === "true",
  };

  const result = await editBoard(data);
  console.log(result);
  // if(result.rowCount === 0)
  return result;
};
