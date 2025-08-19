import { NextRequest, NextResponse } from "next/server";
import PostRegister from "../utils/post-register";
import PostgresPostRepository from "../utils/postgres-post-repository";




export async function POST(request:NextRequest) {

    try {
        const data = await request.json()
        const repository = new PostgresPostRepository();
        const register = new PostRegister(repository)
        await register.run(data.title, data.description, data.author)

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
