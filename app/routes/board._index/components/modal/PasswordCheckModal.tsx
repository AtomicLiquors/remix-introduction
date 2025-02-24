import Center from "@/common/components/atoms/Center";
import { Modal } from "@/common/modal/Modal";
import { ModalSize } from "@/common/modal/type/ModalSizeType";
import PasswordChecker from "../PasswordChecker";
import { BoardItemType } from "../../types/BoardItemType";
import { PWCheckOptionType } from "../../types/PasswordCheckOptionType";
import { getCaptionByPWCheckOption } from "./util/getCaptionByPWCheckOption";

{/* To-Do: Desktop 뷰에서는 클릭 위치 근처에 보이게 가능할까? */}
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
            <div className="text-gray-500">{getCaptionByPWCheckOption(pwCheckOption)}</div>
            <div>{boardItem.post_id}번 게시글</div>
            <PasswordChecker
              post_id={boardItem.post_id}
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
