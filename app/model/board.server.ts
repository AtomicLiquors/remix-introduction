import { sql } from "@vercel/postgres";
//import { seed } from "~/utils/seed";

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