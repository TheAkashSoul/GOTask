import Link from "next/link";
import Removebtn from "./Removebtn";
import {HiPencilAlt} from "react-icons/hi"

const getData = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/topics", {
            cache: "no-store",
        })
        if(!res.ok){
            throw new error ("Failed to fetch data");
        }
        return res.json();
    } catch (error) {
        console.log("Error loading topics", error)
    }
}

export default async function TopicsList() {

    const {topics} = await getData()

    return (
        <>
        {topics?.map(t => (
            <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
                <div>
                    <h1 className="font-bold text-2xl">{t.title}</h1>
                    <div>{t.description}</div>
                </div>
                <div className="flex gap-2">
                    <Removebtn id={t._id}/>
                    <Link href={`/editTopic/${t._id}`}>
                        <HiPencilAlt size={24} />
                    </Link>

                </div>
            </div>
        ))}
        </>
    )
}