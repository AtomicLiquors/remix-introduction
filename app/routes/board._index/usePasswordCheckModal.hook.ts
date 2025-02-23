import { useState } from "react";

/* Type, TypeValue Renaming 고려하라. */
export const PWCheckType = {
  ViewDetail: 'viewDetail',
  Delete: 'delete',
  Edit: 'edit',
  None: 'none'
} as const;

type PWCheckTypeValue = (typeof PWCheckType)[keyof typeof PWCheckType];


export function usePasswordCheckModal() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [passwordCheckType, setPasswordCheckType] = useState<PWCheckTypeValue>(PWCheckType.None);

  function getIsPwCheckModalOpen(){
    return isModalOpen;
  }

  function getPasswordCheckType(){
    return passwordCheckType;
  }
  
  function openPasswordCheckModal() {
    setIsModalOpen(true);
  }

  function closePasswordCheckModal() {
    setIsModalOpen(false);
  }

  function switchPasswordCheckType(type: PWCheckTypeValue) {
    setPasswordCheckType(type);
  }


  return [
    getIsPwCheckModalOpen,
    getPasswordCheckType,
    openPasswordCheckModal,
    closePasswordCheckModal,
    switchPasswordCheckType
  ] as const;
}
