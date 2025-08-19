import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest) {

    try {

        const data = await request.json()
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
            message: 'The data do not save'
        }, {status:422})
    }

}