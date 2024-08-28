import { isValidContent } from "@/routes/board._index/util/verify";
import { verifyMessage } from "@/routes/board._index/util/verifyMessage";
import { ChangeEvent, useState } from "react";
import _ from "lodash";
import InvalidMsg from "./InvalidMsg";
import { boardInputClassName } from "@/routes/board._index/util/boardTailwind";

interface BoardContentTextareaProps {
  defaultValue?: string;
}

export default function BoardContentTextArea({
  defaultValue,
}: BoardContentTextareaProps) {
  const [isValid, setIsValid] = useState<boolean>(true);

  const handleTextAreaChange = _.debounce(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      setIsValid(isValidContent(e.target.value));
    }
  );

  return (
    <div className="w-full">
      <textarea
        name="content"
        className={`${isValid || "border-red-200"} ${boardInputClassName} w-full min-h-40 p-2 resize-none overflow-auto whitespace-pre-wrap focus:outline-none focus:ring-2 focus:ring-blue-500`}
        defaultValue={defaultValue}
        onChange={handleTextAreaChange}
      />
      {isValid || <InvalidMsg value={verifyMessage.content} />}
    </div>
  );
}
