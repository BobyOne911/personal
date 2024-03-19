
import React from "react";
import { Badge } from "./ui/badge";
import Image from "next/image";
import { ArrowUpRightSquareIcon } from "lucide-react";
import Link from "next/link";
import Carousell from "./Carousel";



function Banner() {
  const category = ["New", "intelligence artificial", "aws", "cloud", "tech"];
  return (
    <section className="flex flex-col md:flex-row md:gap-10">
      <div className="md:pt-10">
        {category.map((item, index) => (
          <Badge
            key={index}
            className="mr-2 my-2 md:text-lg"
            variant="outline"
          >
            {item}
          </Badge>
        ))}
      </div>
      <div className="my-7 md:w-3/5">
        <Image
          src="https://images.unsplash.com/photo-1532993680872-98b088e2cacd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={500}
          height={300}
          className="w-full h-auto"
          alt="banner"
        />
        <h2 className="text-xl mt-4 font-black w-[90%] capitalize">
          Apple’s AI ambitions could include Google or OpenAI
        </h2>
      </div>
      <div className="my-5">
        <h3 className="text-lg font-black Capitalize mb-5">Top stories</h3>
        <div className="hidden md:block">
          <Link href="/" className="block my-5">
            <h3 className="font-bold">
              Apple’s AI ambitions could include Google or OpenAI{" "}
              <ArrowUpRightSquareIcon className="w-5 h-5 inline" />
            </h3>
          </Link>
          <Link href="/" className="block my-5">
            <h3 className="font-bold">
              Apple’s AI ambitions could include Google or OpenAI{" "}
              <ArrowUpRightSquareIcon className="w-5 h-5 inline" />
            </h3>
          </Link>
          <Link href="/" className="block my-5">
            <h3 className="font-bold">
              Apple’s AI ambitions could include Google or OpenAI{" "}
              <ArrowUpRightSquareIcon className="w-5 h-5 inline" />
            </h3>
          </Link>
        </div>
        <Carousell />
      </div>
    </section>
  );
}

export default Banner;
