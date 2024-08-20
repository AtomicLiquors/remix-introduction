import {
  faPenToSquare,
  faCircleMinus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { title } from "process";
import PasswordChecker from "../PasswordChecker";
import BoardItemTitles from "./content/Titles";
import BoardItemBlockWrapper from "./layout/BlockWrapper";
import BoardItemContainer from "./layout/Container";
import BoardItemFirstBlock from "./layout/FirstBlock";
import BoardItemMiddleBlock from "./layout/MiddleBlock";
import BoardItemRowContainer from "./layout/RowContainer";
import { BoardDetailResponseDTO } from "@/model/board.server";

interface BoardItemDetailProps {
  openBoardData: BoardDetailResponseDTO;
  loading: boolean;
}

export default function BoardItemDetail({
  openBoardData,
  loading,
}: BoardItemDetailProps) {
  return (
    <BoardItemContainer>
      <BoardItemRowContainer>
        <BoardItemBlockWrapper className="w-full cursor-pointer">
          <BoardItemFirstBlock>
            {loading ? (
              <div className="w-full h-full bg-gray-500"/>
            ) : (
              <div className="text-sm">{openBoardData.author}</div>
            )}
          </BoardItemFirstBlock>
          <BoardItemMiddleBlock>
            {loading ? (
              <div className="w-full h-full bg-gray-500"/>
            ) : (
              <BoardItemTitles title={title} subtitle={openBoardData.content} />
            )}
          </BoardItemMiddleBlock>
        </BoardItemBlockWrapper>
      </BoardItemRowContainer>
    </BoardItemContainer>
  );
}
