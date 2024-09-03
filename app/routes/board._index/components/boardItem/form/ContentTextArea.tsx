
import _ from "lodash";
import { boardInputClassName } from "@/routes/board._index/utils/boardTailwind";

interface BoardContentTextareaProps {
  isValid: boolean;
  defaultValue?: string;
}

export default function BoardContentTextArea ({ isValid, defaultValue }: BoardContentTextareaProps) {
  return (
      <textarea
        name="content"
        className={`${
          isValid || "border-red-200"
        } ${boardInputClassName} break-keep w-full min-h-40 p-2 resize-none overflow-auto whitespace-pre-wrap focus:outline-none focus:ring-2 focus:ring-blue-500`}
        defaultValue={defaultValue}
        placeholder={`내용을 입력하세요. (최대 ${500}자)`}
      />
  );
};