import { useNavigate } from "@remix-run/react";
import { useEffect } from "react";

const navigate = useNavigate();

export default function $404() {
  useEffect(() => {
    sessionStorage.setItem("error", "404 : 페이지가 존재하지 않습니다.");
    //navigate(-1);
    history.back();
  }, []);

  return null;
}
