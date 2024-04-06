import Link from "next/link";
import { Locale } from "../../i18n.config";
import { getDictionary } from "../dictionaries";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Github, Linkedin, PanelLeft } from "lucide-react";

import { Roboto_Mono } from "next/font/google";

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

export default async function Footer({ lang }: { lang: Locale }) {
  const { navigation } = await getDictionary(lang);

  return (
    <main className={roboto_mono.className}>
      <div className="flex  w-full flex-col ">
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col bg-transparant sm:flex">
          <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="#"
                    className="flex rounded-lg h-24 w-10 justify-center items-center focus:bg-amber-100 focus:text-stone-800 text-amber-100 hover:text-stone-800"
                  >
                    <p className="-rotate-90 m-4 align-middle">qikai.be</p>
                  </Link>
                </TooltipTrigger>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-lg focus:bg-amber-100 focus:text-stone-800 text-amber-100 hover:text-stone-800 md:h-8 md:w-8"
                  >
                    <Github className="h-5 w-5 " />
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="left">Github</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-lg focus:bg-amber-100 focus:text-stone-800 text-amber-100 hover:text-stone-800 md:h-8 md:w-8"
                  >
                    <Linkedin className="h-5 w-5 " />
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="left">LinkedIn</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </nav>
        </aside>
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14 ">
          <header className="absolute start-0 z-30 flex h-14 items-center gap-4 bg-transparant px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  size="icon"
                  variant="destructive"
                  className="sm:hidden bg-red-800/50 offset"
                >
                  <PanelLeft className="h-5 w-5 text-amber-100" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="bottom"
                className="sm:max-w-xs w-screen h-20 bg-red-800/50 border-t-0"
              >
                <nav className="grid gap-6 text-lg font-medium ">
                  <Link
                    href="#"
                    className="absolute bottom-6 left-80 items-center gap-4 px-2.5 text-amber-100 hover:text-stone-800 focus:text-stone-800"
                  >
                    <Github className="h-5 w-5active:text-foreground" />
                  </Link>
                  <Link
                    href="#"
                    className="absolute bottom-6 right-80 items-center gap-4 px-2.5 text-amber-100 hover:text-stone-800 focus:text-stone-800"
                  >
                    <Linkedin className="h-5 w-5active:text-foreground" />
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
