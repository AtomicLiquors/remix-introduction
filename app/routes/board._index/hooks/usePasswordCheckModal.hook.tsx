import { Modal } from "@/common/modal/Modal";
import { Children, useCallback, useEffect, useState } from "react";

/* Type, TypeValue Renaming 고려하라. */
export const PWCheckOption = {
  ViewDetail: "viewDetail",
  Delete: "delete",
  Edit: "edit",
  None: "none",
} as const;

export type PWCheckOptionType =
  (typeof PWCheckOption)[keyof typeof PWCheckOption];

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

export const PasswordCheckModal = ({
  isOpen,
  closeModal,
}: {
  isOpen: boolean;
  closeModal: () => void;
}) => (
  <>
    <div>PWModal {isOpen ? "open" : "close"}</div>
    <Modal isModalOpen={isOpen} closeModal={closeModal} closeBtn>
      <div>2kooong2</div>
    </Modal>
  </>
);