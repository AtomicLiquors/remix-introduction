import { db } from "@vercel/postgres";

const dropTable = async (client, table) => {
    await client.sql`DROP TABLE IF EXISTS ${table};` 
}

async function seed() {

    const client = await db.connect();

    const tableName = 'community_board';

    const result = await client.sql`
        SELECT * FROM community_board;
    `
    console.log(result);

    await client.sql`DROP TABLE IF EXISTS community_board`;

    await client.sql`
    CREATE TABLE community_board (
        post_id SERIAL NOT NULL,
        title VARCHAR(255) NOT NULL,
        content TEXT NOT NULL,
        author VARCHAR(255) NOT NULL,
        avatar_id INT DEFAULT 0,
        password VARCHAR(255) NOT NULL,
        created_at DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
        approved BOOLEAN NOT NULL DEFAULT FALSE,
        PRIMARY KEY (post_id)
    );
    `
    console.log(`Created ${tableName} table`);

    await client.sql`
        INSERT INTO community_board (title, content, author, password)
VALUES
        ('First Post', 'This is the content of the first post.', 'Alice', 'password123'),
        ('Second Post', 'Here is some more content.', 'Bob', 'password123'),
        ('Third Post', 'Yet another post content.', 'Charlie', 'password123'),
        ('Fourth Post', 'More content for testing.', 'David', 'password123'),
        ('Fifth Post', 'Sample content in fifth post.', 'Eve', 'password123'),
        ('Sixth Post', 'Content for the sixth post.', 'Frank', 'password123'),
        ('Seventh Post', 'Seventh post content here.', 'Grace', 'password123'),
        ('Eighth Post', 'Eighth post with some content.', 'Heidi', 'password123'),
        ('Ninth Post', 'Ninth post content for testing.', 'Ivan', 'password123'),
        ('Tenth Post', 'Tenth post and its content.', 'Judy', 'password123');
    `  
    console.log(`inserted sample data`); 
    await client.end();
}

seed().catch((err) => {
    console.error(err);
});