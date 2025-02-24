import { useState } from "react";
import { PWCheckOption, PWCheckOptionType } from "@/routes/board._index/types/PasswordCheckOptionType";
import { BoardItemType } from "@/routes/board._index/types/BoardItemType";

const usePasswordCheckModal = () => {
  const [isPasswordCheckModalOpen, setIsPasswordCheckModalOpen] =
    useState<boolean>(false);
    
  const [passwordCheckOption, setPasswordCheckOption] = 
    useState<PWCheckOptionType>(PWCheckOption.None);

  const [selectedBoardItemData, setSelectedBoardItemData] = 
    useState<BoardItemType | null>(null);

  function openPasswordCheckModal(type: PWCheckOptionType, boardData: BoardItemType) {
    setIsPasswordCheckModalOpen(true);
    setSelectedBoardItemData(boardData);
    setPasswordCheckOption(type);
  }

  function closePasswordCheckModal() {
    setIsPasswordCheckModalOpen(false);
    setPasswordCheckOption(PWCheckOption.None);
    setSelectedBoardItemData(null);
  }

  return {
    isPasswordCheckModalOpen,
    selectedBoardItemData, 
    passwordCheckOption,
    openPasswordCheckModal,
    closePasswordCheckModal,
  };
};

export default usePasswordCheckModal;