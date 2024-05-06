import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {images.map((image) => (
        <div
          key={image.id}
          className="flex h-[350px] w-[300px] flex-col border p-4"
        >
          <Link href={`/img/${image.id}`}>
          <Image
            src={image.url}
            className="h-[300px] w-[300px] border-b object-cover"
            width={300}
            height={300}
            alt={image.name}
          />
          </Link>
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
        <div className="text-2 h-full w-full text-center text-2xl">
          Please sign in above
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
