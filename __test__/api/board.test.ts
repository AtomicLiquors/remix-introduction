import { getBoard } from '@/model/board.server';
import { sql } from "@vercel/postgres";
import dotenv from "dotenv";
dotenv.config();

const HOST = `http://${process.env.LOCAL_HOST_DEV}`;
/*
const testQuery = async (query: string) => {
  try {
    await sql`
      BEGIN TRANSACTION
      ${query}
      END TRANSACTION
        `;
  } catch (e) {
    throw e;
  }
};
*/
describe("loader", () => {
  it("first try", async () => {
    //const request = new Request(`${HOST}/board`);
    const response = await getBoard();
    expect(response).toBeTruthy();
  });
});
