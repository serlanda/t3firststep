"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";

export default function Topnav() {
  const router = useRouter();

    return (
      <nav className="flex items-center justify-between w-full p-4 text-xl font-semibold border-b bg-black">
        <div>Gallery</div>

        <div className="flex flex-row">
            <SignedOut>
                <SignInButton/>
            </SignedOut>
            <SignedIn>
              <UploadButton endpoint="imageUploader" onClientUploadComplete={() => {
                router.refresh();
              }}/>
                <UserButton/>
            </SignedIn>
        </div>
      </nav>
    )
  }