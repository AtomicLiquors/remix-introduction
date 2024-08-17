import { useFetcher } from "@remix-run/react";
import { ReactNode } from "react";

interface PasswordCheckerProps {
  post_id: number;
  children: ReactNode;
}

export default function PasswordChecker({
  post_id,
  children,
}: PasswordCheckerProps) {
  const fetcher = useFetcher();

  const handelSendButtonClick = (post_id: number, password: string) => {
    sendPwCheck(post_id, password);
    // 비밀번호 입력 초기화
  };

  const sendPwCheck = (post_id: number, password: string) => {
    fetcher.submit(
      {
        password: password,
      },
      {
        action: `/api/board/${post_id}/check_pw/`,
        method: "POST",
      }
    );
  };
  /*
  useEffect(() => {
    console.log(fetcher.data);
  }, [fetcher.data])
*/
  return fetcher.data === true ? (
    children
  ) : (
    <>
      <input
        className="border"
        type="password"
        placeholder={
          fetcher.data === false ? "비밀번호가 일치하지 않습니다." : ""
        }
      />
      <span
        className="cursor-pointer"
        onClick={() => sendPwCheck(post_id, "password123")}
      >
        OK
      </span>
    </>
  );
}
