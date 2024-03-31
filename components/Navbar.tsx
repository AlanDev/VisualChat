import Image from "next/image";
import Link from "next/link";
import {SignedIn, UserButton} from "@clerk/nextjs";

import MobileNav from "./MobileNav";

function Navbar() {
  return (
    <nav className=" flex-between fixed z-50 w-full rounded border-none px-6 py-4 backdrop-blur-lg lg:px-10">
      <Link className="flex items-center gap-1" href="/">
        <Image
          alt="VisualChat logo"
          className="max-sm:size-10"
          height={32}
          src="/images/camera.png"
          width={32}
        />
        <p className="text-[27px] font-extrabold text-blue-1 max-sm:hidden">VisualChat</p>
      </Link>
      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>

        <MobileNav />
      </div>
    </nav>
  );
}

export default Navbar;
