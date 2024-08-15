import { deleteBoard } from "@/model/board.server";
import { ActionFunctionArgs } from "@remix-run/node";

export const action = async ({ params }: ActionFunctionArgs) => {
  //To - Do
  // 1. 작동확인
  // 2. 에러처리 : 존재하지 않는 아이디
  // 3. 에러처리 : DB 통신 실패
  // 4. 타입확인
  //const body = await request.formData();
  const postId = params.postId;
  
  //const post_id = body.get('post_id');
  if(!postId){
    console.log(params);
    return false;
  }

  const result = await deleteBoard(+postId);
  return true;
};
