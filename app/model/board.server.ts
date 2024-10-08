import { encrypt, verifyPassword } from "@/utils/passwordEncrypt";
import { redirect } from "@remix-run/node";
import { QueryResult, sql, VercelClient } from "@vercel/postgres";
import { z } from "zod";

const board = z.object({
  post_id: z.number(),
  title: z.string(),
  content: z.string(),
  author: z.string(),
  password: z.string(),
  ip: z.string(),
  avatar_id: z.number(),
  created_at: z.date(),
  updated_at: z.date(),
  approved: z.boolean(),
  is_private: z.boolean(),
});

const boardCreateRequestDTO = board.partial().required({
  title: true,
  avatar_id: true,
  content: true,
  author: true,
  password: true,
  ip: true,
  is_private: true,
});

const boardEditRequestDTO = board.partial().required({
  avatar_id: true,
  post_id: true,
  title: true,
  content: true,
  is_private: true,
});

const boardDetailResponseDTO = board.partial().required({
  post_id: true,
  title: true,
  content: true,
  author: true,
  ip: true,
});

export type BoardCreateRequestDTO = z.infer<typeof boardCreateRequestDTO>;
export type BoardEditRequestDTO = z.infer<typeof boardEditRequestDTO>;
export type BoardDetailResponseDTO = z.infer<typeof boardDetailResponseDTO>;

export async function checkPassword(postId: number, inputPassword: string) {
  const result: QueryResult =
    await sql`SELECT password FROM community_board WHERE post_id = ${postId}`;

  // if(result.rowCount !== 1) throw error

  const { rows: data } = result;
  
  return await verifyPassword(inputPassword, data[0].password);
}

export async function deleteBoardById(postId: number) {
  return await sql`DELETE FROM community_board WHERE post_id = ${postId}`;
}
//To-Do: SQL문 에러났을때 에러처리!!
//To-Do: postId zod로 검증.
//To-Do: 적용 가능한 에러 타입이 있나?

export async function createBoard(data: BoardCreateRequestDTO) {
  const { title, avatar_id, content, author, password, ip, is_private } = data;

  const encryptedPassword = await encrypt(password);

  try {
    const result = await sql`
    INSERT INTO community_board(title, avatar_id, content, author, password, author_ip, is_private)
    VALUES (${title}, ${avatar_id}, ${content}, ${author}, ${encryptedPassword}, ${ip}, ${is_private})
  `;

    return result;
  } catch (error) {
    /* {
    "name": "NeonDbError",
    "severity": "ERROR",
    "code": "42601",
    "position": "6",
    "file": "scan.l",
    "line": "1241",
    "routine": "scanner_yyerror"
}*/
    return error;
  }
}

export async function editBoard(data: BoardEditRequestDTO) {
  const { post_id, avatar_id, title, content, is_private } = data;

  return await sql`
    UPDATE community_board
    SET title = ${title},
    avatar_id = ${avatar_id},
    content = ${content},
    is_private = ${is_private}
    WHERE post_id = ${post_id};
  `;
}

export async function getBoards() {
  let boards;
  let startTime = Date.now();

  try {
    boards =
      await sql`SELECT post_id, avatar_id, title, content, author, author_ip, is_private, created_at, updated_at, approved FROM community_board ORDER BY created_at DESC`;
  } catch (e: any) {
    if (e.message === `relation "community_board" does not exist`) {
      console.log(
        "Table does not exist, creating and seeding it with dummy data now..."
      );
      // Table is not created yet

      //To-Do: 테이블 초기화를 위한 Seed 구현하기
      // await seed();
      startTime = Date.now();
      boards =
        await sql`SELECT post_id, avatar_id, title, content, author, author_ip, is_private, created_at, updated_at FROM community_board ORDER BY created_at DESC`;
    } else {
      throw e;
    }
  }

  const { rows: data } = boards;
  return { data: data, duration: Date.now() - startTime };
}

export async function getBoardById(post_id: number) {
  return await sql`SELECT post_id, avatar_id, title, content, author, author_ip, is_private, created_at, updated_at FROM community_board WHERE post_id = ${post_id}`;
}

export async function approveBoardById(post_id: number){
  return await sql`UPDATE community_board
    SET approved = TRUE
    WHERE post_id = ${post_id};`
}
