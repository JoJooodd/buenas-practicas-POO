'/src/utils/post-register.ts';
import postgres from "postgres";
import Post from "./post";




export default class PostRegister {

    constructor(){}

    public async run(title: string, description: string, author: string) {
        const post = Post.create(title, description, author);
        await this.savePost(post.title.value, post.description.value, post.author.value)
    }


    async savePost(title: string, description: string, author: string): Promise<void> {
        try {
            const connectionString = 'postgresql://postgres.ekyyyptzflltjjbgjdrm:Josue321@aws-1-us-east-2.pooler.supabase.com:6543/postgres';
            const sql = postgres(connectionString);
            await sql `INSERT INTO posts (title, description, author) VALUES (${title},  ${description}, ${author});`
        } catch (error) {
            console.log(error)
        }
    }

}
