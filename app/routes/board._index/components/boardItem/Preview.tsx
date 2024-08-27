import { useFetcher } from "@remix-run/react";
import { useEffect, useState } from "react";
import PasswordChecker from "../PasswordChecker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleMinus,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import BoardItemContainer from "./component/layout/Container";
import BoardItemFirstBlock from "./component/layout/FirstBlock";
import BoardItemMiddleBlock from "./component/layout/MiddleBlock";
import BoardItemTitles from "./component/content/Titles";
import BoardItemBlockWrapper from "./component/layout/BlockWrapper";
import BoardItemRowContainer from "./component/layout/RowContainer";
import Avatar from "@/common/avatar/Avatar";
import { QueryResult } from "@vercel/postgres";
import { dateToString } from "@/utils/date";

export interface BoardItemProps {
  post_id: number;
  avatar_id: number;
  title: string;
  content: string;
  author: string;
  created_at: Date;
  updated_at: Date;
  approved: boolean;
  is_private: boolean;
  onBoardSelect: () => void;
  onEditPwCheckPass: (postId: number) => void;
}

export default function BoardItemPreview({
  post_id,
  avatar_id,
  title,
  content,
  author,
  created_at,
  updated_at,
  approved,
  is_private,
  onBoardSelect,
  onEditPwCheckPass,
}: BoardItemProps) {
  const fetcher = useFetcher();
  const loading = fetcher.state !== "idle";

  const [isEditPwCheckOpen, setIsEditPwCheckOpen] = useState(false);
  const [isDeletePwCheckOpen, setIsDeletePwCheckOpen] = useState(false);
  const [isOpenPwCheckOpen, setIsOpenPwCheckOpen] = useState<boolean>(false);

  const handleEditBtnClick = () => {
    setIsEditPwCheckOpen(true);
    setIsDeletePwCheckOpen(false);
  };
  const handleDeleteBtnClick = async () => {
    setIsDeletePwCheckOpen(true);
    setIsEditPwCheckOpen(false);
  };

  const handleEditPwCheckPass = () => {
    setIsEditPwCheckOpen(false);
    onEditPwCheckPass(post_id);
  };

  const handleDeletePwCheckPass = () => {
    setIsDeletePwCheckOpen(false);
    if (confirm("삭제하시겠습니까? 삭제한 게시글은 복구되지 않습니다.")) {
      sendBoardDeleteRequest(post_id);
    }
  };

  const deleteBoardFetcher = useFetcher<QueryResult>();

  const sendBoardDeleteRequest = (post_id: number) => {
    deleteBoardFetcher.submit(
      {},
      {
        action: `/board/${post_id}/destroy`,
        method: "DELETE",
      }
    );
  };

  const limited = is_private || !approved;

  const handleBoardItemClick = () => {
    if (limited) {
      setIsOpenPwCheckOpen(true);
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
            <div>
              {limited ? (
                isOpenPwCheckOpen ? (
                  <PasswordChecker
                    post_id={post_id}
                    onPwCheckPassed={handlePWCheckPass}
                    onQuitBtnClick={(event) => {
                      event!.stopPropagation();
                      setIsOpenPwCheckOpen(false);
                    }}
                  />
                ) : (
                  
                <BoardItemTitles title={is_private
                  ? "🔒 비공개 게시글입니다."
                  : !approved ? "📝승인 대기 중인 게시글입니다." : ""} subtitle={"작성자만 열람할 수 있습니다."} />
                )
                
              ) : (
                <BoardItemTitles title={title} subtitle={content} />
              )}
              <div className="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                {dateToString(created_at)}
              </div>
            </div>
          </BoardItemMiddleBlock>
        </BoardItemBlockWrapper>

        <div className="flex gap-2">
          {isEditPwCheckOpen ? (
            <PasswordChecker
              post_id={post_id}
              onPwCheckPassed={handleEditPwCheckPass}
              onQuitBtnClick={() => setIsEditPwCheckOpen(false)}
            />
          ) : (
            <FontAwesomeIcon
              className="cursor-pointer w-5 text-gray-400"
              onClick={handleEditBtnClick}
              icon={faPenToSquare}
            />
          )}
          {isDeletePwCheckOpen ? (
            <PasswordChecker
              post_id={post_id}
              onPwCheckPassed={handleDeletePwCheckPass}
              onQuitBtnClick={() => setIsDeletePwCheckOpen(false)}
            />
          ) : (
            <FontAwesomeIcon
              className="cursor-pointer w-5 text-gray-400"
              onClick={handleDeleteBtnClick}
              icon={faCircleMinus}
            />
          )}
        </div>
      </BoardItemRowContainer>
    </BoardItemContainer>
  );
}
