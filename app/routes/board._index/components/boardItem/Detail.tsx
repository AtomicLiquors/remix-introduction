import {
  faPenToSquare,
  faCircleMinus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PasswordChecker from "../PasswordChecker";
import BoardItemTitles from "./content/Titles";
import BoardItemBlockWrapper from "./layout/BlockWrapper";
import BoardItemContainer from "./layout/ItemContainer";
import BoardItemFirstBlock from "./layout/FirstBlock";
import BoardItemMiddleBlock from "./layout/MiddleBlock";
import BoardItemRowContainer from "./layout/RowContainer";
import { BoardDetailResponseDTO } from "@/model/board.server";
import { FormEvent, useEffect, useRef, useState } from "react";
import { useFetcher } from "@remix-run/react";
import Center from "@/common/components/atoms/Center";
import Avatar from "@/common/avatar/Avatar";
import AvatarSelector from "@/common/avatar/AvatarSelector";
import { QueryResult } from "@vercel/postgres";
import BoardPrivateCheckbox from "./form/PrivateCheckbox";
import BoardTitleInput from "./form/TitleInput";
import BoardContentTextArea from "./form/ContentTextArea";
import { validateContent, validateTitle } from "../../utils/validateForm";
import { invalidMessage } from "../../utils/invalidMessage";
import InvalidFormMsg from "./form/InvalidFormMsg";
import { dateToString } from "@/utils/date";
import BoardModalContainer from "./layout/DetailContainer";

interface BoardItemDetailProps {
  openBoardData: BoardDetailResponseDTO | null;
  loading: boolean;
  isModalOpen: boolean;
  isOpenAsEditMode: boolean;
  onBoardEdit: () => void;
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
  onBoardEdit,
  update,
}: BoardItemDetailProps) {
  const [isEditPwCheckOpen, setIsEditPwCheckOpen] = useState(false);
  const [isDeletePwCheckOpen, setIsDeletePwCheckOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  /* 입력폼 */
  const [isTitleValid, setIsTitleValid] = useState<boolean>(true);
  const [isContentValid, setIsContentValid] = useState<boolean>(true);

  /* 패스워드 체크 */
  const handleEditingPWCheckPassed = () => {
    setIsEditPwCheckOpen(false);
    setIsEditing(true);
  };

  const [invalidFormMsg, setInvalidFormMsg] = useState<string | null>(null);

  const handleEditSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const title = formData.get("title")?.toString();
    const content = formData.get("content")?.toString();

    if (!title || !content) {
      setInvalidFormMsg("제목, 내용을 입력해 주세요.");
      return;
    }

    // 유효성 검증 결과
    const titleValidation = validateTitle(title);
    const contentValidation = validateContent(content);

    // 상태 업데이트
    setIsTitleValid(titleValidation);
    setIsContentValid(contentValidation);

    // 유효성 검증 실패 시 에러 메시지 출력
    if (!titleValidation) {
      setInvalidFormMsg(invalidMessage.title);
      return;
    } else if (!contentValidation) {
      setInvalidFormMsg(invalidMessage.content);
      return;
    }

    setInvalidFormMsg(null);

    if (openBoardData) {
      editFetcher.submit(formData, {
        method: "put",
        action: `/board/${openBoardData.post_id}/edit`,
      });
    }
  };

  const editFetcher = useFetcher<QueryResult>();
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
  }, [isOpenAsEditMode, update]);

  useEffect(() => {
    if (editFetcher.data?.rowCount === 1) {
      setIsEditing(false);
      onBoardEdit();
    }
  }, [editFetcher.data]);

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
    if (!openBoardData) return;
    setIsPrivateChecked(openBoardData.is_private);
  }, [openBoardData]);

  const [isPrivateChecked, setIsPrivateChecked] = useState<boolean>();

  const editPasswordChecker = (post_id: number) => (
    <PasswordChecker
      post_id={post_id}
      onPwCheckPassed={handleEditingPWCheckPassed}
      // onQuitBtnClick={() => {
      //   setIsEditPwCheckOpen(false);
      // }}
      label="수정하려면 "
    />
  );

  const deletePasswordChecker = (post_id: number) => (
    <PasswordChecker
      post_id={post_id}
      onPwCheckPassed={handleDeletePwCheckPassed}
      // onQuitBtnClick={() => {
      //   setIsDeletePwCheckOpen(false);
      // }}
      label="삭제하려면 "
    />
  );

  return (
    <editFetcher.Form onSubmit={handleEditSubmit} className="h-full">
      <BoardModalContainer>
        {!!invalidFormMsg && <InvalidFormMsg msg={invalidFormMsg} />}
        {/* To-Do : sm 이상 화면에서 배경 블러처리 PWCheck 숨기고, 수정 삭제 버튼 옆에 PWCheck 띄우기 */}
        <BoardItemRowContainer className="relative">
          {openBoardData && (isEditPwCheckOpen || isDeletePwCheckOpen) && (
            <Center
              flex
              flexCol
              className="absolute w-[101%] h-full backdrop-blur-sm"
            >
              {isEditPwCheckOpen && editPasswordChecker(openBoardData.post_id)}
              {isDeletePwCheckOpen &&
                deletePasswordChecker(openBoardData.post_id)}
            </Center>
          )}
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
            </BoardItemFirstBlock>
            <BoardItemMiddleBlock>
              {loading ? (
                <div className="w-full h-full bg-gray-500" />
              ) : (
                openBoardData && (
                  <div className="text-base font-bold">
                    {openBoardData.author}
                  </div>
                )
              )}
              {loading ? (
                <div className="w-full h-full bg-gray-500" />
              ) : (
                openBoardData && (
                  <div className="text-sm">
                    {dateToString(openBoardData.created_at!)}
                  </div>
                )
              )}
            </BoardItemMiddleBlock>
          </BoardItemBlockWrapper>

          <div className="flex gap-2">
            {isEditing ? (
              <FontAwesomeIcon
                className="cursor-pointer w-5 text-blue-400 hover:text-blue-500"
                onClick={handleEditCancelBtnClick}
                icon={faPenToSquare}
              />
            ) : isEditPwCheckOpen ? (
              openBoardData && (
                <div className="hidden sm:visible">
                  editPasswordChecker(openBoardData.post_id)
                </div>
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
                <div className="hidden sm:visible">
                  {deletePasswordChecker(openBoardData.post_id)}
                </div>
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
          {loading ? (
            <div className="w-full h-full bg-gray-500" />
          ) : (
            openBoardData &&
            (isEditing ? (
              <BoardTitleInput
                isValid={isTitleValid}
                defaultValue={openBoardData.title}
              />
            ) : (
              <BoardItemTitles title={openBoardData.title} />
            ))
          )}
        </BoardItemRowContainer>
        <BoardItemRowContainer>
          {openBoardData &&
            (isEditing ? (
              <BoardContentTextArea
                isValid={isContentValid}
                defaultValue={openBoardData.content}
              />
            ) : (
              <div className="break-keep">{openBoardData.content}</div>
            ))}
        </BoardItemRowContainer>
        {openBoardData &&
          (isEditing ? (
            <BoardPrivateCheckbox
              isPrivateChecked={isPrivateChecked!}
              setIsPrivateChecked={setIsPrivateChecked}
            />
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
      </BoardModalContainer>
    </editFetcher.Form>
  );
}
