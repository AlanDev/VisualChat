'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger asChild>
          <svg
            className="icon icon-tabler  icons-tabler-outline icon-tabler-menu-2 cursor-pointer text-blue-1 sm:hidden"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none" stroke="none" />
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
          </svg>
        </SheetTrigger>
        <SheetContent className="border-none  " side="left">
          <Link className="flex items-center gap-1" href="/">
            <Image alt="VisualChat logo" height={32} src="/images/camera.png" width={32} />
            <p className="text-[26px] font-extrabold text-blue-1">VisualChat</p>
          </Link>
          <div className="flex h-[calc(100vh-72px)] flex-col  justify-between overflow-y-auto">
            <SheetClose asChild>
              <section className=" flex h-full flex-col gap-6 pt-16 text-blue-1">
                {sidebarLinks.map((item) => {
                  const isActive = pathname === item.route;

                  return (
                    <SheetClose key={item.route} asChild >
                      <Link
                        key={item.label}
                        className={cn("flex w-full max-w-60 items-center gap-4 rounded-lg p-4", {
                          "bg-blue-1": isActive,
                          'text-white':isActive,
                        })}
                        href={item.route}
                      >
                        <Image alt={item.label} height={20} src={item.imgURL} width={20} />
                        <p className="font-semibold">{item.label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
