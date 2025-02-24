import { useState } from "react";
import { PWCheckOption, PWCheckOptionType } from "@/routes/board._index/types/PasswordCheckOptionType";

const usePasswordCheckModal = () => {
  const [isPasswordCheckModalOpen, setIsPasswordCheckModalOpen] =
    useState<boolean>(false);
    
  const [passwordCheckType, setPasswordCheckType] = useState<PWCheckOptionType>(
    PWCheckOption.None
  );

  function openPasswordCheckModal(type: PWCheckOptionType) {
    setIsPasswordCheckModalOpen(true);
    setPasswordCheckType(type);
  }

  function closePasswordCheckModal() {
    setIsPasswordCheckModalOpen(false);
    setPasswordCheckType(PWCheckOption.None);
  }

  return {
    isPasswordCheckModalOpen,
    passwordCheckType,
    openPasswordCheckModal,
    closePasswordCheckModal,
  };
};

export default usePasswordCheckModal;