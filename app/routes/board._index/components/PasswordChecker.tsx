import Center from "@/common/components/atoms/Center";
import { useFetcher } from "@remix-run/react";
import { ReactNode } from "react";

interface PasswordCheckerProps {
  post_id: number;
  label: string;
  children: ReactNode;
}

export default function PasswordChecker({
  post_id,
  children,
  label,
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
  
  return fetcher.data === true ? (
    children
  ) : (
    <Center flex>
      <input
        className="border w-auto h-auto" 
        type="password"
        placeholder={
          fetcher.data === false ? "비밀번호가 일치하지 않습니다." : "비밀번호를 입력하세요."
        }
      />
      <span
        className="cursor-pointer"
        onClick={() => handelSendButtonClick(post_id, "password123")}
      >
        {label}
      </span>
    </Center>
  );
}
