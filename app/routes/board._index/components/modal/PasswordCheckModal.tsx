import Center from "@/common/components/atoms/Center";
import { Modal } from "@/common/modal/Modal";
import { ModalSize } from "@/common/modal/type/ModalSizeType";
import PasswordChecker from "../PasswordChecker";
import { BoardItemType } from "../../types/BoardItemType";
import { PWCheckOption, PWCheckOptionType } from "../../types/PasswordCheckOptionType";
import { getCaptionByPWCheckOption } from "./util/getCaptionByPWCheckOption";
import BoardItemBlockWrapper from "../boardItem/layout/BlockWrapper";
import BoardItemFirstBlock from "../boardItem/layout/FirstBlock";
import Avatar from "@/common/avatar/Avatar";
import { dateToString } from "@/utils/date";
import BoardItemTitles from "../boardItem/content/Titles";
import BoardItemMiddleBlock from "../boardItem/layout/MiddleBlock";

{
  /* To-Do: Desktop 뷰에서는 클릭 위치 근처에 보이게 가능할까? */
}
export function PasswordCheckModal({
  isOpen,
  closeModal,
  boardItem,
  pwCheckOption,
}: {
  isOpen: boolean;
  closeModal: () => void;
  boardItem: BoardItemType | null;
  pwCheckOption: PWCheckOptionType;
}) {
  return (
    <>
      <Modal
        isModalOpen={isOpen}
        closeModal={closeModal}
        modalSize={ModalSize.SMALL}
        closeBtn
      >
        {boardItem && (pwCheckOption != PWCheckOption.ViewDetail) && (pwCheckOption != PWCheckOption.None) ? (
          <>
            <Center>
              <div className="text-gray-500">
                {getCaptionByPWCheckOption(pwCheckOption)}
              </div> 

              <BoardItemBlockWrapper>
                <BoardItemFirstBlock>
                  <Avatar avatarId={boardItem.avatar_id} />
                  <div className="text-sm">{boardItem.author}</div>
                </BoardItemFirstBlock>
                <BoardItemMiddleBlock>
                  <BoardItemTitles title={boardItem.title} subtitle={boardItem.content} />
                  <div className="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                    {dateToString(boardItem.created_at)}
                  </div>
                </BoardItemMiddleBlock>
              </BoardItemBlockWrapper>

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
}
