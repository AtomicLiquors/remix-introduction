import BoardItemContainer from "./layout/Container";
import BoardItemFirstBlock from "./layout/FirstBlock";
import BoardItemMiddleBlock from "./layout/MiddleBlock";
import BoardItemBlockWrapper from "./layout/BlockWrapper";
import BoardItemRowContainer from "./layout/RowContainer";
import Center from "@/common/components/atoms/Center";
import { useActionData, useFetcher } from "@remix-run/react";
import { useRef, FormEvent, useEffect } from "react";
import AvatarSelector from "@/common/avatar/AvatarSelector";

export default function BoardItemCreate() {
  
  const fetcher = useFetcher();
  const loading = fetcher.state !== "idle";

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // fetcher로 submit하고 그 결과는 어떻게? useEffect 써서 받아오나?
    fetcher.submit(e.currentTarget.form);
  }

  useEffect(() => {
    console.log(fetcher.data);
  }, [fetcher.data])
  
  const avatarIdRef = useRef<HTMLInputElement>(null);
  const handleAvatarChange = (avatarId: number) => {
    avatarIdRef.current!.value = avatarId + '';
  }
  {/* To-Do : 글자수 제한 */}
  return (
    <fetcher.Form method="post" action="/board/create">
      <BoardItemContainer>
        <BoardItemRowContainer>
          <BoardItemBlockWrapper>
            <BoardItemFirstBlock>
              <div className="flex">
              <AvatarSelector handleAvatarChange={handleAvatarChange}/>
              <input ref={avatarIdRef} type="hidden" name="avatar_id" defaultValue={0}/>
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
          <input type="textarea" name="content" className="min-h-64 border w-full h-auto" />
        </BoardItemRowContainer>
        <Center>
          <button className="rounded text-blue-500" type="submit" onClick={(e) => {handleSubmit(e)}}>
            작성하기
          </button>
        </Center>
      </BoardItemContainer>
    </fetcher.Form>
  );
}
