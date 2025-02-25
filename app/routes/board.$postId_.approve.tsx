import {
  approveBoardById,
} from "@/model/board/board.server";
import { ActionFunction, ActionFunctionArgs } from "@remix-run/node";

export const action: ActionFunction = async ({
  params
}: ActionFunctionArgs) => {

  const post_id = +(params.postId as string);
  
  const result = await approveBoardById(post_id);
  // if(result.rowCount === 0)
  return result;
};
