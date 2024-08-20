import { useFetcher, useLoaderData } from "@remix-run/react";
import { getBoardById, getBoards } from "@/model/board.server";
import BoardItemPreview, {
  BoardItemProps,
} from "./components/boardItem/Preview";
import NewBoard from "./components/NewBoard";
import { useEffect, useRef, useState } from "react";
import Center from "@/common/components/atoms/Center";
import { Modal } from "@/common/modal/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import BoardItemCreate from "./components/boardItem/Create";
import BoardItemDetail from "./components/boardItem/Detail";
import BoardItemRowContainer from "./components/boardItem/layout/RowContainer";
import BoardItemContainer from "./components/boardItem/layout/Container";

export const loader = async () => {
  return await getBoards();
};

export default function BoardRoute() {
  const fetcher = useFetcher();
  const loading = fetcher.state !== "idle";

  const [isNewBoardFormVisibe, setIsNewBoardFormVisible] = useState(false);

  // To-Do: Type 안정성 확보.
  // To-Do: 모달 닫으면 setOpenBoardData(null);
  const [openBoardData, setOpenBoardData] = useState<any>(null);
  const result = useLoaderData<typeof loader>();

  //To-Do: Loading시 기존 화면 뿌옇게 표시.
  const modalRef = useRef<{ openModal: () => void }>(null);
  const newBoardModalRef = useRef<{ openModal: () => void }>(null);

  function openModal() {
    modalRef.current?.openModal();
  }
  function newOpenModal() {
    newBoardModalRef.current?.openModal();
  }

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

  return (
    <>
      {/* To-Do: 검색 기능 추가 */}
      <BoardItemContainer>
        <div className="text-3xl font-bold">방명록</div>
        <button onClick={() => newOpenModal()}>
          새글쓰기 <FontAwesomeIcon icon={faPenToSquare} />
        </button>
      </BoardItemContainer>
      <Modal ref={modalRef}>
        <BoardItemDetail openBoardData={openBoardData} loading={loading} />
      </Modal>
      <Modal ref={newBoardModalRef}>
        <BoardItemCreate />
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
