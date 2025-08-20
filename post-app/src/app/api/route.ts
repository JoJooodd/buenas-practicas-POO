import { NextRequest, NextResponse } from "next/server";
import PostRegister from "../utils/post-register";
import PostgresPostRepository from "../utils/postgres-post-repository";
import PostSearcher from "../utils/post-searcher";




export async function POST(request:NextRequest) {

    try {
        const data = await request.json()
        const repository = new PostgresPostRepository();
        const register = new PostRegister(repository)
        await register.run(data.id, data.title, data.description, data.author)

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

export async function GET(request:NextRequest) {
    try {
        const repository = new PostgresPostRepository();
        const searcher = new PostSearcher(repository);
        const posts = await searcher.run();
        return NextResponse.json({
            dataSaved: posts,
        });
    } catch (error) {
        console.log('Error fetching posts:', error);
        return NextResponse.json({
            message: 'Failed to fetch data (posts)'
        }, {status: 500});
    }
}
