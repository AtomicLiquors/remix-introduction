import { useFetcher } from "@remix-run/react";
import { useState, MouseEvent } from "react";
import Avatar from "@/common/avatar/Avatar";
import { QueryResult } from "@vercel/postgres";
import { dateToString } from "@/utils/date";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleMinus,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

import BoardItemContainer from "./layout/ItemContainer";
import BoardItemFirstBlock from "./layout/FirstBlock";
import BoardItemMiddleBlock from "./layout/MiddleBlock";
import BoardItemTitles from "./content/Titles";
import BoardItemBlockWrapper from "./layout/BlockWrapper";
import BoardItemRowContainer from "./layout/RowContainer";
import PasswordChecker from "../PasswordChecker";
import { PWCheckOption, PWCheckOptionType } from "../../types/PasswordCheckOptionType";
import { BoardItemType } from "../../types/BoardItemType";


export interface BoardItemProps {
  board: BoardItemType
  openPasswordCheckModal: (
    type: PWCheckOptionType, 
    boardData: BoardItemType
  ) => void;
  onBoardSelect: () => void;
  onEditPwCheckPass: (postId: number) => void;
}

export default function BoardItemPreview({
  board,
  openPasswordCheckModal,
  onBoardSelect,
  onEditPwCheckPass
}: BoardItemProps ) {
  const fetcher = useFetcher();
  const loading = fetcher.state !== "idle";

  // const [isEditPwCheckOpen, setIsEditPwCheckOpen] = useState(false);
  // const [isDeletePwCheckOpen, setIsDeletePwCheckOpen] = useState(false);
  // const [isOpenPwCheckOpen, setIsOpenPwCheckOpen] = useState<boolean>(false);

  const {
    post_id,
    avatar_id,
    title,
    content,
    author,
    created_at,
    updated_at,
    approved,
    is_private
  } = board;

  // const handleOpenPwCheckOpen = () => {
  //   setIsOpenPwCheckOpen(true);
  //   setIsDeletePwCheckOpen(false);
  //   setIsEditPwCheckOpen(false);
  // };

  const handleEditBtnClick = () => {
    openPasswordCheckModal(PWCheckOption.Edit, board);
    
    // setIsOpenPwCheckOpen(false);
    // setIsEditPwCheckOpen(true);
    // setIsDeletePwCheckOpen(false);
  };
  const handleDeleteBtnClick = () => {
    openPasswordCheckModal(PWCheckOption.Delete, board);

    // setIsOpenPwCheckOpen(false);
    // setIsDeletePwCheckOpen(true);
    // setIsEditPwCheckOpen(false);
  };

  // const handleEditPwCheckQuit = (event: MouseEvent<Element>) => {
  //   event.stopPropagation();
  //   setIsEditPwCheckOpen(false);
  // };

  // const handleDeletePwCheckQuit = (event: MouseEvent<Element>) => {
  //   event.stopPropagation();
  //   setIsDeletePwCheckOpen(false);
  // };

  // const handleEditPwCheckPass = () => {
  //   // setIsEditPwCheckOpen(false);
  //   onEditPwCheckPass(post_id);
  // };

  // const handleDeletePwCheckPass = () => {
  //   // setIsDeletePwCheckOpen(false);
  //   if (confirm("삭제하시겠습니까? 삭제한 게시글은 복구되지 않습니다.")) {
  //     sendBoardDeleteRequest(post_id);
  //   }
  // };

  const deleteBoardFetcher = useFetcher<QueryResult>();

  // /* To-Do: 모달로 바꾸게 되면 여기서는 더 이상 불필요. */
  // const sendBoardDeleteRequest = (post_id: number) => {
  //   deleteBoardFetcher.submit(
  //     {},
  //     {
  //       action: `/board/${post_id}/destroy`,
  //       method: "DELETE",
  //     }
  //   );
  // };

  const limited = is_private || !approved;

  const handleBoardItemClick = () => {
    // if (isDeletePwCheckOpen || isEditPwCheckOpen) return;

    if (limited) {
      openPasswordCheckModal(PWCheckOption.ViewDetail, board);
    } else {
      onBoardSelect();
    }
  };

  const handlePWCheckPass = () => {
    onBoardSelect();
  };

  return (
    <BoardItemContainer>
      <BoardItemRowContainer>
        <BoardItemBlockWrapper
          className="w-full cursor-pointer"
          onClick={handleBoardItemClick}
        >
          <BoardItemFirstBlock>
            <Avatar avatarId={avatar_id} />
            <div className="text-sm">{author}</div>
          </BoardItemFirstBlock>
          <BoardItemMiddleBlock>
            {limited ? (
                // isOpenPwCheckOpen ? (
                //   <PasswordChecker
                //     label="조회하려면 "
                //     post_id={post_id}
                //     onPwCheckPassed={handlePWCheckPass}
                //     // onQuitBtnClick={(event) => {
                //     //   event!.stopPropagation();
                //     //   setIsOpenPwCheckOpen(false);
                //     // }}
                //   />
                // ) : (
                  <BoardItemTitles
                    title={
                      is_private
                        ? "🔒 비공개 게시글입니다."
                        : !approved
                        ? "📝승인 대기 중인 게시글입니다."
                        : ""
                    }
                    subtitle={"작성자만 열람할 수 있습니다."}
                  />
               // )
              ) : (
                <BoardItemTitles title={title} subtitle={content} />
              )}
              <div className="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                {dateToString(created_at)}
              </div>
          
          </BoardItemMiddleBlock>
        </BoardItemBlockWrapper>

        <div className="flex gap-2 relative">
{/*           
          {isEditPwCheckOpen || isDeletePwCheckOpen && (
                <div className="absolute min-w-256 right-[1rem]">
                  {isEditPwCheckOpen && (
                    <PasswordChecker
                      label="수정하려면 "
                      post_id={post_id}
                      onPwCheckPassed={handleEditPwCheckPass}
                      // onQuitBtnClick={handleEditPwCheckQuit}
                    />
                  )}
                  {isDeletePwCheckOpen && (
                    <PasswordChecker
                      label="삭제하려면 "
                      post_id={post_id}
                      onPwCheckPassed={handleDeletePwCheckPass}
                      // onQuitBtnClick={handleDeletePwCheckQuit}
                    />
                  )}
                </div>
              )}
           */}
          <FontAwesomeIcon
            className={`cursor-pointer w-5 ${
              // isEditPwCheckOpen ? "text-blue-400" : "text-gray-400"
              false ? "text-blue-400" : "text-gray-400"
            }`}
            onClick={handleEditBtnClick}
            icon={faPenToSquare}
          />
          <FontAwesomeIcon
            className={`cursor-pointer w-5 ${
              //isDeletePwCheckOpen ? "text-red-400" : "text-gray-400"
              false ? "text-red-400" : "text-gray-400"
            }`}
            onClick={handleDeleteBtnClick}
            icon={faCircleMinus}
          />
        </div>
      </BoardItemRowContainer>
    </BoardItemContainer>
  );
}
