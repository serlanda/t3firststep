import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/79f2cab3-a18c-46b4-a8f7-a78e8a76a2bd-rcma58.jpg",
  "https://utfs.io/f/b4febf6e-94f8-47cb-be8f-b912a7a3fed5-rcma3p.jpg",
  "https://utfs.io/f/28954bb6-9be0-49b3-8f0c-c1d0ea48e91e-rebmcf.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  // console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url}/>
          </div>
        ))}
      </div>
    </main>
  );
}
