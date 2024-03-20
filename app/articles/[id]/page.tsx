import Carousell from "@/components/Carousel";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { main } from "@/lib/style";
import { ArrowLeft} from "lucide-react";
import Image from "next/image";
import React from "react";

function Article() {
  return (
    <main className={main}>
     
      <Header />
      <Button variant="outline" className="my-5 rounded"><ArrowLeft className="w-5 h-5 inline mr-2"/> Back</Button>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-4/5">
          <h1 className="text-2xl font-black">
            Nvidia’s Jensen Huang says AI hallucinations are solvable,
            artificial general intelligence is 5 years away
          </h1>
          <span className="text-slate-500 mt-3 block">By: John Doe</span>
          <Image
            src="https://images.unsplash.com/photo-1532993680872-98b088e2cacd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={500}
            height={300}
            className="w-full mt-3 h-auto"
            alt="banner"
          />
          <div className="w-[90%] my-3">
            <p  className="my-4">
              Artificial general intelligence (AGI) — often referred to as
              “strong AI,” “full AI,” “human-level AI” or “general intelligent
              action” — represents a significant future leap in the field of
              artificial intelligence. Unlike narrow AI, which is tailored for
              specific tasks, such as detecting product flaws, summarizing the
              news, or building you a website, AGI will be able to perform a
              broad spectrum of cognitive tasks at or above human levels.
              Addressing the press this week at Nvidia’s annual GTC developer
              conference, CEO Jensen Huang appeared to be getting really bored
              of discussing the subject — not least because he finds himself
              misquoted a lot, he says.
            </p>
            <p className="my-4">
              Artificial general intelligence (AGI) — often referred to as
              “strong AI,” “full AI,” “human-level AI” or “general intelligent
              action” — represents a significant future leap in the field of
              artificial intelligence. Unlike narrow AI, which is tailored for
              specific tasks, such as detecting product flaws, summarizing the
              news, or building you a website, AGI will be able to perform a
              broad spectrum of cognitive tasks at or above human levels.
              Addressing the press this week at Nvidia’s annual GTC developer
              conference, CEO Jensen Huang appeared to be getting really bored
              of discussing the subject — not least because he finds himself
              misquoted a lot, he says.
            </p>
            <p>
              Artificial general intelligence (AGI) — often referred to as
              “strong AI,” “full AI,” “human-level AI” or “general intelligent
              action” — represents a significant future leap in the field of
              artificial intelligence. Unlike narrow AI, which is tailored for
              specific tasks, such as detecting product flaws, summarizing the
              news, or building you a website, AGI will be able to perform a
              broad spectrum of cognitive tasks at or above human levels.
              Addressing the press this week at Nvidia’s annual GTC developer
              conference, CEO Jensen Huang appeared to be getting really bored
              of discussing the subject — not least because he finds himself
              misquoted a lot, he says.
            </p>
            <p className="my-4">
              Artificial general intelligence (AGI) — often referred to as
              “strong AI,” “full AI,” “human-level AI” or “general intelligent
              action” — represents a significant future leap in the field of
              artificial intelligence. Unlike narrow AI, which is tailored for
              specific tasks, such as detecting product flaws, summarizing the
              news, or building you a website, AGI will be able to perform a
              broad spectrum of cognitive tasks at or above human levels.
              Addressing the press this week at Nvidia’s annual GTC developer
              conference, CEO Jensen Huang appeared to be getting really bored
              of discussing the subject — not least because he finds himself
              misquoted a lot, he says.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/5">
        <h2 className="text-lg font-black Capitalize my-3">Top stories</h2>
        <Carousell />
        </div>
      </div>
    </main>
  );
}

export default Article;
