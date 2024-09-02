import { ChangeEvent, useState } from "react";
import { boardInputClassName } from "../../../utils/boardTailwind";
import _ from "lodash";

interface BoardTitleInputProps {
  isValid: boolean;
  defaultValue?: string;
}

export default function BoardTitleInput({
  isValid,
  defaultValue,
}: BoardTitleInputProps) {

  const maxDigits = 50;
  const [digits, setDigits] = useState<number>(defaultValue ? defaultValue.length : 0);

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDigits(e.currentTarget.value.length);
  }

  return (
    <div className="block text-right w-full">
      <input
        onChange={handleTitleChange}
        name="title"
        className={`border w-full ${boardInputClassName} ${
          isValid || "border-red-200"
        }`}
        defaultValue={defaultValue}
      />
      <div className={`text-xs ${digits > maxDigits && "text-red-400"}`}>{digits}/{maxDigits}</div>
    </div>
  );
}
