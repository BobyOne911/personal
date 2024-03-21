import client from "@/contentful"

export default async function topArticles(){
    const top = await client.getEntries({
        content_type: "blogPost",
        order: "-sys.createdAt",
        limit: 3,
        "fields.top": true,
      })

      return top;
}

