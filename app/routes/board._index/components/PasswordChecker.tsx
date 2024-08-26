import Center from "@/common/components/atoms/Center";
import { useFetcher } from "@remix-run/react";
import { ReactNode, useEffect, useRef } from "react";
import _ from "lodash";
import { faCircleXmark, faLock, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

  const handelPasswordInput = _.debounce(
    (post_id: number, password: string) => {
      sendPwCheck(post_id, password);
    },
    200
  );

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
    <div
      className={`w-auto text-left`}
    >
      <div className={'text-xs pl-2'}>{loading ? '비밀번호 확인 중...' : '비밀번호를 입력해 주세요.' }</div>
      <div className={`flex border max-h-8 p-1 gap-1 ${
        fetcher.data === false && "border-red-500"
      }`}>
        <FontAwesomeIcon icon={faLock} className="text-sm w-4 text-gray-500" />
        <input
          onChange={() => handelPasswordInput(post_id, inputRef.current!.value)}
          ref={inputRef}
          type="password"
          className={`w-5/6 ${loading && "text-gray-500"}`}
        />
        <FontAwesomeIcon
          className="w-2.5 cursor-pointer"
          onClick={onQuitBtnClick}
          icon={faX}
        />
      </div>
    </div>
  );
}
