import { verifyMessage } from "@/routes/board._index/util/verifyMessage";
import { ChangeEvent, forwardRef, useState } from "react";
import _ from "lodash";
import InvalidMsg from "./InvalidMsg";
import { boardInputClassName } from "@/routes/board._index/util/boardTailwind";

interface BoardContentTextareaProps {
  isValid: boolean;
  defaultValue?: string;
}

const BoardContentTextArea = forwardRef<
  HTMLTextAreaElement,
  BoardContentTextareaProps
>(({ isValid, defaultValue }: BoardContentTextareaProps, ref) => {
  return (
    <div className="w-full">
      <textarea
        ref={ref}
        name="content"
        className={`${
          isValid || "border-red-200"
        } ${boardInputClassName} w-full min-h-40 p-2 resize-none overflow-auto whitespace-pre-wrap focus:outline-none focus:ring-2 focus:ring-blue-500`}
        defaultValue={defaultValue}
      />
      {isValid || <InvalidMsg value={verifyMessage.content} />}
    </div>
  );
});

export default BoardContentTextArea;