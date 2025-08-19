import { NextRequest, NextResponse } from "next/server";
import postgres from "postgres";
import PostRegister from "../utils/post-register";




export async function POST(request:NextRequest) {

    try {

        const data = await request.json()

        const register = new PostRegister()
        await register.run()

        isValidPost(data);

        await savePost(data);

        return NextResponse.json({
            message: 'Data saved successfully in post'
        })
    } catch (error) {
        console.error('Error saving data:', error);
        return NextResponse.json({
            message: 'Failed to save data'
        }, {status:500})
    }
}


function isValidPost(data:any):void {
    if (data && data.id && data.title && data.description && data.author) {

        if (typeof data.id !== "number") {
            throw new Error('Invalid id')
        }

        if (typeof data.title !== "string" || data.title.length >= 15) {
            throw new Error('Invalid title')
        }

        if (typeof data.description !== "string" || 
            data.description.length >= 40) {
            throw new Error('Invalid description')
        }

        if (typeof data.author !== "string" || data.author.length <= 1) {
            throw new Error('Invalid author')
        }
    }
}

async function savePost(data:any): Promise<void> {
    const connectionString = 'postgresql://postgres.ekyyyptzflltjjbgjdrm:Josue321@aws-1-us-east-2.pooler.supabase.com:6543/postgres';
    const sql = postgres(connectionString);
    await sql `INSERT INTO posts (title, description, author) VALUES (${data.title},  ${data.description}, ${data.author});`
}
