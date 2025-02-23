import { useState } from "react";

export const PWCheckType = {
  ViewDetail: 'viewDetail',
  Delete: 'delete',
  Edit: 'edit',
  None: 'none'
} as const;

type PWCheckTypeValue = (typeof PWCheckType)[keyof typeof PWCheckType];

const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
const [passwordCheckType, setPasswordCheckType] = useState<PWCheckTypeValue>(PWCheckType.None);


export function useBoardModal() {

  function getIsModalOpen(){
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
    getIsModalOpen,
    getPasswordCheckType,
    openPasswordCheckModal,
    closePasswordCheckModal,
    switchPasswordCheckType
  ] as const;
}
