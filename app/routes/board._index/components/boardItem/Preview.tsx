import Center from "@/common/components/atoms/Center";
import { useFetcher } from "@remix-run/react";
import { useEffect, useState } from "react";
import PasswordChecker from "../PasswordChecker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleMinus,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import BoardItemContainer from "./layout/Container";
import BoardItemFirstBlock from "./layout/FirstBlock";
import BoardItemMiddleBlock from "./layout/MiddleBlock";
import BoardItemTitles from "./content/Titles";
import BoardItemBlockWrapper from "./layout/BlockWrapper";
import BoardItemRowContainer from "./layout/RowContainer";
import Avatar from "./content/Avatar";

export interface BoardItemProps {
  post_id: number;
  avatar_id: number;
  title: string;
  content: string;
  author: string;
  created_at: Date;
  updated_at: Date;
  approved: boolean;
  modalId: string;
  onClick: () => void;
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
  onClick,
}: BoardItemProps) {
  const fetcher = useFetcher();
  const loading = fetcher.state !== "idle";

  const [isEditPwCheckOpen, setIsEditPwCheckOpen] = useState(false);
  const [isDeletePwCheckOpen, setIsDeletePwCheckOpen] = useState(false);

  const handleEditBtnClick = () => {
    setIsEditPwCheckOpen(true);
    setIsDeletePwCheckOpen(false);
  };
  const handleDeleteBtnClick = async () => {
    setIsDeletePwCheckOpen(true);
    setIsEditPwCheckOpen(false);
  };

  return (
    <BoardItemContainer>
      <BoardItemRowContainer>
        <BoardItemBlockWrapper className="w-full cursor-pointer" onClick={onClick}>
          <BoardItemFirstBlock>
            <Avatar avatarId={avatar_id}/>
            <div className="text-sm">{author}</div></BoardItemFirstBlock>
          <BoardItemMiddleBlock>
            <BoardItemTitles title={title} subtitle={content} />
            <span className="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
              {!approved && "비공개 게시글입니다."}
            </span>
          </BoardItemMiddleBlock>
        </BoardItemBlockWrapper>

        <div className="flex gap-2">
          {isEditPwCheckOpen ? (
            <PasswordChecker post_id={post_id} label="수정하기">
              2kooong2❤
            </PasswordChecker>
          ) : (
            <FontAwesomeIcon
              className="cursor-pointer w-5 text-gray-400"
              onClick={handleEditBtnClick}
              icon={faPenToSquare}
            />
          )}
          {isDeletePwCheckOpen ? (
            <PasswordChecker post_id={post_id} label="삭제하기">
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
    </BoardItemContainer>
  );
}
