import Articles from "@/components/Articles";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import getArticles from "@/lib/action";
import { main } from "@/lib/style";



export default async function Home() {
  const posts = await getArticles();
  const data = await posts.items;
  return (
    <>
    
    <main className="w-[90%] md:w-5xl lg:w-7xl mx-auto">
    <Header />
      <Banner />
      <Articles />
      

      {/* <h1>Home</h1>
      <ul>
        {data.map((post:any) => (
          <li key={post.sys.createdAt}>{post.fields.title}</li>
        ))}
      </ul> */}
    </main>
    <Footer />
    </>
  );
}
