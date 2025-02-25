import Center from "@/common/components/atoms/Center";
import { Modal } from "@/common/modal/Modal";
import { ModalSize } from "@/common/modal/type/ModalSizeType";
import Avatar from "@/common/avatar/Avatar";
import { dateToString } from "@/utils/date";

import PasswordChecker from "@board/components/PasswordChecker";
import BoardItemBlockWrapper from "@board/components/boardItem/layout/BlockWrapper";
import BoardItemFirstBlock from "@board/components/boardItem/layout/FirstBlock";
import BoardItemTitles from "@board/components/boardItem/content/Titles";
import BoardItemMiddleBlock from "@board/components/boardItem/layout/MiddleBlock";
import { getCaptionByPWCheckOption } from "@board/components/modal/util/getCaptionByPWCheckOption";

import { BoardItemType } from "@board/types/BoardItemType";
import { PWCheckOptionType } from "@board/types/PasswordCheckOptionType";

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
