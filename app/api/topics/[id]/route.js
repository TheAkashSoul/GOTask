import connectMongoDB from "@/libs/mongodb";
import Topic from "@/model/topic";
import { NextResponse } from "next/server";

export async function PUT(request, {params}){
    const {id} = params;
    await connectMongoDB;
    const {newTitle: title, newDescription: description} = await request.json();
    await Topic.findByIdAndUpdate(id, {title, description});
    return NextResponse.json({messege: "Topic Updated"}, {status: 200});
}

export async function GET(request, {params}){
    const {id} = params;
    await connectMongoDB;
    const topic = await Topic.findById({_id : id});
    return NextResponse.json({topic});
}