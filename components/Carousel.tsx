"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ArrowUpRightSquareIcon } from "lucide-react";
import Link from "next/link";
import { Separator } from "./ui/separator";

function Carousell() {
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
        <CarouselItem className="basis-2/3">
          <Link href="/" className="block">
            <h3 className="font-bold">
              Apple’s AI ambitions could include Google or OpenAI{" "}
              <ArrowUpRightSquareIcon className="w-5 h-5 inline" />
            </h3>
          </Link>
          <Separator />
          <h3>Lentzy R Philias, 03/20/2024</h3>
        </CarouselItem>
        <CarouselItem className="basis-2/3">
          <Link href="/" className="block">
            <h3 className="font-bold">
              Apple’s AI ambitions could include Google or OpenAI{" "}
              <ArrowUpRightSquareIcon className="w-5 h-5 inline" />
            </h3>
          </Link>
          <Separator />
          <h3>Lentzy R Philias, 03/20/2024</h3>
        </CarouselItem>
        <CarouselItem className="basis-2/3">
          <Link href="/" className="block">
            <h3 className="font-bold">
              Apple’s AI ambitions could include Google or OpenAI{" "}
              <ArrowUpRightSquareIcon className="w-5 h-5 inline" />
            </h3>
          </Link>
          <Separator />
          <h3>Lentzy R Philias, 03/20/2024</h3>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}

export default Carousell;
