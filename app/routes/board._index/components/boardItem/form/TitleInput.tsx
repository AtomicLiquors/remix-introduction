import { ChangeEvent, useState } from "react";
import { boardInputClassName } from "../../../util/boardTailwind";
import _ from "lodash";
import { isValidTitle } from "@/routes/board._index/util/verify";
import InvalidMsg from "./InvalidMsg";
import { verifyMessage } from "@/routes/board._index/util/verifyMessage";

interface BoardTitleInputProps {
  defaultValue?: string;
}

export default function BoardTitleInput({
  defaultValue,
}: BoardTitleInputProps) {
  const [isValid, setIsValid] = useState<boolean>(true);

  const handleInputChange = _.debounce((e: ChangeEvent<HTMLInputElement>) => {
    setIsValid(isValidTitle(e.target.value));
  });

  return (
    <>
      <input
        name="title"
        onChange={handleInputChange}
        className={`text-sm border ${boardInputClassName} ${
          isValid || "border-red-200"
        }`}
        defaultValue={defaultValue}
      />
      { isValid || <InvalidMsg value={verifyMessage.title}/>}
    </>
  );
}
