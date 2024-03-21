"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ArrowUpRightSquareIcon } from "lucide-react";
import Link from "next/link";
import { Separator } from "./ui/separator";

function Carousell({fields}:top_articles_props) {
  console.log(fields);
  return (
    <Carousel
      className="w-full md:hidden"
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent>

      {
        fields.map((item: any) => (
          <CarouselItem key={item.sys.id} className="basis-4/5">
            <Link href={`/articles/${item.fields.title}`} className="block">
              <h3 className="font-bold text-lg">
                {item.fields.title}
                <ArrowUpRightSquareIcon className="w-5 h-5 inline" />
              </h3>
            </Link>
            <Separator />
            <h3><strong>{item.fields.author}</strong>, {item.sys.createdAt}</h3>
          </CarouselItem>
        ))
      }
       
      </CarouselContent>
    </Carousel>
  );
}

export default Carousell;
