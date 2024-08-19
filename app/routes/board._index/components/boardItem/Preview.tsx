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

  useEffect(() => {
    console.log(fetcher.data);
  }, [fetcher.data]);

  return (
    <BoardItemContainer>
      <BoardItemBlockWrapper>
      {/*<div className="flex cursor-pointer" onClick={onClick}>*/}
        <BoardItemFirstBlock>
          {author}
        </BoardItemFirstBlock>
        <BoardItemMiddleBlock>
          <BoardItemTitles title={title} subtitle={content}/>
          <span className="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
            <svg
              className="w-2.5 h-2.5 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19ZM8.374 17.4a7.6 7.6 0 0 1-5.9-7.4c0-.83.137-1.655.406-2.441l.239.019a3.887 3.887 0 0 1 2.082 2.5 4.1 4.1 0 0 0 2.441 2.8c1.148.522 1.389 2.007.732 4.522Zm3.6-8.829a.997.997 0 0 0-.027-.225 5.456 5.456 0 0 0-2.811-3.662c-.832-.527-1.347-.854-1.486-1.89a7.584 7.584 0 0 1 8.364 2.47c-1.387.208-2.14 2.237-2.14 3.307a1.187 1.187 0 0 1-1.9 0Zm1.626 8.053-.671-2.013a1.9 1.9 0 0 1 1.771-1.757l2.032.619a7.553 7.553 0 0 1-3.132 3.151Z" />
            </svg>
            {approved ? "공개" : "비공개"}
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
    </BoardItemContainer>
  );
}
