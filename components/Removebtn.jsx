"use client"

import { useRouter } from "next/navigation";
import { HiOutlineTrash } from "react-icons/hi";


export default function Removebtn({ id }){

    const router = useRouter();

    const RemoveTopic = async () => {
        const confirmed = confirm("Are you sure?")
        if(confirmed){
            await fetch(`http://localhost:3000/api/topics?id=${id}`, {
                method: "DELETE",
            });
            router.refresh();
        }
    }

    return <button onClick={RemoveTopic} className="text-red-400">
        <HiOutlineTrash size={24} />
    </button>
}