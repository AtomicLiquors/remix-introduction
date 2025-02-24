import { useState } from "react";
import { PWCheckOption, PWCheckOptionType } from "@/routes/board._index/types/PasswordCheckOptionType";
import { BoardItemProps } from "../../boardItem/Preview";

const usePasswordCheckModal = () => {
  const [isPasswordCheckModalOpen, setIsPasswordCheckModalOpen] =
    useState<boolean>(false);
    
  const [passwordCheckType, setPasswordCheckType] = 
    useState<PWCheckOptionType>(PWCheckOption.None);

  const [selectedBoardItemData, setSelectedBoardItemData] = 
    useState<BoardItemProps | null>(null);

  function openPasswordCheckModal(type: PWCheckOptionType, boardData: BoardItemProps) {
    setIsPasswordCheckModalOpen(true);
    setSelectedBoardItemData(boardData);
    setPasswordCheckType(type);
  }

  function closePasswordCheckModal() {
    setIsPasswordCheckModalOpen(false);
    setPasswordCheckType(PWCheckOption.None);
    setSelectedBoardItemData(null);
  }

  return {
    isPasswordCheckModalOpen,
    selectedBoardItemData, 
    setSelectedBoardItemData,
    openPasswordCheckModal,
    closePasswordCheckModal,
  };
};

export default usePasswordCheckModal;