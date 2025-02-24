import { Modal } from "@/common/modal/Modal";
import { ModalSizes } from "@/common/modal/ModalSizeType";
import { useState } from "react";

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
    <Modal isModalOpen={isOpen} closeModal={closeModal} modalSize={ModalSizes.SMALL} closeBtn>
      <div>2kooong2</div>
    </Modal>
  </>
);