import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Topnav() {
    return (
      <nav className="flex items-center justify-between w-full p-4 text-xl font-semibold border-b bg-black">
        <div>Gallery</div>

        <div>
            <SignedOut>
                <SignInButton/>
            </SignedOut>
            <SignedIn>
                <UserButton/>
            </SignedIn>
        </div>
      </nav>
    )
  }