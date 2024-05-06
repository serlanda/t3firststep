import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {

  const images = await getMyImages();

  return (
    <div className="flex flex-wrap justify-center items-center gap-4">
      {images.map((image) => (
        <div key={image.id} className="flex w-[300px] h-[350px] flex-col p-4 border">
          <Image src={image.url} className="w-[300px] h-[300px] object-cover border-b" width={300} height={300} alt={image.name}/>
          <div className="">{image.name}</div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {

  return (
    <main className="">
      <SignedOut>
        <div className="text-2 h-full w-full text-2xl text-center">Please sign in above</div>
      </SignedOut>
      <SignedIn>
        <Images/>
      </SignedIn>
    </main>
  );
}