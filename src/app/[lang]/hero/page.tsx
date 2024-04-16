import { getDictionary } from "../../../dictionaries";
import { Locale } from "../../../../i18n.config";

import CustomGreeting from "@/components/custom-greeting";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Send, ChevronDown } from "lucide-react";

import { Roboto, Roboto_Mono } from "next/font/google";
import EncryptedButton from "@/components/animation/encrypt-button";

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});


export default async function Hero({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang); // nl

  //before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]
  return (
    <main className="h-auto lg:h-[64vh] py-12 xl:py-24 xl:pt-16 mt-32 sm:mt-20 lg:mt-0 bg-stone-800 rounded-xl">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8 h-[350px] sm:h-auto ">
          <div className="flex w-[600px] max-w-[800px] flex-col justify-center items-center xl:items-start mx-auto xl:mx-0 ">
            <div className={`${roboto_mono.className} text-sm uppercase font-semibold mb-10 md:mb-7 text-red-800 tracking-[4px]`}>Web Developer</div>
            <CustomGreeting/>
            {/* <p className="text-muted-foreground text-lg mb-8 font-light max-w-[490px] mx-auto xl:mx-0">{dict.page.home.description}</p> */}
            <p className="mt-6 md:mt-4 text-center xl:text-start">{dict.page.home.explanation}</p>
            <div className="flex flex-col gap-y-3 md:flex-row items-center gap-x-3 mx-auto xl:mx-0 mt-4">
              <Link href="#contact-section">
                <Button className="rounded-lg text-base bg-red-800/50 hover:bg-amber-100 hover:text-stone-800 text-amber-100 focus:bg-red-800/50 focus:text-stone-800 gap-x-2 ">Contact Me <Send size={18}></Send></Button>
              </Link>
              <EncryptedButton/>
            </div>
          </div>
         
          
        </div>
        <div className=" sm:flex absolute left-1/2 bottom-6 xl:bottom-12 animate-bounce">
        <Link href="#about-section" className="scroll-smooth"><ChevronDown className="text-3xl text-stone-800"></ChevronDown></Link>
        </div>
      </div>
    </main>

    // <main className="relative flex place-items-center ">
    //   <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
    //   <CustomGreeting/>
    //   <h1>THE START OF QIKAI`S PROJECT | 20-03-2024</h1>
    //   <h2>{dict.page.home.description}</h2>
    //     <h3>{dict.page.home.explanation}</h3>
    //     <p>{dict.page.home.howto}</p>
    //   </div>

    // </main>
  );
}
