import Link from "next/link";
import { Locale } from "../../i18n.config";
import { getDictionary } from "../dictionaries";
import CustomLink from "./custom-link";
import LocaleSwitcher from "./locale-switcher";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  BookImage,
  BookMarked,
  BookOpenText,
  BookText,
  FolderOpen,
  Home,
  PackageOpen,
  PanelRight,
  Settings,
  User2
} from "lucide-react";

import { Roboto_Mono } from 'next/font/google';

export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})

export default async function Header({ lang }: { lang: Locale }) {
  const { navigation } = await getDictionary(lang);

  return (
    // <header className='py-6'>
    //   <nav className='container flex items-center justify-between'>
    //     <ul className='flex gap-x-8'>
    //       <li>
    //         <CustomLink href='/' lang={lang}>{navigation.home}</CustomLink>
    //       </li>
    //       <li>
    //         <CustomLink href='/about' lang={lang}>{navigation.about}</CustomLink>
    //       </li>
    //       <li>
    //       <CustomLink href="#about-section" lang={lang}>My first section</CustomLink>
    //       </li>
    //       <li>
    //       <CustomLink href="#projects-section" lang={lang}>My second section</CustomLink>
    //       </li>
    //       <li>
    //       <CustomLink href="#gallery-section" lang={lang}>My second section</CustomLink>
    //       </li>
    //     </ul>
    //     
    //   </nav>
    // </header>
    <main className={roboto_mono.className}>
      <div className="flex  w-full flex-col ">
        <aside className="fixed inset-y-0 right-0 z-10 hidden w-14 flex-col border-r bg-red-800/50 sm:flex">
          <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
            <CustomLink
              href="/"
              lang={lang}
              className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-stone-800 text-lg font-semibold text-amber-100 md:h-8 md:w-8 md:text-base"
            >
              <Home className="h-5 w-5 transition-all group-hover:scale-110" />
              <span className="sr-only">{navigation.home}</span>
            </CustomLink>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                <CustomLink
                    href="/about"
                    lang={lang}
                    className="flex h-9 w-9 items-center justify-center rounded-lg focus:bg-amber-100 focus:text-stone-800 text-amber-100 hover:text-stone-800 md:h-8 md:w-8"
                  >
                    <User2 className="h-5 w-5" />
                    <span className="sr-only">{navigation.about}</span>
                  </CustomLink>
                </TooltipTrigger>
                <TooltipContent side="right">{navigation.about}</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                <CustomLink
                    href="#education-section"
                    lang={lang}
                    className="flex h-9 w-9 items-center justify-center rounded-lg focus:bg-amber-100 focus:text-stone-800 text-amber-100 hover:text-stone-800 md:h-8 md:w-8"
                  >
                    <BookMarked className="h-5 w-5" />
                    <span className="sr-only">{navigation.education}</span>
                  </CustomLink>
                </TooltipTrigger>
                <TooltipContent side="right">{navigation.education}</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <CustomLink
                    href="#projects-section"
                    lang={lang}
                    className="flex h-9 w-9 items-center justify-center rounded-lg focus:bg-amber-100 focus:text-stone-800 text-amber-100 hover:text-stone-800 md:h-8 md:w-8"
                  >
                    <FolderOpen className="h-5 w-5" />
                    <span className="sr-only">{navigation.projects}</span>
                  </CustomLink>
                </TooltipTrigger>
                <TooltipContent side="right">{navigation.projects}</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <CustomLink
                    href="#gallery-section"
                    lang={lang}
                    className="flex h-9 w-9 items-center justify-center rounded-lg focus:bg-amber-100 focus:text-stone-800 text-amber-100 hover:text-stone-800 md:h-8 md:w-8"
                  >
                    <BookImage className="h-5 w-5" />
                    <span className="sr-only">{navigation.gallery}</span>
                  </CustomLink>
                </TooltipTrigger>
                <TooltipContent side="right">{navigation.gallery}</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                <CustomLink
                    href="#other-section"
                    lang={lang}
                    className="flex h-9 w-9 items-center justify-center rounded-lg focus:bg-amber-100 focus:text-stone-800 text-amber-100 hover:text-stone-800 md:h-8 md:w-8"
                  >
                    <PackageOpen className="h-5 w-5" />
                    <span className="sr-only">{navigation.others}</span>
                  </CustomLink>
                </TooltipTrigger>
                <TooltipContent side="right">{navigation.others}</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                <CustomLink
                    href="#contact-section"
                    lang={lang}
                    className="flex h-9 w-9 items-center justify-center rounded-lg focus:bg-amber-100 focus:text-stone-800 text-amber-100 hover:text-stone-800 md:h-8 md:w-8"
                  >
                    <BookText className="h-5 w-5" />
                    <span className="sr-only">{navigation.contact}</span>
                  </CustomLink>
                </TooltipTrigger>
                <TooltipContent side="right">{navigation.contact}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </nav>
          <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-lg  focus:bg-amber-100 focus:text-stone-800 text-amber-100 hover:text-stone-800 md:h-8 md:w-8"
                  >
                    <Settings className="h-5 w-5 " />
                    <span className="sr-only">{navigation.settings}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">{navigation.settings}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </nav>
        </aside>
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14 ">
          <header className="absolute end-0 z-30 flex h-14 items-center gap-4 bg-transparant px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <div className="absolute right-16 top-4 sm:top-6">
          <LocaleSwitcher />
        </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  size="icon"
                  variant="destructive"
                  className="sm:hidden bg-red-800/50 offset"
                >
                  <PanelRight className="h-5 w-5 text-amber-100" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="sm:max-w-xs w-1/2 bg-red-800/50 border-l-0">
                <nav className="grid gap-6 text-lg font-medium">
                  <CustomLink
                    href="/"
                    lang={lang}
                    className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-stone-800 text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
                  >
                    <Home className="h-5 w-5 transition-all group-hover:scale-110 text-amber-100" />
                    <span className="sr-only">{navigation.home}</span>
                  </CustomLink>
                  <CustomLink
                    href="#about-section"
                    lang={lang}
                    className="flex items-center gap-4 px-2.5 text-amber-100 hover:text-stone-800 focus:text-stone-800"
                  >
                    <User2 className="h-5 w-5 active:text-foreground" />
                    <p className={roboto_mono.className}>{navigation.about}</p>
                  </CustomLink>
                  <CustomLink
                    href="#about-section"
                    lang={lang}
                    className="flex items-center gap-4 px-2.5 text-amber-100 hover:text-stone-800 focus:text-stone-800"
                  >
                    <BookMarked className="h-5 w-5 active:text-foreground" />
                    <p className={roboto_mono.className}>{navigation.education}</p>
                  </CustomLink>
                  <CustomLink
                    href="#projects-section"
                    lang={lang}
                    className="flex items-center gap-4 px-2.5 text-amber-100 hover:text-stone-800 focus:text-stone-800"
                  >
                    <FolderOpen className="h-5 w-5 active:text-foreground" />
                    <p className={roboto_mono.className}>{navigation.projects}</p>
                  </CustomLink>
                  <CustomLink
                    href="#gallery-section"
                    lang={lang}
                    className="flex items-center gap-4 px-2.5 text-amber-100 hover:text-stone-800 focus:text-stone-800"
                  >
                    <BookImage className="h-5 w-5 active:text-foreground" />
                    <p className={roboto_mono.className}>{navigation.gallery}</p>
                  </CustomLink>
                  <CustomLink
                    href="#other-section"
                    lang={lang}
                    className="flex items-center gap-4 px-2.5 text-amber-100 hover:text-stone-800 focus:text-stone-800"
                  >
                    <PackageOpen className="h-5 w-5 active:text-foreground" />
                    <p className={roboto_mono.className}>{navigation.others}</p>
                  </CustomLink>
                  <CustomLink
                    href="#contact-section"
                    lang={lang}
                    className="flex items-center gap-4 px-2.5  text-amber-100 hover:text-stone-800 focus:text-stone-800"
                  >
                    <BookText className="h-5 w-5 active:text-foreground" />
                    <p className={roboto_mono.className}>{navigation.contact}</p>
                  </CustomLink>
      
                  <Link
                    href="#"
                    className="absolute bottom-6 flex items-center gap-4 px-2.5 text-amber-100 hover:text-stone-800 focus:text-stone-800"
                  >
                    <Settings className="h-5 w-5 active:text-foreground" />
                    <p className={roboto_mono.className}>Settings</p>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
            {/* <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="overflow-hidden rounded-full"
                >
                  <Image
                    src=""
                    width={36}
                    height={36}
                    alt="Avatar"
                    className="overflow-hidden"
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu> */}
          </header>
        </div>
      </div>
    </main>
  );
}
