import Articles from "@/components/Articles";
import Banner from "@/components/Banner";
import getArticles from "@/lib/action";
import Image from "next/image";


export default async function Home() {
  const posts = await getArticles();
  const data = await posts.items;
  return (
    <>
    <main className="max-w-[90%] md:max-w-5xl lg:max-w-7xl mx-auto">
      <header className="flex py-5 ">
        <h1 className="text-xl md:text-2xl font-bold">Lentzy R. Philias</h1>
        <Image src="/in.svg" className="ml-auto md:w-7 md:h-7" alt="in" width={24} height={24} />
      </header>
      <Banner />
      <Articles />
      

      {/* <h1>Home</h1>
      <ul>
        {data.map((post:any) => (
          <li key={post.sys.createdAt}>{post.fields.title}</li>
        ))}
      </ul> */}
    </main>
    <footer className="mt-auto border-t w-full text-center p-5 text-slate-500"> © 2024 Lentzy R. Philias </footer>
    </>
  );
}
