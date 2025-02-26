import { useFetcher } from "@remix-run/react";
import { MouseEvent, useEffect, useRef } from "react";
import _ from "lodash";
import { faCircleXmark, faLock, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Center from "@/components/common/general/atoms/Center";

// To-Do: 모바일에서 패스워드 체크 모달로 띄우기.

interface PasswordCheckerProps {
  label?: string;
  post_id: number;
  onPwCheckPassed: () => void;
  // onQuitBtnClick: (event: MouseEvent) => void;
}

export default function PasswordChecker({
  label = "",
  post_id,
  onPwCheckPassed,
  // onQuitBtnClick,
}: PasswordCheckerProps) {
  const pwCheckFetcher = useFetcher<boolean>();

  const handlePasswordCheckPass = () => {
    onPwCheckPassed();
  };

  const handelPasswordInput = _.debounce(
    (post_id: number, password: string) => {
      sendPwCheckRequest(post_id, password);
    },
    200
  );

  const sendPwCheckRequest = (post_id: number, password: string) => {
    pwCheckFetcher.submit(
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
  const loading = pwCheckFetcher.state !== "idle";
  const defaultLabel = `${label} 비밀번호를 입력해 주세요.`;

  useEffect(() => {
    // 반드시 false or true여야 하며 false는 아무 falsy한 값으로 대체해선 안 됨. (초기값이 undefined)
    if (pwCheckFetcher.data === true) {
      handlePasswordCheckPass();
    }
  }, [pwCheckFetcher.data]);

  const getPasswordInputLabel = (): string  => {
    if(loading){
      return '비밀번호 확인 중...';
    }
    switch(pwCheckFetcher.data){
      /* 빨간 테두리 적용보다 느리다. */
      case false:
        return '비밀번호가 일치하지 않습니다.'
    }
    return defaultLabel;
  }

  return (
    <Center flexCol>
      {/* To-Do: 왼쪽 정렬 옵션 필요한가? */}
      <label className={'text-sm text-gray-500'}>{getPasswordInputLabel()}</label>
      <div className={`flex border bg-white w-4/6 max-h-8 p-1 gap-1 mx-auto
        ${pwCheckFetcher.data === false && "border-red-500"}`}>
          
        <FontAwesomeIcon icon={faLock} className="text-sm w-4 text-gray-500" />
        <input
          onChange={() => handelPasswordInput(post_id, inputRef.current!.value)}
          ref={inputRef}
          type="password"
          className={`w-5/6 ${loading && "text-gray-500"}`}
        />
        {/* To-Do: 눈깔 아이콘으로 보이게 토글 */}
        {/* <FontAwesomeIcon
          className="w-2.5 cursor-pointer"
          onClick={onQuitBtnClick}
          icon={faX}
        /> */}
         
      </div>

      </Center>
  );
}
