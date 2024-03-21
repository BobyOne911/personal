import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex py-5 border-b">
    <h1 className="text-xl md:text-2xl font-bold"><Link href="/">Lentzy R. Philias</Link></h1>
    <Link href='/' className="block ml-auto"><Image src="/in.svg" className=" md:w-7 md:h-7" alt="in" width={24} height={24} /></Link>
  </header>
  )
}

export default Header