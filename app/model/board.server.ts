import { redirect } from "@remix-run/node";
import { sql } from "@vercel/postgres";
//import { seed } from "~/utils/seed";
import {z} from "zod";

const Board = z.object({
  post_id: z.number(),
  title: z.string(),
  content: z.string(),
  author: z.string(),
  created_at: z.date(),
  updated_at: z.date(),
  approved: z.boolean(),
});

export async function deleteBoard() {
  
  //To-Do: SQL문 에러났을때 에러처리.
  await sql`
    DELETE FROM community_board
    WHERE post_id IN (
        SELECT post_id FROM community_board
        ORDER BY created_at DESC
        LIMIT 3
    )
  `;

  redirect('/');
}

export async function createBoard() {

  const { title, content, author} = {
    title: 'sample title',
    content: 'sample content',
    author: 'sample author'
  }

  await sql`
    INSERT INTO community_board(title, content, author)
    VALUES (${title}, ${content}, ${author})
  `;

  redirect('/');
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