import { useActionData, useFetcher, useLoaderData } from "@remix-run/react";
import { getBoards } from "@/model/board.server";
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
  const fetcher = useFetcher();
  const loading = fetcher.state !== "idle";

  // To-Do: Type 안정성 확보.
  // To-Do: 모달 닫으면 setOpenBoardData(null);
  const [openBoardData, setOpenBoardData] = useState<any>(null);
  const result = useLoaderData<typeof loader>();

  //To-Do: Loading시 기존 화면 뿌옇게 표시.
  const modalRef = useRef<{ openModal: () => void, closeModal: () => void }>(null);
  const newBoardModalRef = useRef<{ openModal: () => void, closeModal: () => void }>(null);

  function openModal() {
    setIsBoardDetailOpen(true);
  }
  function closeModal() {
    setIsBoardDetailOpen(false);
  }
  function openNewBoardModal() {
    setIsBoardCreateOpen(true);
  }
  function closeNewBoardModal() {
    setIsBoardCreateOpen(false);
  }

  const [isBoardDetailOpen, setIsBoardDetailOpen] = useState<boolean>(false);
  const [isBoardCreateOpen, setIsBoardCreateOpen] = useState<boolean>(false);


  async function handleBoardItemClick(postId: number) {
    setOpenBoardData(null);
    openModal();
    fetcher.submit(
      {},
      {
        method: "GET",
        action: `/api/board/${postId}`,
      }
    );
  }

  useEffect(() => {
    setOpenBoardData(fetcher.data);
  }, [fetcher.data]);

  const actionData = useActionData();

  

  return (
    <>
      {/* To-Do: 검색 기능 추가 */}
      <BoardItemContainer>
        {JSON.stringify(actionData)}
        <Center
        flex
          className="w-full p-8 gap-2 cursor-pointer hover:bg-gray-300"
          onClick={() => openNewBoardModal()}
        >
          <div>새 게시글 작성하기 </div>
          <FontAwesomeIcon className="w-8" icon={faCirclePlus} />
        </Center>
      </BoardItemContainer>
      <Modal ref={modalRef} isModalOpen={isBoardDetailOpen} setIsModalOpen={setIsBoardDetailOpen} >
        <BoardItemDetail openBoardData={openBoardData} loading={loading} closeModal={closeModal}/>
      </Modal>
      <Modal ref={newBoardModalRef} isModalOpen={isBoardCreateOpen} setIsModalOpen={setIsBoardCreateOpen}  >
        <BoardItemCreate closeModal={closeNewBoardModal}/>
      </Modal>
      {result?.data!.map((board, idx) => (
        <BoardItemPreview
          key={idx}
          {...(board as BoardItemProps)}
          onClick={() => handleBoardItemClick(board.post_id)}
        />
      ))}
    </>
  );
}
