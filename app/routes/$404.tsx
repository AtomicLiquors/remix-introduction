import { json, redirect, LoaderFunction } from "@remix-run/node";
import { getSession } from '@/sessions/sessions'

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const error = url.searchParams.get("error") || "유효하지 않은 경로입니다.";

  const session = await getSession(request.headers.get('Cookie'));

  sessionStorage.set('errorMsg', error);
  return redirect('/');
};

export default function NotFound() {
  return null; 
}
