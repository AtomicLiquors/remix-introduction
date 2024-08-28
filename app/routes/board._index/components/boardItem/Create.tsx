import BoardItemContainer from "./layout/Container";
import BoardItemFirstBlock from "./layout/FirstBlock";
import BoardItemMiddleBlock from "./layout/MiddleBlock";
import BoardItemBlockWrapper from "./layout/BlockWrapper";
import BoardItemRowContainer from "./layout/RowContainer";
import Center from "@/common/components/atoms/Center";
import { ErrorResponse, useFetcher } from "@remix-run/react";
import { useRef, FormEvent, useEffect, useState } from "react";
import AvatarSelector from "@/common/avatar/AvatarSelector";
import { QueryResult } from "@vercel/postgres";
import { boardInputClassName } from "../../util/boardTailwind";
import BoardPrivateCheckbox from "./form/PrivateCheckbox";
import BoardTitleInput from "./form/TitleInput";
import BoardContentTextArea from "./form/ContentTextArea";
import {
  validateAuthor,
  validateContent,
  validatePassword,
  validateTitle,
} from "../../util/validateForm";
import { invalidMessage } from "../../util/invalidMessage";
import InvalidFormMsg from "./form/InvalidFormMsg";

interface BoardItemCreateProps {
  isModalOpen: boolean;
  closeModal: () => void;
}

export default function BoardItemCreate({
  isModalOpen,
  closeModal,
}: BoardItemCreateProps) {
  const [isPrivateChecked, setIsPrivateChecked] = useState<boolean>(false);

  const [isTitleValid, setIsTitleValid] = useState<boolean>(true);
  const [isContentValid, setIsContentValid] = useState<boolean>(true);
  const [isAuthorValid, setIsAuthorValid] = useState<boolean>(true);
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(true);
  const [invalidFormMsg, setInvalidFormMsg] = useState<string | null>(null);

  const createBoardFetcher = useFetcher<QueryResult>();
  const loading = createBoardFetcher.state !== "idle";

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const author = formData.get("author")?.toString();
    const password = formData.get("password")?.toString();
    const title = formData.get("title")?.toString();
    const content = formData.get("content")?.toString();

    if (!author || !password || !title || !content) {
      setInvalidFormMsg("이름, 비밀번호, 제목, 내용을 입력해 주세요.");
      return;
    }

    // 유효성 검증 결과
    const authorValidation = validateAuthor(author);
    const passwordValidation = validatePassword(password);
    const titleValidation = validateTitle(title);
    const contentValidation = validateContent(content);

    // 상태 업데이트
    setIsAuthorValid(authorValidation);
    setIsPasswordValid(passwordValidation);
    setIsTitleValid(titleValidation);
    setIsContentValid(contentValidation);

    // 유효성 검증 실패 시 에러 메시지 출력
    if (!authorValidation) {
      setInvalidFormMsg(invalidMessage.author);
      return;
    } else if (!passwordValidation) {
      setInvalidFormMsg(invalidMessage.password);
      return;
    } else if (!titleValidation) {
      setInvalidFormMsg(invalidMessage.title);
      return;
    } else if (!contentValidation) {
      setInvalidFormMsg(invalidMessage.content);
      return;
    }

    setInvalidFormMsg(null);

    createBoardFetcher.submit(formData, {
      method: "post",
      action: "/board/create",
    });
  };

  useEffect(() => {
    // 모달 열고 닫을 때 동작할 액션 넣기.
  }, [isModalOpen]);

  useEffect(() => {
    // fetcher로 submit하고 그 결과가 여기서 반응한다.

    // To-Do :
    // 실패시 컴포넌트 내부에 에러 메시지를 띄워라.
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
    <createBoardFetcher.Form onSubmit={handleSubmit}>
      <BoardItemContainer>
        {!!invalidFormMsg && (
          <InvalidFormMsg msg={invalidFormMsg}/>
        )}
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
                    className={`${boardInputClassName} w-5/6 ${
                      isAuthorValid || "border-red-200"
                    }`}
                    placeholder="작성자"
                  />
                  <input
                    type="password"
                    name="password"
                    className={`${boardInputClassName} w-5/6 ${
                      isPasswordValid || "border-red-200"
                    }`}
                    placeholder="비밀번호"
                  />
                </div>
              </div>
            </BoardItemFirstBlock>
            <BoardItemMiddleBlock>
              <BoardTitleInput isValid={isTitleValid} />
            </BoardItemMiddleBlock>
          </BoardItemBlockWrapper>
        </BoardItemRowContainer>
        <BoardItemRowContainer>
          <BoardContentTextArea isValid={isContentValid} />
        </BoardItemRowContainer>

        {isPrivateChecked ? (
          <div className="text-sm text-gray-700">
            이 게시글을 비공개로 게시합니다.
          </div>
        ) : (
          <div className="text-sm text-gray-700">
            <div>게시글은 관리자의 승인 후 전체 공개 됩니다.</div>
            <div>공개를 원치 않으시면 비공개로 게시할 수 있습니다.</div>
          </div>
        )}

        <BoardPrivateCheckbox
          isPrivateChecked={isPrivateChecked!}
          setIsPrivateChecked={setIsPrivateChecked}
        />

        <Center>
          <button className="rounded text-blue-500" type="submit">
            작성하기
          </button>
        </Center>
      </BoardItemContainer>
    </createBoardFetcher.Form>
  );
}
