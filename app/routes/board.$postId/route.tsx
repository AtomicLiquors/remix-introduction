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

  const data = await getBoardById(+postId);
  if(data.rowCount === 0)
    return "조회된 데이터가 없어요"
  return data;
};

export default function BoardByIdRoute() {
  const result = useLoaderData<typeof loader>();
  return <div>{JSON.stringify(result)}</div>;
}
