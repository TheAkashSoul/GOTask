"use client"

import { useState } from "react"
import { useRouter } from "next/navigation";

export default function AddTopic(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!title || !description){
            alert("Title and Description is required")
            return;
        }
        try {
            const res = await fetch("http://localhost:3000/api/topics", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({title, description})
        })
        if(res.ok){
            router.push("/")
            router.refresh();
        }else{
            throw new error ("failed to add topic")
        }
        } catch (error) {
            console.log("Failed to fetch data")
            
        }
        


    }
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input 
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="border border-slate-500 px-8 py-2" type="text" placeholder="Topic Title" />

            <input
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            className="border border-slate-500 px-8 py-2" type="text" placeholder="Topic Description" />

            <button
            type="submit"
            className="bg-green-600 px-6 py-3 font-bold w-fit text-white">Add Topic</button>
        </form>
    )
}