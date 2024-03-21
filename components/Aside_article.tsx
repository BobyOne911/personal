import React from "react";
import { ArrowUpRightSquareIcon } from "lucide-react";
import Link from "next/link";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";

function Aside_article() {
  return (
    <div className="my-5">
      <Link href="/" className="block">
        <Badge className="text-slate-600">AI</Badge>
        <h3 className="font-bold">
          Apple’s AI ambitions could include Google or OpenAI{" "}
          <ArrowUpRightSquareIcon className="w-5 h-5 inline" />
        </h3>
      </Link>
      <Separator />
      <h3>Lentzy R Philias, 03/20/2024</h3>
    </div>
  );
}

export default Aside_article;
