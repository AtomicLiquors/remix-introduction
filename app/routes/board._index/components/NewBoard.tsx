import Center from "@/common/components/atoms/Center";
import Input from "@/common/components/atoms/Input";
import { themeClasses } from "@/theme/theme";
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
    <div>
      <fetcher.Form method="post" action="/board/create">
        {loading ? "loading..." : ""}
        <div className="flex flex-col gap-5">
          <Center className={`text-3xl font-bold ${themeClasses.text.primary}`}>
            새 게시글 작성
          </Center>
          <div className="flex flex-wrap gap-5">
            <Input placeholder="작성자" id="author" name="author" required/>
            <Input placeholder="비밀번호" id="password" name="password" password required/>
          </div>
          <div>
          <Input className="w-full md:w-5/6" 
              placeholder="제목을 입력해주세요." 
              id="title"
              name="title" required/>
          </div>
          <div>
            <textarea
              className="border p-1 w-full md:w-5/6 h-64"
              placeholder="내용을 입력해주세요."
              id="content"
              name="content"
              required
            />
          </div>
        </div>
        <Center>
          <button className="rounded text-blue-500" type="submit">
            작성하기
          </button>
        </Center>
      </fetcher.Form>
    </div>
  );
}
