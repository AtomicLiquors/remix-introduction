import { Modal } from "@/common/modal/Modal";
import { ModalSize } from "@/common/modal/type/ModalSizeType";

export const PasswordCheckModal = ({
  isOpen,
  closeModal,
}: {
  isOpen: boolean;
  closeModal: () => void;
}) => (
  <>
    <Modal isModalOpen={isOpen} closeModal={closeModal} modalSize={ModalSize.SMALL} closeBtn>
      <div>2kooong2</div>
    </Modal>
  </>
);