import { redirect } from "@remix-run/node";
import { sql, VercelClient } from "@vercel/postgres";
import {z} from "zod";

const board = z.object({
  post_id: z.number(),
  title: z.string(),
  content: z.string(),
  author: z.string(),
  password: z.string(),
  ip: z.string(),
  avatar_id : z.number(),
  created_at: z.date(),
  updated_at: z.date(),
  approved: z.boolean(),
});

type Board = z.infer<typeof board>;

const partialBoard = board.partial().required({
  title: true,
  content: true,
  author: true,
  password: true,
  ip: true,
});

export type PartialBoard = z.infer<typeof partialBoard>;

export async function deleteBoard(postId: number) {
  
  //To-Do: SQL문 에러났을때 에러처리.
  //To-Do: postId zod로 검증.
  //To-Do: 적용 가능한 에러 타입이 있나?
 
  return await sql`DELETE FROM community_board WHERE post_id = ${postId}`;
}

export async function createBoard(data: PartialBoard) {
  const { title, content, author, password, ip } = data;

  return await sql`
    INSERT INTO community_board(title, content, author, password, author_ip)
    VALUES (${title}, ${content}, ${author}, ${password}, ${ip})
  `;
}

export async function getBoard() {
  let data;
  let startTime = Date.now();

  try {
    data = await sql`SELECT * FROM community_board`;
  } catch (e: any) {
    if (e.message === `relation "community_board" does not exist`) {
      console.log(
        "Table does not exist, creating and seeding it with dummy data now..."
      );
      // Table is not created yet
      
      //To-Do: 테이블 초기화를 위한 Seed 구현하기
     // await seed();
      startTime = Date.now();
      data = await sql`SELECT * FROM users`;
    } else {
      throw e;
    }
  }

  const { rows: boards } = data;
  return { boards: boards, duration: Date.now() - startTime };
}