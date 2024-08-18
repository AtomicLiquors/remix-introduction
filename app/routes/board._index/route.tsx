import { useFetcher, useLoaderData } from "@remix-run/react";
import { getBoards } from "@/model/board.server";
import BoardItem, { BoardItemProps } from "./components/BoardItem";
import NewBoard from "./components/NewBoard";
import { useState } from "react";
import Center from "@/common/components/atoms/Center";
import Modal from "@/common/modal/Modal";


export const loader = async () => {
  return await getBoards();
};

export default function BoardRoute() {
  const fetcher = useFetcher();
  const loading = fetcher.state !== "idle";

  const [isNewBoardFormVisibe, setIsNewBoardFormVisible] = useState(false);
  const result = useLoaderData<typeof loader>();

  //To-Do: Loading시 기존 화면 뿌옇게 표시.

  return (
    <>
      {isNewBoardFormVisibe ? (
        <Center flex flexCol textCenterDisabled>
            <NewBoard />
            <button onClick={() => setIsNewBoardFormVisible(false)}>CLOSE</button>
        </Center>
      ) : (
        <button onClick={() => setIsNewBoardFormVisible(true)}>
          {/* <FontAwesomeIcon icon={faPenToSquare}/> */}
          Click to show Form
        </button>
      )}
      <Modal/>
      {result?.data!.map((board, idx) => (
        <BoardItem key={idx} {...(board as BoardItemProps)}></BoardItem>
      ))}
    </>
  );
}
