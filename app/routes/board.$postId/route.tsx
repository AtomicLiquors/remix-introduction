import { getBoardById } from "@/model/board.server";
import { LoaderFunction, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async ({
  params,
}: LoaderFunctionArgs) => {
  const postId = params.postId;

  if(!postId){
    console.log(params);
    return false;
    // throw Error로 변경.
  }

  return await getBoardById(+postId);
};

export default function BoardByIdRoute() {
  const result = useLoaderData<typeof loader>();
  return <div>{result}</div>;
}
