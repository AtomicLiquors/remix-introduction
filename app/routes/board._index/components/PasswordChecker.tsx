import Center from "@/common/components/atoms/Center";
import { useFetcher } from "@remix-run/react";
import { ReactNode, useEffect, useRef } from "react";

interface PasswordCheckerProps {
  post_id: number;
  onPwCheckPassed: () => void;
  onQuitBtnClick: () => void;
}

export default function PasswordChecker({
  post_id,
  onPwCheckPassed,
  onQuitBtnClick,
}: PasswordCheckerProps) {
  const fetcher = useFetcher();

  const handlePasswordCheckPass = () => {
    onPwCheckPassed();
  };

  const handelPasswordInput = (post_id: number, password: string) => {
    sendPwCheck(post_id, password);
  };

  const sendPwCheck = (post_id: number, password: string) => {
    fetcher.submit(
      {
        password: password,
      },
      {
        action: `/board/${post_id}/check_pw/`,
        method: "POST",
      }
    );
  };

  const inputRef = useRef<HTMLInputElement>(null);
  const loading = fetcher.state !== "idle";

  useEffect(() => {
    // 반드시 false or true여야 하며 false는 아무 falsy한 값으로 대체해선 안 됨. (초기값이 undefined)
    if (fetcher.data === false) {
      inputRef.current!.value = "";
    } else if (fetcher.data === true) {
      handlePasswordCheckPass();
    }
  }, [fetcher.data]);

  return (
    <Center flex flexCol>
      <div
        className={`text-sm border w-auto h-auto ${
          loading && "text-gray-500"
        } ${fetcher.data === false && "border-red-500"}`}
      >
        <input
          onChange={() => handelPasswordInput(post_id, inputRef.current!.value)}
          ref={inputRef}
          type="password"
          className="w-2/3"
        />
        {/*
        <span
          className="cursor-pointer"
          onClick={() =>
            handelPasswordInput(post_id, inputRef.current!.value)
          }
        >
          확인
        </span>
           */}
        <span className="cursor-pointer" onClick={onQuitBtnClick}>
          {" "}
          X{" "}
        </span>
      </div>
    </Center>
  );
}
