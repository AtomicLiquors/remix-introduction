import {
  Await,
  ClientLoaderFunctionArgs,
  defer,
  ScrollRestoration,
  useFetcher,
} from "@remix-run/react";

import { BoardDetailResponseDTO, getBoards } from "@/model/board.server";
import { Suspense, useEffect, useState } from "react";
import { Modal } from "@/common/modal/Modal";
import Center from "@/common/components/atoms/Center";
import { ModalSize } from "@/common/modal/type/ModalSizeType";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

import BoardItemCreate from "./components/boardItem/Create";
import BoardItemDetail from "./components/boardItem/Detail";
import BoardItemContainer from "./components/boardItem/layout/ItemContainer";
import BoardItemPreview, {
  BoardItemProps,
} from "./components/boardItem/Preview";

import { useBoardModal } from "./components/modal/hook/useBoardModal.hook";
import usePasswordCheckModal from "./components/modal/hook/usePasswordCheckModal.hook";

import { cacheClientLoader, useCachedLoaderData } from "remix-client-cache";
import { PasswordCheckModal } from "./components/modal/PasswordCheckModal";

export const loader = () => {
  const boards = getBoards();
  return defer({ boards });
};

export const clientLoader = (args: ClientLoaderFunctionArgs) =>
  cacheClientLoader(args);
clientLoader.hydrate = true;

export default function BoardRoute() {
  const openBoardDataFetcher = useFetcher<BoardDetailResponseDTO>();
  const loading = openBoardDataFetcher.state !== "idle";

  // To-Do: 모달 닫으면 setOpenBoardData(null);
  // To-Do: Loading시 기존 화면 뿌옇게 표시.

  const { boards } = useCachedLoaderData<typeof loader>();

  /* 게시판 모달 통제 */
  const [
    isBoardDetailOpen,
    isBoardCreateOpen,
    isBoardDetailEditMode,
    openBoardDetailModal,
    closeBoardDetailModal,
    openBoardCreateModal,
    closeBoardCreateModal,
    setIsBoardDetailEditMode,
  ] = useBoardModal();

  const {
    isPasswordCheckModalOpen,
    selectedBoardItemData, 
    setSelectedBoardItemData,
    openPasswordCheckModal,
    closePasswordCheckModal,
  } = usePasswordCheckModal();

  const [boardDetailUpdate, toggleBoardDetailUpdate] = useState<boolean>(false);

  /* 게시글 선택과 데이터 세팅 */
  // To-Do: Type 안정성 확보.
  const [openBoardData, setOpenBoardData] =
    useState<BoardDetailResponseDTO | null>(null);

  const openBoard = (postId: number) => {
    setOpenBoardData(null);
    openBoardDetailModal();
    requestBoardById(postId);
  };

  const requestBoardById = (postId: number) => {
    openBoardDataFetcher.submit(
      {},
      {
        method: "GET",
        action: `/api/board/${postId}`,
      }
    );
  };

  function handleBoardItemClick(postId: number) {
    openBoard(postId);
  }

  /* 조회, 수정, 삭제 패스워드 체크 */
  const handleBoardOpenPWCheckPass = (postId: number) => {
    openBoard(postId);
  };

  /* 삭제 후 Revalidation 문제 확인 : */
  // 1. 스크롤 상태가 유지되는가?
  // 2. 삭제한 게시글이 남아있는지는 않는가?
  const handleBoardEditPWCheckPass = (postId: number) => {
    openBoard(postId);
    toggleBoardDetailUpdate(!boardDetailUpdate);
    setIsBoardDetailEditMode(true);
  };

  const handleBoardDelete = () => {
    closeBoardDetailModal();
    setOpenBoardData(null);
  };

  const handleBoardEdit = () => {
    requestBoardById(openBoardData?.post_id!);
  };

  useEffect(() => {
    // To-Do: 런타임에 타입스크립트 fetcher가 유효한 타입을 검증하도록 한다.
    setOpenBoardData(openBoardDataFetcher.data as BoardDetailResponseDTO);
  }, [openBoardDataFetcher.data]);

  return (
    <>
      {/* To-Do: 검색 기능 추가 */}
      {/* To-Do: 페이지네이션 */}
      <BoardItemContainer>
        <ScrollRestoration />
        <Center
          flex
          className="w-full p-8 gap-2 cursor-pointer hover:bg-gray-300"
          onClick={openBoardCreateModal}
        >
          <div>새 게시글 작성하기 </div>
          <FontAwesomeIcon className="w-8" icon={faCirclePlus} />
        </Center>
      </BoardItemContainer>

      <Modal
        isModalOpen={isBoardDetailOpen}
        closeModal={closeBoardDetailModal}
        modalSize={ModalSize.FULL}
        closeBtn
      >
        <BoardItemDetail
          isOpenAsEditMode={isBoardDetailEditMode}
          isModalOpen={isBoardDetailOpen}
          openBoardData={openBoardData}
          loading={loading}
          onBoardDelete={handleBoardDelete}
          onBoardEdit={handleBoardEdit}
          update={boardDetailUpdate}
        />
      </Modal>
      <Modal
        isModalOpen={isBoardCreateOpen}
        closeModal={closeBoardCreateModal}
        modalSize={ModalSize.FULL}
        closeBtn
      >
        <BoardItemCreate
          isModalOpen={isBoardCreateOpen}
          closeModal={closeBoardCreateModal}
        />
      </Modal>

      <PasswordCheckModal
        isOpen={isPasswordCheckModalOpen}
        closeModal={closePasswordCheckModal}
      />
      {/* To-Do : Do we need Await Component? */}
      <Suspense fallback={<div>loading</div>}>
        <Await resolve={boards}>
          {(boards) =>
            boards.data.map((board, idx) => (
              <BoardItemPreview
                key={idx}
                {...(board as BoardItemProps)}
                onBoardSelect={() => handleBoardItemClick(board.post_id)}
                openPasswordCheckModal={openPasswordCheckModal}
                onEditPwCheckPass={handleBoardEditPWCheckPass}
              />
            ))
          }
        </Await>
      </Suspense>
    </>
  );
}
