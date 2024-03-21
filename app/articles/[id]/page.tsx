import Carousell from "@/components/Carousel";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { main } from "@/lib/style";
import { ArrowLeft } from "lucide-react";
import Aside_article from "@/components/Aside_article";
import Image from "next/image";
import React from "react";
import client from "@/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

async function Article({params}: any) {
  const {id } = params
  const title = decodeURIComponent(id) as string;
  const data = await client.getEntries({
    content_type: 'blogPost', // Replace with your actual content type
    // other options...
  }); 
  const article = data.items.find((item: any) => item.fields.title === title);
  console.log(article.fields.article)
  return (
    <main className={main}>
      <Header />
   
      <div className="flex flex-col mb-10   md:flex-row-reverse md:gap-5 lg:gap-10">
        <div className="w-full md:w-3/5 lg:4/5 mx-auto mt-20 md:mt-32">
        <Button variant="outline" className="my-5 rounded md:hidden">
        <ArrowLeft className="w-5 h-5 inline mr-2" /> Back
      </Button>
          <h1 className="text-2xl font-black md:w-4/5 lg:w-3/5 md:text-4xl">
            {article.fields.title}
          </h1>
          <span className="text-slate-500 mt-3 block md:my-6">
            By: {article.fields.author}
          </span>
          <Image
             src={`https:${article.fields.image.fields.file.url}`} 
            width={500}
            height={300}
            className="w-full  md:w-4/5 lg:w-2/3 mt-3 h-auto"
            alt="banner"
          />
          <div className="w-[90%] my-3 md:w-4/5 lg:w-2/3 md:text-lg md:my-10 personal_article">
          
            {documentToReactComponents(article.fields.article)}
            
          </div>
        </div>
        <div className="w-full md:w-2/5 lg:w-1/5 md:relative">
          <div className="md:fixed md:w-[300px]">
            <Button variant="outline" className="hidden md:block my-5 rounded">
              <ArrowLeft className="w-5 h-5 inline mr-2" /> Back
            </Button>
            <h2 className="text-lg font-black Capitalize my-3">Top stories</h2>
            <div className="hidden md:block ">
              <Aside_article />
              <Aside_article />
              <Aside_article />
              <Aside_article />
            </div>
            <Carousell />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Article;
