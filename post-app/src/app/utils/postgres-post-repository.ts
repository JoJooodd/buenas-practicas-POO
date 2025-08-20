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

    async seePosts() {
        try {
            const posts = await this.sql`SELECT * FROM posts;`;
            return posts;
        } catch(error) {
            console.log("Failed to get the data (posts): ", error);
        }
    }

    async updatePosts(post: Post) {
        try {
            const id = post.id.value;
            const title = post.title.value;
            const description = post.description.value;
            const author = post.author.value;

            await this.sql`UPDATE public.posts SET title = ${title}, description = ${description}, author = ${author} WHERE id = ${id};`;
        } catch(error) {
            console.log("Failed to update the data (posts): ", error);
            throw new Error("Failed to update the data (posts)");
        }
    }

    async deletePosts(id:number) {
        try {
            await this.sql`DELETE FROM public.posts WHERE id = ${id}`
        } catch(error) {
            console.log("Failed to delete the data (posts): ", error);
            throw new Error("Failed to delete the data (posts)");
        }
    }
}
