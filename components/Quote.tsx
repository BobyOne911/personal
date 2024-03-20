"use client";
import quote from "@/lib/quote";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
  
  } from "./ui/carousel";
  import Autoplay from "embla-carousel-autoplay"


function Quote() {
  return (
    <Carousel className="hidden md:block"   plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}>
          <CarouselContent>

            {
                quote.map((item, index) => (
                    <CarouselItem>
                        <h3 className="italic">{item.quote}</h3>
                        <span className="font-bold mt-2">{item.author}</span>
                    </CarouselItem>
                ))
            }
          </CarouselContent>
        </Carousel>
  )
}

export default Quote