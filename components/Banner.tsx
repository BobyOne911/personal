import React from "react";
import { Badge } from "./ui/badge";
import Image from "next/image";
import Carousell from "./Carousel";
import Quote from "./Quote";
import Aside_article from "./Aside_article";
import client from "@/contentful";
import Link from "next/link";
import topArticles from "@/lib/aside.action";

async function Banner() {
  const highlight = await client.getEntries({
    content_type: "blogPost",
    order: "-sys.createdAt",
    "fields.highlight": true,
    limit: 1,
  })
  
  const top = await topArticles();
  const category = ["New", "intelligence artificial", "aws", "cloud", "tech"];
  return (
    <section className="flex flex-col md:flex-row md:gap-10">
      <div className="md:pt-10 md:w-1/5">
        {category.map((item, index) => (
          <Badge key={index} className="mr-2 my-2 md:text-lg" variant="outline">
            {item}
          </Badge>
        ))}
        <div className="p-3 hidden md:block">
          <h2 className="font-black mb-3 text-xl">Quote</h2>
          <Quote />
        </div>
      </div>
      <div className="my-7 md:w-3/5">
        <Image
          src={`https:${highlight.items[0].fields.image.fields.file.url}`} 
          width={500}
          height={300}
          className="w-full h-auto"
          alt="banner"
        />
        <Badge className="mr-2 md:text-md my-3" variant="outline">
          {highlight.items[0].fields.author}
        </Badge>
        <h2 className="text-xl md:text-3xl  font-black w-[90%] capitalize">
          <Link href={`/articles/${highlight.items[0].fields.title}`}>{highlight.items[0].fields.title}</Link>
        </h2>
      </div>
      <div className="my-5">
        <h3 className="text-lg font-black Capitalize mb-5">Top stories</h3>
        <div className="hidden md:block">
          {
            top.items.map((item: any) => (
              <Aside_article
                key={item.sys.id}
                title={item.fields.title}
                author={item.fields.author}
                date_publication={item.sys.createdAt}
              />
            ))
          }
        </div>
        <Carousell fields={top.items} />
      </div>
    </section>
  );
}

export default Banner;
