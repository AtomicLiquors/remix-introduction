import { ChangeEvent, forwardRef, useState } from "react";
import { boardInputClassName } from "../../../util/boardTailwind";
import _ from "lodash";
import { isValidTitle } from "@/routes/board._index/util/verify";
import InvalidMsg from "./InvalidMsg";
import { verifyMessage } from "@/routes/board._index/util/verifyMessage";

interface BoardTitleInputProps {
  isValid: boolean;
  defaultValue?: string;
}

const BoardTitleInput = forwardRef<
  HTMLInputElement,
  BoardTitleInputProps
>(({ isValid, defaultValue }: BoardTitleInputProps, ref) => {
  return (
    <>
      <input
        ref={ref}
        name="title"
        className={`text-sm border ${boardInputClassName} ${
          isValid || "border-red-200"
        }`}
        defaultValue={defaultValue}
      />
      {isValid || <InvalidMsg value={verifyMessage.title} />}
    </>
  );
});

export default BoardTitleInput;