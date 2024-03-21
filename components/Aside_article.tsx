import React from "react";
import { ArrowUpRightSquareIcon } from "lucide-react";
import Link from "next/link";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import moment from "moment";

interface Aside_articleProps {
  title: string;
  author: string;
  date_publication: string;
}
function Aside_article({ title, author, date_publication }: Aside_articleProps) {
  return (
    <div className="my-5">
      <Link href={`/articles/${title}`} className="block">
        <Badge className="text-slate-600">AI</Badge>
        <h3 className="font-bold text-lg">
          {title}
          <ArrowUpRightSquareIcon className="w-5 h-5 inline" />
        </h3>
      </Link>
      <Separator className="my-1" />
      <h3 className="text-sm text-slate-600"><strong>{author}</strong>, {moment(date_publication).fromNow()}</h3>
    </div>
  );
}

export default Aside_article;
