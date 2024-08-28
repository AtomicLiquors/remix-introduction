import { createBoard, BoardCreateRequestDTO } from "@/model/board.server";
import { ActionFunction, ActionFunctionArgs, json } from "@remix-run/node";
import { isValidAuthor, isValidContent, isValidPassword, isValidTitle } from "./board._index/util/verify";
import { number } from "zod";

const isValidCreateInput = (title: string, content: string, author: string, password: string): [result: boolean, msg: string] => {

  let result: boolean = true;
  let msg: string = "";

  if (!isValidTitle(title)){
    result = false;
    msg = "제목";
  }else if(!isValidContent(content)){
    result = false;
    msg = "내용";
  }else if (!isValidAuthor(author)){
    result = false;
    msg = "작성자";
  }else if(!isValidPassword(password)){
    result = false;
    msg = "비밀번호";
  }

  return [true, ""];
}

export const action: ActionFunction = async ({ request }: ActionFunctionArgs) => {
    const formData = await request.formData();
    const avatarId = formData.get('avatar_id') as string;
    const title = (formData.get('title') as string).trim();
    const content = (formData.get('content') as string).trim();
    const author = (formData.get('author') as string).trim();
    const password = (formData.get('password') as string).trim();
    const is_private = formData.get('is_private') as string;
  
    if (!title || !content || !author || !password) {
      return json({ success: false, error: '비어 있는 입력값' }, { status: 422 });
    }
    
    const [isValid, msg] = isValidCreateInput(title, content, author, password);

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
  