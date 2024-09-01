import { boardInputClassName } from "../../../utils/boardTailwind";
import _ from "lodash";

interface BoardTitleInputProps {
  isValid: boolean;
  defaultValue?: string;
}

export default function BoardTitleInput({ isValid, defaultValue }: BoardTitleInputProps) {
  return (   
      <input
        name="title"
        className={`text-sm border ${boardInputClassName} ${
          isValid || "border-red-200"
        }`}
        defaultValue={defaultValue}
      />
  );
}
