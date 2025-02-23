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
  const [isPasswordCheckModalOpen, setIsPasswordCheckModalOpen] = useState<boolean>(false);
  const [passwordCheckType, setPasswordCheckType] = useState<PWCheckTypeValue>(PWCheckType.None);
  
  function openPasswordCheckModal() {
    setIsPasswordCheckModalOpen(true);
  }

  function closePasswordCheckModal() {
    setIsPasswordCheckModalOpen(false);
  }

  function switchPasswordCheckType(type: PWCheckTypeValue) {
    setPasswordCheckType(type);
  }


  return [
    isPasswordCheckModalOpen,
    passwordCheckType,
    openPasswordCheckModal,
    closePasswordCheckModal,
    switchPasswordCheckType
  ] as const;
}
