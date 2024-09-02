import { ScrollRestoration, useFetcher, useLoaderData } from "@remix-run/react";
import { BoardDetailResponseDTO, getBoards } from "@/model/board.server";
import BoardItemPreview, {
  BoardItemProps,
} from "./components/boardItem/Preview";
import { useEffect, useState } from "react";
import { Modal } from "@/common/modal/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import BoardItemCreate from "./components/boardItem/Create";
import BoardItemDetail from "./components/boardItem/Detail";
import Center from "@/common/components/atoms/Center";
import BoardItemContainer from "./components/boardItem/layout/ItemContainer";
import { useBoardModal } from "./useBoardModal.hook";

export const loader = async () => {
  const list = await getBoards();
  return list;
};

export default function BoardRoute() {
  const openBoardDataFetcher = useFetcher<BoardDetailResponseDTO>();
  const loading = openBoardDataFetcher.state !== "idle";
  
  // To-Do: 모달 닫으면 setOpenBoardData(null);
  // To-Do: Loading시 기존 화면 뿌옇게 표시.

  const result = useLoaderData<typeof loader>();

  /* 모달 통제 */
  const [
    isBoardDetailOpen,
    isBoardCreateOpen,
    isBoardDetailEditMode,
    openBoardDetailModal,
    closeBoardDetailModal,
    openBoardCreateModal,
    closeBoardCreateModal,
    setIsBoardDetailEditMode
  ] = useBoardModal();
  
  const [boardDetailUpdate, toggleBoardDetailUpdate] = useState<boolean>(false);

  /* 게시글 선택과 데이터 세팅 */
  // To-Do: Type 안정성 확보.
  const [openBoardData, setOpenBoardData] = useState<BoardDetailResponseDTO | null>(null);

  const openBoard = (postId: number) => {
    setOpenBoardData(null);
    openBoardDetailModal();
    requestBoardById(postId);
  }

  const requestBoardById = (postId: number) => {
    openBoardDataFetcher.submit(
      {},
      {
        method: "GET",
        action: `/api/board/${postId}`,
      }
    );
  }

  function handleBoardItemClick(postId: number) {
    openBoard(postId);
  }

  /* 조회, 수정, 삭제 패스워드 체크 */
  const handleBoardOpenPWCheckPass = (postId: number) => {
    openBoard(postId);
  }

  /* 삭제 후 Revalidation 문제 : */
  // 1. 스크롤 상태가 유지되지 않음.
  // 2. 삭제한 게시글이 남아있는 것으로 보임.
  const handleBoardEditPWCheckPass = (postId: number) => {
    openBoard(postId);
    toggleBoardDetailUpdate(!boardDetailUpdate);
    setIsBoardDetailEditMode(true);
  }

  const handleBoardDelete = () => {
    closeBoardDetailModal();
    setOpenBoardData(null);
  }
  
  const handleBoardEdit = () => {
    requestBoardById(openBoardData?.post_id!);
  }

  useEffect(() => {
    // To-Do: 런타임에 타입스크립트 fetcher가 유효한 타입을 검증하도록 한다.
    setOpenBoardData(openBoardDataFetcher.data as BoardDetailResponseDTO);
  }, [openBoardDataFetcher.data]);

  return (
    <>
      {/* To-Do: 검색 기능 추가 */}
      {/* To-Do: 페이지네이션 */}
      <BoardItemContainer>
      <ScrollRestoration/>
        <Center
        flex
          className="w-full p-8 gap-2 cursor-pointer hover:bg-gray-300"
          onClick={openBoardCreateModal}
        >
          <div>새 게시글 작성하기 </div>
          <FontAwesomeIcon className="w-8" icon={faCirclePlus} />
        </Center>
      </BoardItemContainer>
      <Modal isModalOpen={isBoardDetailOpen} closeModal={closeBoardDetailModal} >
        <BoardItemDetail isOpenAsEditMode={isBoardDetailEditMode} isModalOpen={isBoardDetailOpen} openBoardData={openBoardData} loading={loading} onBoardDelete={handleBoardDelete} onBoardEdit={handleBoardEdit} update={boardDetailUpdate}/>
      </Modal>
      <Modal isModalOpen={isBoardCreateOpen} closeModal={closeBoardCreateModal}  >
        <BoardItemCreate isModalOpen={isBoardCreateOpen} closeModal={closeBoardCreateModal}/>
      </Modal>
      {result?.data!.map((board, idx) => (
        <BoardItemPreview
          key={idx}
          {...(board as BoardItemProps)}
          onBoardSelect={() => handleBoardItemClick(board.post_id)}
          onEditPwCheckPass={handleBoardEditPWCheckPass}
        />
      ))}
    </>
  );
}
