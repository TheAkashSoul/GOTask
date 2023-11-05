"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function EditTopicForm({ id, title, description }){

    const router = useRouter();
    const [newTitle, setNewTitle] = useState(title)
    const [newDescription, setNewDescription] = useState(description)

    

    const handleUpdate = async (e) => {
        e.preventDefault();

        if(!newTitle || !newDescription){
            alert("Title and Description is required");
            return;
        }

        try {
            const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({newTitle, newDescription})
        })
        if(res.ok){
            router.push("/")
            router.refresh();
        }
        } catch (error) {
            console.log(error)
            
        }

        
    }

    return (
        <form 
        onSubmit={handleUpdate}
        className="flex flex-col gap-3">
            <input 
            onChange={(e) => setNewTitle(e.target.value)}
            value={newTitle}
            className="border border-slate-500 px-8 py-2" type="text" placeholder="Topic Title" />

            <input 
            onChange={(e) => setNewDescription(e.target.value)}
            value={newDescription}
            className="border border-slate-500 px-8 py-2" type="text" placeholder="Topic Description" />

            <button 
            type="submit"
            className="bg-green-600 px-6 py-3 font-bold w-fit text-white">Update Topic</button>
        </form>
    )
}