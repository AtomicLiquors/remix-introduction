import Center from "@/common/components/atoms/Center";
import { Modal } from "@/common/modal/Modal";
import { ModalSize } from "@/common/modal/type/ModalSizeType";
import PasswordChecker from "../PasswordChecker";
import { BoardItemType } from "../../types/BoardItemType";
import { PWCheckOptionType } from "../../types/PasswordCheckOptionType";

export const PasswordCheckModal = ({
  isOpen,
  closeModal,
  boardItem,
  pwCheckOption,
}: {
  isOpen: boolean;
  closeModal: () => void;
  boardItem: BoardItemType | null;
  pwCheckOption: PWCheckOptionType;
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
          <Center>
            <div>{pwCheckOption}</div>
            <div>{boardItem.post_id}번 게시글</div>
            <PasswordChecker
              post_id={0}
              onPwCheckPassed={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          </Center>
        </>
      ) : (
        <div>선택된 게시글이 없습니다.</div>
      )}
    </Modal>
  </>
);
