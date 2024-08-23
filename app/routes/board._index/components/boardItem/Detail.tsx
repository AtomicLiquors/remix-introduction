import {
  faPenToSquare,
  faCircleMinus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PasswordChecker from "../PasswordChecker";
import BoardItemTitles from "./content/Titles";
import BoardItemBlockWrapper from "./layout/BlockWrapper";
import BoardItemContainer from "./layout/Container";
import BoardItemFirstBlock from "./layout/FirstBlock";
import BoardItemMiddleBlock from "./layout/MiddleBlock";
import BoardItemRowContainer from "./layout/RowContainer";
import { BoardDetailResponseDTO } from "@/model/board.server";
import { useRef, useState } from "react";
import { useFetcher } from "@remix-run/react";
import Center from "@/common/components/atoms/Center";
import Avatar from "@/common/avatar/Avatar";
import AvatarSelector from "@/common/avatar/AvatarSelector";

interface BoardItemDetailProps {
  openBoardData: BoardDetailResponseDTO;
  loading: boolean;
}

export default function BoardItemDetail({
  openBoardData,
  loading,
}: BoardItemDetailProps) {
  const [isEditPwCheckOpen, setIsEditPwCheckOpen] = useState(false);
  const [isDeletePwCheckOpen, setIsDeletePwCheckOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditingCheckPassed = () => {
    setIsEditing(true);
  };

  const handleEditBtnClick = () => {
    setIsEditPwCheckOpen(true);
    setIsDeletePwCheckOpen(false);
  };
  const handleDeleteBtnClick = async () => {
    setIsDeletePwCheckOpen(true);
    setIsEditPwCheckOpen(false);
  };
  const fetcher = useFetcher();
  const avatarIdRef = useRef<HTMLInputElement>(null);
  const handleAvatarChange = (avatarId: number) => {
    avatarIdRef.current!.value = avatarId + "";
  };
  return (
    <fetcher.Form
      method="put"
      action={openBoardData && `/board/${openBoardData.post_id}/edit`}
    >
      <BoardItemContainer>
        <BoardItemRowContainer>
          <BoardItemBlockWrapper className="w-full">
            <input
              ref={avatarIdRef}
              type="hidden"
              name="avatar_id"
              defaultValue={0}
            />
            <BoardItemFirstBlock>
              {loading ? (
                <Avatar avatarId={0} />
              ) : (
                openBoardData &&
                (isEditing ? (
                  <AvatarSelector handleAvatarChange={handleAvatarChange} defaultAvatarId={openBoardData.avatar_id!}/>
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
                    className="text-sm border"
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
              <div onClick={() => setIsEditing(false)}>x</div>
            ) : isEditPwCheckOpen ? (
              <PasswordChecker
                post_id={openBoardData.post_id!}
                label="수정하기"
              >
                2kooong2❤
              </PasswordChecker>
            ) : (
              <FontAwesomeIcon
                className="cursor-pointer w-5 text-gray-400"
                onClick={handleEditingCheckPassed}
                icon={faPenToSquare}
              />
            )}
            {isDeletePwCheckOpen ? (
              <PasswordChecker
                post_id={openBoardData.post_id!}
                label="삭제하기"
              >
                2kooong2❤
              </PasswordChecker>
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
                className="border"
                defaultValue={openBoardData.content}
              />
            ) : (
              openBoardData.content
            ))}
        </BoardItemRowContainer>
        {isEditing && (
          <Center>
            <button className="rounded text-blue-500" type="submit">
              수정하기
            </button>
          </Center>
        )}
      </BoardItemContainer>
    </fetcher.Form>
  );
}
