import Image from "next/image";
import  moment  from "moment";
function Article_single({
  title,
  author,
  date_publication,
  image,
  description,
}: simple_articles_props) {
 
  return (
    <div className="my-7 md:flex  md:gap-5 mx-auto w-full md:w-2/7">
      <div className="w-full md:w-2/5">
        <Image
          src={`https:${image}`}
          width={500}
          height={300}
          className="w-full h-32 md:w-auto md:h-full object-cover"
          alt="banner"
        />
      </div>
      <div className="w-full md:w-3/5">
        <h2 className="my-3 font-bold text-lg w-[90%]">{title}</h2>
        <p className="text-sm">{description}</p>
        <span className="block my-2 text-slate-600">
          By: <strong>{author}</strong>, {moment(date_publication).fromNow()}  
        </span>
      </div>
    </div>
  );
}

export default Article_single;
