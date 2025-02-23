import { Modal } from "@/common/modal/Modal";
import { Children, useEffect, useState } from "react";

/* Type, TypeValue Renaming 고려하라. */
export const PWCheckOption = {
  ViewDetail: 'viewDetail',
  Delete: 'delete',
  Edit: 'edit',
  None: 'none'
} as const;

export type PWCheckOptionType = (typeof PWCheckOption)[keyof typeof PWCheckOption];


const usePasswordCheckModal = () => {

  const [isPasswordCheckModalOpen, setIsPasswordCheckModalOpen] = useState<boolean>(false);
  const [passwordCheckType, setPasswordCheckType] = useState<PWCheckOptionType>(PWCheckOption.None);
  
  useEffect(() => {
    alert("Modal open state changed: " + isPasswordCheckModalOpen);
  }, [isPasswordCheckModalOpen]);

  function openPasswordCheckModal(type: PWCheckOptionType) {
    setIsPasswordCheckModalOpen(true);
    setPasswordCheckType(type);
  }

  function closePasswordCheckModal() {
    setIsPasswordCheckModalOpen(false);
    setPasswordCheckType(PWCheckOption.None);
  }

  return {
    PasswordCheckModal: 
    () => (<div>{isPasswordCheckModalOpen ? "open" : "closed"}</div>)
    /*() => null*/
    ,
    isPasswordCheckModalOpen,
    passwordCheckType,
    openPasswordCheckModal,
    closePasswordCheckModal,
  };
};

export default usePasswordCheckModal;