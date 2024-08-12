import { deleteBoard } from "@/model/board.server";
import { ActionFunctionArgs, redirect } from "@remix-run/node";
import { sql } from "@vercel/postgres";

export const action = async ({ request }: ActionFunctionArgs) => {
  const result = deleteBoard();
  return true;
};
