import Center from "@/common/components/atoms/Center";
import { Modal } from "@/common/modal/Modal";
import { ModalSize } from "@/common/modal/type/ModalSizeType";
import PasswordChecker from "../PasswordChecker";
import { MouseEvent } from "react";

/* Props로 데이터를 받나? hook으로 데이터를 받나? */
export const PasswordCheckModal = ({
  isOpen,
  closeModal,
}: {
  isOpen: boolean;
  closeModal: () => void;
}) => (
  <>
    <Modal isModalOpen={isOpen} closeModal={closeModal} modalSize={ModalSize.SMALL} closeBtn>
      <Center>post_id번 게시글</Center>
      <PasswordChecker 
        post_id={0} 
        onPwCheckPassed={function (): void {
        throw new Error("Function not implemented.");
      } }/>
    </Modal>
  </>
);