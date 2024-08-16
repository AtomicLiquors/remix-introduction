import { sql } from "@vercel/postgres"

const testQuery = async (query: string) => {
    try{
        await sql`
      BEGIN TRANSACTION
      ${query}
      END TRANSACTION
        `
    }catch(e){
        throw e;
    }
}