import { NextRequest, NextResponse } from "next/server";
import postgres from "postgres";

export async function POST(request:NextRequest) {

    try {

        const data = await request.json()

        const connectionString = 'postgresql://postgres.ekyyyptzflltjjbgjdrm:Josue321@aws-1-us-east-2.pooler.supabase.com:6543/postgres';
        const sql = postgres(connectionString);

        let errorGenerate = "";

        if (data && data.id && data.title && data.description && data.author) {

            if (typeof data.id !== "number") {
                if (errorGenerate !== ""){
                    errorGenerate += ' and Invalid id';
                } else {
                    errorGenerate = 'Invalid id';
                }
            }

            if (typeof data.title !== "string" || data.title.length >= 15) {
                if (errorGenerate !== ""){
                    errorGenerate += ' and Invalid title'
                } else {
                    errorGenerate = 'Invalid title'
                }
            }

            if (typeof data.description !== "string" || 
                data.description.length >= 40) {
                if (errorGenerate !== ""){
                    errorGenerate += ' and Invalid description'
                } else {
                    errorGenerate = 'Invalid description'
                }
            }

            if (typeof data.author !== "string" || data.author.length <= 1) {
                if (errorGenerate !== ""){
                    errorGenerate += ' and Invalid author'
                } else {
                    errorGenerate = 'Invalid author'
                }
            }

            if (errorGenerate){
                return NextResponse.json({
                    message: errorGenerate
                }, {status: 422});
            } else {
                return NextResponse.json({
                    message: 'Data save succesfully', data:data
                })
            }
        }

    } catch {
        return NextResponse.json({
            message: 'Failed to save data'
        }, {status:500})
    }

}