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
              openBoardData && <div className="text-sm">{openBoardData.author}</div>
            )}
          </BoardItemFirstBlock>
          <BoardItemMiddleBlock>
            {loading ? (
              <div className="w-full h-full bg-gray-500"/>
            ) : (
              openBoardData && <BoardItemTitles title={openBoardData.title}/>
            )}
          </BoardItemMiddleBlock>
        </BoardItemBlockWrapper>
      </BoardItemRowContainer>
      
      <BoardItemRowContainer>
        {openBoardData && openBoardData.content}
      </BoardItemRowContainer>
    </BoardItemContainer>
  );
}
