import Center from "@/common/components/atoms/Center";
import { useFetcher } from "@remix-run/react";

const handleSubmit = () => {
  // 입력폼 닫기
  // 입력 초기화
};

{
  /* 모달 닫는 로직 Props로 전달받아서 사용하기. */
}
export default function NewBoard() {
  const fetcher = useFetcher();
  const loading = fetcher.state !== "idle";

  return (
    <Center flexCol className="h-full">
      <div >
        <fetcher.Form method="post" action="/board/create">
          {loading ? "loading..." : ""}
          <div>
            <label htmlFor="title">제목</label>
            <input
              className="border"
              type="text"
              id="title"
              name="title"
              required
            />
          </div>
          <div>
            <label htmlFor="author">작성자</label>
            <input
              className="border"
              type="text"
              id="author"
              name="author"
              required
            />
          </div>
          <div>
            <label htmlFor="password">비밀번호</label>
            <input
              className="border"
              type="password"
              id="password"
              name="password"
              required
            />
            <small>수정, 삭제에 사용될 비밀번호입니다.</small>
          </div>
          <div>
            <label htmlFor="content">내용</label>
            <textarea className="border" id="content" name="content" required />
          </div>
          <button className="rounded text-blue-500" type="submit">
            Create Post
          </button>
        </fetcher.Form>
      </div>
    </Center>
  );
}
