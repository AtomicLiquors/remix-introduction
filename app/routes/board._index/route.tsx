import { useFetcher, useLoaderData } from "@remix-run/react";
import { getBoards } from "@/model/board.server";
import BoardItem, { BoardItemProps } from "./components/BoardItem";
import NewBoard from "./components/NewBoard";
import { useRef, useState } from "react";
import Center from "@/common/components/atoms/Center";
import { Modal } from "@/common/modal/Modal";


export const loader = async () => {
  return await getBoards();
};

export default function BoardRoute() {
  const fetcher = useFetcher();
  const loading = fetcher.state !== "idle";

  const [isNewBoardFormVisibe, setIsNewBoardFormVisible] = useState(false);
  const result = useLoaderData<typeof loader>();

  //To-Do: Loading시 기존 화면 뿌옇게 표시.

  const modalRef = useRef<{ openModal: () => void; }>(null);

  function openModal(){
    modalRef.current?.openModal();
  }

  const [postId, setPostId] = useState<number>();

  function handleBoardItemClick(postId: number){
    alert(postId);
    setPostId(postId);
    openModal();
  }

  return (
    <>
      {isNewBoardFormVisibe ? (
        <Center flex flexCol textCenterDisabled>
            <NewBoard />
            <button onClick={() => setIsNewBoardFormVisible(false)}>CLOSE</button>
        </Center>
      ) : (
        <button onClick={() => openModal()}>
          {/* <FontAwesomeIcon icon={faPenToSquare}/> */}
          Click to show Modal
        </button>
      )}
      <Modal ref={modalRef}>you have opened {postId}</Modal>
      {result?.data!.map((board, idx) => (
        <BoardItem key={idx} {...(board as BoardItemProps)} onClick={() => handleBoardItemClick(board.post_id)} ></BoardItem>
      ))}
    </>
  );
}
