import { createBoard, BoardCreateRequestDTO } from "@/model/board.server";
import { ActionFunction, ActionFunctionArgs, json } from "@remix-run/node";
import { validateCreateInput } from "./board._index/util/validateForm";

export const action: ActionFunction = async ({ request }: ActionFunctionArgs) => {
    const formData = await request.formData();
    const avatarId = formData.get('avatar_id') as string;
    const title = (formData.get('title') as string).trim();
    const content = (formData.get('content') as string).trim();
    const author = (formData.get('author') as string).trim();
    const password = (formData.get('password') as string).trim();
    const is_private = formData.get('is_private') as string;
  
    if (!title || !content || !author || !password) {
      // To-Do : Throw Error로 변경하고 에러처리하기.
      return json({ success: false, error: '비어 있는 입력값' }, { status: 422 });
    }
    
    const [isValid, msg]: [boolean, string] = validateCreateInput(title, content, author, password);

    if (!isValid){
      return json({ success: false, error: `유효하지 않은 ${msg}` }, { status: 422 });
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
  