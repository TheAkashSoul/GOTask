import Link from "next/link";

export default function Navbar(){
    return (
        <nav className="flex justify-between bg-slate-800 px-8 py-3 items-center">
            <Link className="text-white font-bold" href={'/'}>GOTask.</Link>
            <Link className="bg-white p-2" href={'/addTopic'}>AddTopic</Link>
        </nav>
    )
}