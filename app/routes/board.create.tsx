import { createBoard, BoardCreateRequestDTO } from "@/model/board.server";
import { ActionFunction, ActionFunctionArgs, json } from "@remix-run/node";

export const action: ActionFunction = async ({ request }: ActionFunctionArgs) => {
    const formData = await request.formData();
    const avatarId = formData.get('avatar_id') as string;
    const title = (formData.get('title') as string).trim();
    const content = (formData.get('content') as string).trim();
    const author = (formData.get('author') as string).trim();
    const password = (formData.get('password') as string).trim();
    const is_private = formData.get("is_private") as string;
  
    if (!title || !content || !author || !password) {
      return json({ success: false, error: 'missing field' }, { status: 422 });
    }

    const ip = request.headers.get('x-forwarded-for') || 'Unknown IP';
  
    const data: BoardCreateRequestDTO = {
      avatar_id: +avatarId || 0,
      title: title, 
      content: content, 
      author: author, 
      password: password, 
      ip: ip,
      is_private: is_private === "true",
    }
  
    const result = await createBoard(data);
    return result;
  };
  