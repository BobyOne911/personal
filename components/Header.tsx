import Image from "next/image";

function Header() {
  return (
    <header className="flex py-5 ">
    <h1 className="text-xl md:text-2xl font-bold">Lentzy R. Philias</h1>
    <Image src="/in.svg" className="ml-auto md:w-7 md:h-7" alt="in" width={24} height={24} />
  </header>
  )
}

export default Header