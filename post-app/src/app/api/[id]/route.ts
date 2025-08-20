import { NextRequest, NextResponse } from "next/server";
import PostgresPostRepository from "@/app/utils/postgres-post-repository";
import PostUpdater from "@/app/utils/post-updater";
import PostDeleter from "@/app/utils/post-deleter";




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
        console.error('Error updating data:', error);
        return NextResponse.json({
            message: 'Failed to update data'
        }, {status:500})
    }
}

export async function DELETE(request: NextRequest, {params}: {params: {id:string}}) { 
    try {
        const id = Number(params.id);
        if (isNaN(id) || !id) {
            return NextResponse.json({
                message: 'Invalid ID'
            }, {status: 400});
        }

        const repository = new PostgresPostRepository();
        const deleter = new PostDeleter(repository);
        await deleter.run(Number(params.id));

        return NextResponse.json({
            message: 'Data deleted successfully in post',
            id_delete: params.id
        })

    } catch (error) {
        console.error('Error deleting data:', error);
        return NextResponse.json({
            message: 'Failed to delete data'
        }, {status:500})
    }
}



