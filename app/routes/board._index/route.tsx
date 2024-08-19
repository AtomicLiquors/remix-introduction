import { useFetcher, useLoaderData } from "@remix-run/react";
import { getBoards } from "@/model/board.server";
import BoardItem, { BoardItemProps } from "./components/BoardItem";
import NewBoard from "./components/NewBoard";
import { useRef, useState } from "react";
import Center from "@/common/components/atoms/Center";
import { Modal } from "@/common/modal/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

export const loader = async () => {
  return await getBoards();
};

export default function BoardRoute() {
  const fetcher = useFetcher();
  const loading = fetcher.state !== "idle";

  const [isNewBoardFormVisibe, setIsNewBoardFormVisible] = useState(false);
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

  const [postId, setPostId] = useState<number>();

  function handleBoardItemClick(postId: number) {
    setPostId(postId);
    openModal();
  }

  return (
    <>
      {/* To-Do: 검색 기능 추가 */}
      {isNewBoardFormVisibe ? (
        <Center flex flexCol textCenterDisabled>
          <button onClick={() => setIsNewBoardFormVisible(false)}>CLOSE</button>
        </Center>
      ) : (
        <button onClick={() => newOpenModal()}>
          새글쓰기 <FontAwesomeIcon icon={faPenToSquare} />
        </button>
      )}
      <Modal ref={modalRef}>you have opened {postId}</Modal>
      <Modal ref={newBoardModalRef}>
        <NewBoard />
      </Modal>
      {result?.data!.map((board, idx) => (
        <BoardItem
          key={idx}
          {...(board as BoardItemProps)}
          onClick={() => handleBoardItemClick(board.post_id)}
        ></BoardItem>
      ))}
    </>
  );
}
