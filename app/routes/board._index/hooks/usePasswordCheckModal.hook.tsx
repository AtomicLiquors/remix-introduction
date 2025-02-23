import { Modal } from "@/common/modal/Modal";
import { Children, useEffect, useState } from "react";

/* Type, TypeValue Renaming 고려하라. */
export const PWCheckType = {
  ViewDetail: 'viewDetail',
  Delete: 'delete',
  Edit: 'edit',
  None: 'none'
} as const;

export type PWCheckTypeValue = (typeof PWCheckType)[keyof typeof PWCheckType];


const usePasswordCheckModal = () => {

  const [isPasswordCheckModalOpen, setIsPasswordCheckModalOpen] = useState<boolean>(false);
  const [passwordCheckType, setPasswordCheckType] = useState<PWCheckTypeValue>(PWCheckType.None);
  
  useEffect(() => {
    alert("Modal open state changed: " + isPasswordCheckModalOpen);
  }, [isPasswordCheckModalOpen]);

  function openPasswordCheckModal(type: PWCheckTypeValue) {
    setIsPasswordCheckModalOpen(true);
    setPasswordCheckType(type);
  }

  function closePasswordCheckModal() {
    setIsPasswordCheckModalOpen(false);
    setPasswordCheckType(PWCheckType.None);
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