import BoardItemContainer from "./layout/Container";
import BoardItemFirstBlock from "./layout/FirstBlock";
import BoardItemMiddleBlock from "./layout/MiddleBlock";
import BoardItemBlockWrapper from "./layout/BlockWrapper";
import BoardItemRowContainer from "./layout/RowContainer";
import Center from "@/common/components/atoms/Center";
import { useFetcher } from "@remix-run/react";
import { useRef, FormEvent, useEffect, useState } from "react";
import AvatarSelector from "@/common/avatar/AvatarSelector";
import { QueryResult } from "@vercel/postgres";

interface BoardItemCreateProps {
  isModalOpen: boolean;
  closeModal: () => void;
}

export default function BoardItemCreate({
  isModalOpen,
  closeModal,
}: BoardItemCreateProps) {
  const [isPrivateChecked, setIsPrivateChecked] = useState<boolean>(false);

  const createBoardFetcher = useFetcher<QueryResult>();
  const loading = createBoardFetcher.state !== "idle";

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    createBoardFetcher.submit(e.currentTarget.form);
  };

  useEffect(() => {
    // 모달 열고 닫을 때 동작할 액션 넣기.
  }, [isModalOpen]);

  useEffect(() => {
    // fetcher로 submit하고 그 결과가 여기서 반응한다.

    // To-Do :
    // 실패시 컴포넌트 내부에 에러 메시지를 띄워라.
    console.log(createBoardFetcher.data);
    if (createBoardFetcher.data?.rowCount) {
      closeModal();
    }
  }, [createBoardFetcher.data]);

  const avatarIdRef = useRef<HTMLInputElement>(null);
  const handleAvatarChange = (avatarId: number) => {
    avatarIdRef.current!.value = avatarId + "";
  };
  {
    /* To-Do : 글자수 제한 */
  }
  return (
    <createBoardFetcher.Form method="post" action="/board/create">
      <BoardItemContainer>
        <BoardItemRowContainer>
          <BoardItemBlockWrapper>
            <BoardItemFirstBlock>
              <div className="flex">
                <AvatarSelector handleAvatarChange={handleAvatarChange} />
                <input
                  ref={avatarIdRef}
                  type="hidden"
                  name="avatar_id"
                  defaultValue={0}
                />
                <div className="w-24">
                  <input
                    type="text"
                    name="author"
                    className="border w-5/6"
                    placeholder="작성자"
                  />
                  <input
                    type="password"
                    name="password"
                    className="border w-5/6"
                    placeholder="비밀번호"
                  />
                </div>
              </div>
            </BoardItemFirstBlock>
            <BoardItemMiddleBlock>
              <input
                type="text"
                name="title"
                className="border"
                placeholder="제목을 입력하세요."
              />
            </BoardItemMiddleBlock>
          </BoardItemBlockWrapper>
        </BoardItemRowContainer>
        <BoardItemRowContainer>
          <input
            type="textarea"
            name="content"
            className="min-h-64 border w-full h-auto"
          />
        </BoardItemRowContainer>
        {isPrivateChecked
          ? "이 게시글을 비공개로 게시합니다."
          : "게시글은 관리자의 승인 후 전체 공개 됩니다. 이 게시글을 비공개로 게시할까요?"}
        <label>
          <input
            type="checkbox"
            name="is_private"
            onChange={(e) => {
              setIsPrivateChecked(e.target.checked);
            }}
          />
          비공개로 게시하기
        </label>

        <Center>
          <button
            className="rounded text-blue-500"
            type="submit"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            작성하기
          </button>
        </Center>
      </BoardItemContainer>
    </createBoardFetcher.Form>
  );
}
