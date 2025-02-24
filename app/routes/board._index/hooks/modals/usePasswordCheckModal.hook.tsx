import { Modal } from "@/common/modal/Modal";
import { ModalSizes } from "@/common/modal/type/ModalSizeType";
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