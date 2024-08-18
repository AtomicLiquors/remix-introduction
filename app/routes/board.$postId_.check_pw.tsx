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

  return await checkPassword(+postId, password);
};
