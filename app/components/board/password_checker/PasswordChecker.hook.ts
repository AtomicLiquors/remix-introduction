import { useRef, useState } from "react";

export const usePasswordChecker = () => {

  const inputRef = useRef<HTMLInputElement>(null);
  const [isPasswordHidden, setIsPasswordHidden] = useState<boolean>(true);

  const togglePasswordVisibility = () => {
    setIsPasswordHidden(!isPasswordHidden);
  }

  return {inputRef, isPasswordHidden, togglePasswordVisibility};
}