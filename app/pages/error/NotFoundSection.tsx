import { redirect, useNavigate } from "@remix-run/react";
import { useEffect } from "react";

export default function NotFoundSection() {
  const navigate = useNavigate();
  useEffect(() => {
    redirect("/");
  }, []);
  return <div>Not Found dude</div>;
}
