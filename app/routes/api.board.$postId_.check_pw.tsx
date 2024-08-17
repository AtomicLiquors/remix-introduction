import { deleteBoardById } from "@/model/board.server";
import { ActionFunctionArgs } from "@remix-run/node";

export const action = async ({ params }: ActionFunctionArgs) => {
  
  const postId = params.postId;
  // 패스워드는 url로 노출되면 안 돼.
  
  if(!postId){
    console.log(params);
    return false;
    // throw Error로 변경.
  }

  return null;
};
