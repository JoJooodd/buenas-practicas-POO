// utils/postgres-post-repository.ts

import Post from "./post";
import postgres, { Sql } from "postgres";
import PostRepository from "./post-repository";




export default class PostgresPostRepository implements PostRepository {
    private readonly sql: Sql;

    constructor(){
        const connectionString = 'postgresql://postgres.ekyyyptzflltjjbgjdrm:Josue321@aws-1-us-east-2.pooler.supabase.com:6543/postgres';
        this.sql = postgres(connectionString);
    }

    async save(post: Post) {
        try {
            const title = post.title.value;
            const description = post.description.value;
            const author = post.author.value;

            await this.sql`INSERT INTO posts (title, description, author) VALUES (${title},  ${description}, ${author});`
        } catch(error) {
            console.log("ocurrio un error a la hora de guardar la data: ", error)
        }
    }



}
