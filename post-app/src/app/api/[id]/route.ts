import { NextRequest, NextResponse } from "next/server";
import PostgresPostRepository from "@/app/utils/postgres-post-repository";
import PostUpdater from "@/app/utils/post-updater";




export async function PUT(request: NextRequest, {params}: {params: {id:string}}) {
    try {
        const data = await request.json()
        const repository = new PostgresPostRepository();
        const updater = new PostUpdater(repository);
        await updater.run(Number(params.id), data.title, data.description, data.author);

        return NextResponse.json({
            message: 'Data update successfully in post'
        })
    } catch (error) {
        console.error('Error saving data:', error);
        return NextResponse.json({
            message: 'Failed to save data'
        }, {status:500})
    }

}
