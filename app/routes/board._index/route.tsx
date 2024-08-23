import { useFetcher, useLoaderData } from "@remix-run/react";
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
        <Center
        flex
          className="w-full p-8 gap-2 cursor-pointer hover:bg-gray-300"
          onClick={() => newOpenModal()}
        >
          <div>새 게시글 작성하기 </div>
          <FontAwesomeIcon className="w-8" icon={faCirclePlus} />
        </Center>
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
