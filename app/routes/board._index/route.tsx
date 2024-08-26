import { useActionData, useFetcher, useLoaderData } from "@remix-run/react";
import { BoardDetailResponseDTO, getBoards } from "@/model/board.server";
import BoardItemPreview, {
  BoardItemProps,
} from "./components/boardItem/Preview";
import { useEffect, useRef, useState } from "react";
import { Modal } from "@/common/modal/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlus,
  faPenToSquare,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import BoardItemCreate from "./components/boardItem/Create";
import BoardItemDetail from "./components/boardItem/Detail";
import Center from "@/common/components/atoms/Center";
import BoardItemContainer from "./components/boardItem/layout/Container";
import { ActionFunction } from "@remix-run/node";

export const loader = async () => {
  return await getBoards();
};

export default function BoardRoute() {
  const fetcher = useFetcher<BoardDetailResponseDTO>();
  const loading = fetcher.state !== "idle";
  
  // To-Do: 모달 닫으면 setOpenBoardData(null);
  // To-Do: Loading시 기존 화면 뿌옇게 표시.

  const result = useLoaderData<typeof loader>();

  /* 모달 통제 */
  function openBoardDetailModal() {
    setIsBoardDetailOpen(true);
  }
  function closeBoardDetailModal() {
    setIsBoardDetailOpen(false);
    setIsBoardDetailEditMode(false);
  }
  function openBoardCreateModal() {
    setIsBoardCreateOpen(true);
  }
  function closeBoardCreateModal() {
    setIsBoardCreateOpen(false);
  }

  const [isBoardDetailOpen, setIsBoardDetailOpen] = useState<boolean>(false);
  const [isBoardCreateOpen, setIsBoardCreateOpen] = useState<boolean>(false);
  
  const [isBoardDetailEditMode, setIsBoardDetailEditMode] = useState<boolean>(false);

  /* 게시글 선택과 데이터 세팅 */
  // To-Do: Type 안정성 확보.
  const [openBoardData, setOpenBoardData] = useState<BoardDetailResponseDTO | null>(null);

  function openBoard(postId: number){
    setOpenBoardData(null);
    openBoardDetailModal();
    fetcher.submit(
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

  const handleBoardEditPWCheckPass = (postId: number) => {
    openBoard(postId);
    setIsBoardDetailEditMode(true);
  }

  const handleBoardDeletePWCheckPass = () => {

  }

  useEffect(() => {
    // To-Do: 런타임에 타입스크립트 fetcher가 유효한 타입을 검증하도록 한다.
    setOpenBoardData(fetcher.data as BoardDetailResponseDTO);
  }, [fetcher.data]);

  return (
    <>
      {/* To-Do: 검색 기능 추가 */}
      {/* To-Do: 페이지네이션 */}
      <BoardItemContainer>
        <Center
        flex
          className="w-full p-8 gap-2 cursor-pointer hover:bg-gray-300"
          onClick={openBoardCreateModal}
        >
          <div>새 게시글 작성하기 </div>
          <FontAwesomeIcon className="w-8" icon={faCirclePlus} />
        </Center>
      </BoardItemContainer>
      <Modal isModalOpen={isBoardDetailOpen} setIsModalOpen={setIsBoardDetailOpen} >
        <BoardItemDetail isOpenAsEditMode={isBoardDetailEditMode} isModalOpen={isBoardDetailOpen} openBoardData={openBoardData} loading={loading} closeModal={closeBoardDetailModal}/>
      </Modal>
      <Modal isModalOpen={isBoardCreateOpen} setIsModalOpen={setIsBoardCreateOpen}  >
        <BoardItemCreate isModalOpen={isBoardCreateOpen} closeModal={closeBoardCreateModal}/>
      </Modal>
      {result?.data!.map((board, idx) => (
        <BoardItemPreview
          key={idx}
          {...(board as BoardItemProps)}
          onClick={() => handleBoardItemClick(board.post_id)}
          onEditPwCheckPass={handleBoardEditPWCheckPass}
        />
      ))}
    </>
  );
}
