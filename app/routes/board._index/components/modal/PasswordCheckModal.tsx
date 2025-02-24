import Center from "@/common/components/atoms/Center";
import { Modal } from "@/common/modal/Modal";
import { ModalSize } from "@/common/modal/type/ModalSizeType";
import PasswordChecker from "../PasswordChecker";
import { BoardItemType } from "../../types/BoardItemType";

/* Props로 데이터를 받나? hook으로 데이터를 받나? */
export const PasswordCheckModal = ({
  isOpen,
  closeModal,
  boardItem,
}: {
  isOpen: boolean;
  closeModal: () => void;
  boardItem: BoardItemType | null;
}) => (
  <>
    <Modal
      isModalOpen={isOpen}
      closeModal={closeModal}
      modalSize={ModalSize.SMALL}
      closeBtn
    >
      {boardItem ? (
        <>
          <Center>{boardItem.post_id}번 게시글</Center>
          <PasswordChecker
            post_id={0}
            onPwCheckPassed={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </>
      ) : (
        <div>선택된 게시글이 없습니다.</div>
      )}
    </Modal>
  </>
);
