import { useEffect } from "react";

/*
export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const error = url.searchParams.get("error") || "유효하지 않은 경로입니다.";

  
  return redirect('/');
};
*/

export default function $404() {
  useEffect(() => {
    sessionStorage.setItem("error", "404 : 페이지가 존재하지 않습니다.");
    history.back();
  }, []);

  return null;
}
