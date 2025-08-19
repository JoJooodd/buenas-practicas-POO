'/src/utils/post-register.ts';
import postgres from "postgres";




export default class PostRegister {

    constructor(){}

    public async run(id: number, title: string, description: string, author: string) {
        isValidPost(id, title, description, author);
        await savePost(title, description, author);
    }
}


function isValidPost(id: number, title: string, description: string, author: string):void {
    if (id && title && description && author) {

        if (typeof id !== "number") {
            throw new Error('Invalid id')
        }

        if (typeof title !== "string" || title.length >= 15) {
            throw new Error('Invalid title')
        }

        if (typeof description !== "string" || 
            description.length >= 40) {
            throw new Error('Invalid description')
        }

        if (typeof author !== "string" || author.length <= 1) {
            throw new Error('Invalid author')
        }
    }
}


async function savePost(title: string, description: string, author: string): Promise<void> {
    const connectionString = 'postgresql://postgres.ekyyyptzflltjjbgjdrm:Josue321@aws-1-us-east-2.pooler.supabase.com:6543/postgres';
    const sql = postgres(connectionString);
    await sql `INSERT INTO posts (title, description, author) VALUES (${title},  ${description}, ${author});`
}
