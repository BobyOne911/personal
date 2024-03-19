import Image from "next/image";
function Article_single() {
  return (
    <div className="my-7 mx-auto md:w-2/7">
      <Image
        src="https://images.unsplash.com/photo-1532993680872-98b088e2cacd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width={500}
        height={300}
        className="w-full h-32 object-cover"
        alt="banner"
      />
      <h2 className="my-3 font-bold text-lg w-[90%]">Data Lake Architecture with Amazon S3 and Glue:</h2>
      <p className="text-sm">Write about designing a data lake using Amazon S3 for storage and AWS Glue for data cataloging and ETL (Extract, Transform, Load) processes.</p>
    </div>
  );
}

export default Article_single;
