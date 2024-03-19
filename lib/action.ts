import client from "@/contentful";

export default async function getArticles() {
  const contentTypeId = "blogPost"; // Replace with actual ID

  const data = await client.getEntries({
    content_type: contentTypeId,
  });
  return data;
}
