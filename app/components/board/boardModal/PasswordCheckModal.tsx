import Center from "@/components/common/general/atoms/Center";
import { Modal } from "@/components/common/modal/Modal";
import { ModalSize } from "@/components/common/modal/type/ModalSizeType";
import Avatar from "@/components/board/avatar/Avatar";
import { dateToString } from "@/utils/date";

import PasswordChecker from "@/components/board/password_checker/PasswordChecker";

import { BoardItemType } from "@/types/board/BoardItemType";
import { PWCheckOptionType } from "@/types/board/PasswordCheckOptionType";
import BoardItemTitles from "../boardItem/content/Titles";
import BoardItemBlockWrapper from "../boardItem/layout/BlockWrapper";
import BoardItemFirstBlock from "../boardItem/layout/FirstBlock";
import BoardItemMiddleBlock from "../boardItem/layout/MiddleBlock";
import { getCaptionByPWCheckOption } from "./PasswordCheckModal.util";

{
  /* To-Do: Desktop 뷰에서는 클릭 위치 근처에 보이게 가능할까? */
}
export function PasswordCheckModal({
  isOpen,
  closeModal,
  boardItem,
  pwCheckOption,
  onPWCheckPass,
}: {
  isOpen: boolean;
  closeModal: () => void;
  boardItem: BoardItemType | null;
  pwCheckOption: PWCheckOptionType;
  onPWCheckPass: (post_id: number, option: PWCheckOptionType) => void;
}) {

  const handlePWCheckPass = () => {
    
    /* To-Do: 에러처리 */
    if(boardItem)
      onPWCheckPass(boardItem.post_id, pwCheckOption);
    closeModal();
  }

  return (
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
              <div className="text-gray-500">
                {getCaptionByPWCheckOption(pwCheckOption)}
              </div>

              {/* To-Do: 게시글 미리보기 부분만 따로 빼고 싶다. */}
              {!boardItem.is_private && boardItem.approved && (
                <BoardItemBlockWrapper>
                  <BoardItemFirstBlock>
                    <Avatar avatarId={boardItem.avatar_id} />
                    <div className="text-sm">{boardItem.author}</div>
                  </BoardItemFirstBlock>
                  <BoardItemMiddleBlock>
                    <BoardItemTitles
                      title={boardItem.title}
                      subtitle={boardItem.content}
                    />
                    <div className="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                      {dateToString(boardItem.created_at)}
                    </div>
                  </BoardItemMiddleBlock>
                </BoardItemBlockWrapper>
              )}
              <PasswordChecker
                post_id={boardItem.post_id}
                onPwCheckPassed={handlePWCheckPass}
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
