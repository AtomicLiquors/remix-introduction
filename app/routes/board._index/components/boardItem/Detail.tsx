import {
  faPenToSquare,
  faCircleMinus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PasswordChecker from "../PasswordChecker";
import BoardItemTitles from "./component/content/Titles";
import BoardItemBlockWrapper from "./component/layout/BlockWrapper";
import BoardItemContainer from "./component/layout/Container";
import BoardItemFirstBlock from "./component/layout/FirstBlock";
import BoardItemMiddleBlock from "./component/layout/MiddleBlock";
import BoardItemRowContainer from "./component/layout/RowContainer";
import { BoardDetailResponseDTO } from "@/model/board.server";
import { useEffect, useRef, useState } from "react";
import { useFetcher } from "@remix-run/react";
import Center from "@/common/components/atoms/Center";
import Avatar from "@/common/avatar/Avatar";
import AvatarSelector from "@/common/avatar/AvatarSelector";
import { QueryResult } from "@vercel/postgres";
import { boardInputClassName } from "./style";
import BoardPrivateCheckbox from "./component/input/PrivateCheckbox";

interface BoardItemDetailProps {
  openBoardData: BoardDetailResponseDTO | null;
  loading: boolean;
  isModalOpen: boolean;
  isOpenAsEditMode: boolean;
  onBoardDelete: () => void;
  update: boolean;
}

{
  /* To-Do : Modal 닫으면서 수정 내용 초기화 */
}
export default function BoardItemDetail({
  openBoardData,
  loading,
  isModalOpen,
  isOpenAsEditMode,
  onBoardDelete,
  update
}: BoardItemDetailProps) {
  const [isEditPwCheckOpen, setIsEditPwCheckOpen] = useState(false);
  const [isDeletePwCheckOpen, setIsDeletePwCheckOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  /* 패스워드 체크 */
  const handleEditingPWCheckPassed = () => {
    setIsEditing(true);
  };

  const deleteFetcher = useFetcher<QueryResult>();

  const handleDeletePwCheckPassed = () => {
    if (!openBoardData) return;
    if (confirm("삭제하시겠습니까? 삭제된 게시글은 복구되지 않습니다.")) {
      sendBoardDeleteRequest(openBoardData.post_id);
    } else {
      setIsDeletePwCheckOpen(false);
    }
  };

  const sendBoardDeleteRequest = (post_id: number) => {
    deleteFetcher.submit(
      {},
      {
        action: `/board/${post_id}/destroy`,
        method: "DELETE",
      }
    );
  };

  useEffect(() => {
    setIsEditing(isOpenAsEditMode);
  }, [isOpenAsEditMode, update])

  useEffect(() => {
    if (deleteFetcher.data?.rowCount === 1) {
      onBoardDelete();
    }
  }, [deleteFetcher.data]);

  /* 수정/삭제 비밀번호 체크 토글 */
  const handleEditBtnClick = () => {
    setIsEditPwCheckOpen(true);
    setIsDeletePwCheckOpen(false);
  };

  const handleDeleteBtnClick = async () => {
    setIsDeletePwCheckOpen(true);
    setIsEditPwCheckOpen(false);
  };

  /* 수정 취소 */
  const handleEditCancelBtnClick = () => {
    setIsEditing(false);
    setIsEditPwCheckOpen(false);
    setIsDeletePwCheckOpen(false);
  };
  const avatarIdRef = useRef<HTMLInputElement>(null);
  const handleAvatarChange = (avatarId: number) => {
    avatarIdRef.current!.value = avatarId + "";
  };

  useEffect(() => {
    if (!isModalOpen) {
      setIsEditPwCheckOpen(false);
      setIsDeletePwCheckOpen(false);
      setIsEditing(false);
    }
  }, [isModalOpen]);

  useEffect(() => {
    if(!openBoardData) 
      return;
    setIsPrivateChecked(openBoardData.is_private);
  }, [openBoardData])

  const [isPrivateChecked, setIsPrivateChecked] = useState<boolean>();

  return (
    <deleteFetcher.Form
      method="put"
      action={openBoardData ? `/board/${openBoardData.post_id}/edit` : ""}
    >
      <BoardItemContainer>
        <BoardItemRowContainer>
          <BoardItemBlockWrapper>
            <input
              ref={avatarIdRef}
              type="hidden"
              name="avatar_id"
              defaultValue={openBoardData ? openBoardData.avatar_id : 0}
            />
            <BoardItemFirstBlock>
              {loading ? (
                <Avatar avatarId={0} />
              ) : (
                openBoardData &&
                (isEditing ? (
                  <AvatarSelector
                    handleAvatarChange={handleAvatarChange}
                    defaultAvatarId={openBoardData.avatar_id!}
                  />
                ) : (
                  /* 수정 직후에 아바타 변경 반영되지 않음. */
                  <Avatar avatarId={openBoardData.avatar_id!} />
                ))
              )}

              {loading ? (
                <div className="w-full h-full bg-gray-500" />
              ) : (
                openBoardData && (
                  <div className="text-sm">{openBoardData.author}</div>
                )
              )}
            </BoardItemFirstBlock>
            <BoardItemMiddleBlock>
              {loading ? (
                <div className="w-full h-full bg-gray-500" />
              ) : (
                openBoardData &&
                (isEditing ? (
                  <input
                    className={`text-sm border ${boardInputClassName}`}
                    name="title"
                    defaultValue={openBoardData.title}
                  />
                ) : (
                  <BoardItemTitles title={openBoardData.title} />
                ))
              )}
            </BoardItemMiddleBlock>
          </BoardItemBlockWrapper>

          <div className="flex gap-2">
            {isEditing ? (
              <div onClick={handleEditCancelBtnClick}>수정취소</div>
            ) : isEditPwCheckOpen ? (
              openBoardData && (
                <PasswordChecker
                  post_id={openBoardData.post_id}
                  onPwCheckPassed={handleEditingPWCheckPassed}
                  onQuitBtnClick={() => {
                    setIsEditPwCheckOpen(false);
                  }}
                />
              )
            ) : (
              <FontAwesomeIcon
                className="cursor-pointer w-5 text-gray-400"
                onClick={handleEditBtnClick}
                icon={faPenToSquare}
              />
            )}
            {isDeletePwCheckOpen ? (
              openBoardData && (
                <PasswordChecker
                  post_id={openBoardData.post_id}
                  onPwCheckPassed={handleDeletePwCheckPassed}
                  onQuitBtnClick={() => {
                    setIsDeletePwCheckOpen(false);
                  }}
                />
              )
            ) : (
              <FontAwesomeIcon
                className="cursor-pointer w-5 text-gray-400"
                onClick={handleDeleteBtnClick}
                icon={faCircleMinus}
              />
            )}
          </div>
        </BoardItemRowContainer>

        <BoardItemRowContainer>
          {openBoardData &&
            (isEditing ? (
              <input
                type="textarea"
                name="content"
                className={`${boardInputClassName} w-full min-h-64`}
                defaultValue={openBoardData.content}
              />
            ) : (
              openBoardData.content
            ))}
        </BoardItemRowContainer>
        {openBoardData &&
          (isEditing ? (
            <BoardPrivateCheckbox isPrivateChecked={isPrivateChecked!} setIsPrivateChecked={setIsPrivateChecked}/>
          ) : openBoardData?.is_private ? (
            "비공개 게시글입니다."
          ) : (
            ""
          ))}
        {isEditing && (
          <Center>
            <button className="rounded text-blue-500" type="submit">
              수정하기
            </button>
          </Center>
        )}
      </BoardItemContainer>
    </deleteFetcher.Form>
  );
}
