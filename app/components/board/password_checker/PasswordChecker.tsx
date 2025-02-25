import { useFetcher } from "@remix-run/react";
import { useEffect, useRef, useState } from "react";
import _ from "lodash";
import { faEye, faEyeSlash, faLock, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Center from "@/components/common/general/atoms/Center";
import { usePasswordChecker } from "./PasswordChecker.hook";
import { usePasswordCheckerFetcher } from "./PasswordChecker.fetcher";

// To-Do: 모바일에서 패스워드 체크 모달로 띄우기.
interface PasswordCheckerProps {
  label?: string;
  post_id: number;
  onPwCheckPassed: () => void;
}

export default function PasswordChecker({
  label = "",
  post_id,
  onPwCheckPassed,
}: PasswordCheckerProps) {
  const {inputRef, isPasswordHidden, togglePasswordVisibility} = usePasswordChecker();
  const {
    loading,
    isPasswordCheckFailed,
    handelPasswordInput,
    getPasswordInputLabel
  } = usePasswordCheckerFetcher(label, onPwCheckPassed);

  return (
    <Center flexCol>
      {/* To-Do: 왼쪽 정렬 옵션 필요한가? */}
      <label className={'text-sm text-gray-500'}>{getPasswordInputLabel()}</label>
      <div className={`flex justify-between border bg-white w-4/6 max-h-8 p-1 gap-1 mx-auto
        ${isPasswordCheckFailed && "border-red-500"}`}>
        <FontAwesomeIcon icon={faLock} className="text-sm w-4 text-gray-500" />
        <input
          onChange={() => handelPasswordInput(post_id, inputRef.current!.value)}
          ref={inputRef}
          type={isPasswordHidden ? 'password' : 'text'}
          className={`w-5/6 ${loading && "text-gray-500"}`}
        />
        <FontAwesomeIcon
          className="w-5 cursor-pointer"
          onClick={togglePasswordVisibility}
          icon={isPasswordHidden ? faEye : faEyeSlash}
        />
      </div>

      </Center>
  );
}
