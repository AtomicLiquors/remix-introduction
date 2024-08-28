import { checkPassword } from "@/model/board.server";
import { ActionFunction, ActionFunctionArgs } from "@remix-run/node";

export const action: ActionFunction = async ({ params, request }: ActionFunctionArgs): Promise<boolean> => {
  
  const formData = await request.formData();
  
  const postId = params.postId;
  const password = formData.get('password') as string;

  if(!postId){
    console.log(params);
    return false;
  }

  //To-Do: 존재하지 않는 PostId를 입력한 경우.
  //To-Do: 숫자가 아닌 PostId를 입력한 경우.
  return await checkPassword(+postId, password);
};
