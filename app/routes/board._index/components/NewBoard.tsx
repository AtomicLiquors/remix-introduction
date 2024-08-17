import Center from "@/common/components/atoms/Center";
import { useFetcher } from "@remix-run/react";

export default function NewBoard() {
  const fetcher = useFetcher();
  const loading = fetcher.state !== "idle";

  return (
      <fetcher.Form method="post" action="/api/board/create">
        {loading ? "loading..." : ""}
        <div>
          <label htmlFor="title">제목</label>
          <input className="border" type="text" id="title" name="title" required />
        </div>
        <div>
          <label htmlFor="content">내용</label>
          <textarea className="border" id="content" name="content" required />
        </div>
        <div>
          <label htmlFor="author">작성자</label>
          <input className="border" type="text" id="author" name="author" required />
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <input className="border" type="password" id="password" name="password" required />
          <small>수정, 삭제에 사용될 비밀번호입니다.</small>
        </div>
        <button className="rounded text-blue-500" type="submit">
          Create Post
        </button>
      </fetcher.Form>
  );
}
