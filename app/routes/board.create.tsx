import { createBoard, BoardCreateRequestDTO } from "@/model/board.server";
import { ActionFunction, ActionFunctionArgs, json } from "@remix-run/node";

export const action: ActionFunction = async ({ request }: ActionFunctionArgs) => {
    const formData = await request.formData();
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    const author = formData.get('author') as string;
    const password = formData.get('password') as string;
  
    if (!title || !content || !author || !password) {
      return json({ success: false, error: 'missing field' }, { status: 422 });
    }
    const ip = request.headers.get('x-forwarded-for') || 'Unknown IP';
  
    const data: BoardCreateRequestDTO = {
      title: title, 
      content: content, 
      author: author, 
      password: password, 
      ip: ip
    }
  
    const result = createBoard(data);
    return result;
  };
  