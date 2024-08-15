import { deleteBoard } from "@/model/board.server";
import { ActionFunctionArgs, redirect } from "@remix-run/node";

export const action = async ({ request }: ActionFunctionArgs) => {
  //To - Do
  // 1. 작동확인
  // 2. 에러처리 : 존재하지 않는 아이디
  // 3. 에러처리 : DB 통신 실패
  // 4. 타입확인
  const body = await request.formData();
  console.log(body);
  const post_id = body.get('post_id');
  if(!post_id){
    console.log(body);
    return false;
  }

  const result = await deleteBoard(+post_id);
  return true;
};
