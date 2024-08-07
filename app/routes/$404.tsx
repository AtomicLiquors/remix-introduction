import { json, redirect, LoaderFunction } from "@remix-run/node";


export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const error = url.searchParams.get("error") || "유효하지 않은 경로입니다.";

  return redirect('/');
};

export default function NotFound() {
  return null; 
}
