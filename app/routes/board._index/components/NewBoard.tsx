import Center from "@/common/components/atoms/Center";
import { useFetcher } from "@remix-run/react";

export default function NewBoard() {
  const fetcher = useFetcher();
  const loading = fetcher.state !== "idle";

  return (
    <Center>
      <fetcher.Form method="post" action="/api/board/create">
        {loading ? "loading..." : ""}
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" required />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea id="content" name="content" required />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input type="text" id="author" name="author" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button className="rounded text-blue-500" type="submit">
          Create Post
        </button>
      </fetcher.Form>
    </Center>
  );
}
