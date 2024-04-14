import { getDictionary } from "../../../dictionaries";
import { Locale } from "../../../../i18n.config";

import mountains from "/public/images/mountains.jpg";
import landscape from "/public/images/landscape.png";
import hero from "/public/images/hero-image.jpg";
import background from "/public/images/background.jpg";
import background2 from "/public/images/background2.jpg";
import squarechat from "/public/images/squarechat.svg";

import Image from "next/image";

import { Roboto_Mono, Roboto } from "next/font/google";
import { ChevronRight } from "lucide-react";
import HoverTilt from "@/components/animation/hover-tilt";

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default async function About({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang); // nl
  return (
    <main
      className="p-10 px-60 h-screen lg:h-[640px] bg-right"
      style={{
        backgroundImage: `url(${background2.src})`,
      }}
    >
      <div className="lg:flex w-screen h-[500px] max-w-5xl px-12 sm:pl-14 lg:pl-36">
        <div className="flex-col">
          <h1 className={`${roboto_mono.className} text-4xl text-red-900`}>
            {dict.page.about.title}
          </h1>
          <h2 className="mb-3">{dict.page.about.description}</h2>
          <p className="mb-3 text-stone-800">{dict.page.about.introduction1}</p>
          <p className="mb-3 text-stone-800">{dict.page.about.introduction2}</p>
          <p className="hidden lg:flex mb-6 text-stone-800">
            {dict.page.about.introduction3}
          </p>
          <div className="hidden lg:grid grid-cols-2 gap-4">
              <div className="grid gap-0.5 not-italic ">
                <div className="flex flex-row items-center">
                  <ChevronRight className="h-5 w-5 text-red-900" />
                  <p className={`${roboto_mono.className} font-semibold text-stone-800`}>
                    JavaScript
                  </p>
                </div>
                <div className="flex flex-row items-center">
                  <ChevronRight className="h-5 w-5 text-red-900" />
                  <p className={`${roboto_mono.className} font-semibold text-stone-800`}>
                    React
                  </p>
                </div>
                <div className="flex flex-row items-center">
                  <ChevronRight className="h-5 w-5 text-red-900" />
                  <p className={`${roboto_mono.className} font-semibold text-stone-800`}>
                    HTML
                  </p>
                </div>
            </div>
            <div className="grid gap-0.5 not-italic ">
                <div className="flex flex-row items-center">
                  <ChevronRight className="h-5 w-5 text-red-900" />
                  <p className={`${roboto_mono.className} font-semibold text-stone-800`}>
                  &#40;Tailwind&#41;CSS
                  </p>
                </div>
                <div className="flex flex-row items-center">
                  <ChevronRight className="h-5 w-5 text-red-900" />
                  <p className={`${roboto_mono.className} font-semibold text-stone-800`}>
                  Node.js
                  </p>
                </div>
                <div className="flex flex-row items-center">
                  <ChevronRight className="h-5 w-5 text-red-900" />
                  <p className={`${roboto_mono.className} font-semibold text-stone-800`}>
                    Webnode
                  </p>
                </div>
            </div>
          </div>
        </div>
        <HoverTilt/>{/* 336px */}
        {/* <div className="flex-col lg:w-screen justify-center lg:justify-normal mt-5 lg:mt-0 ">
          <div className="flex lg:relative justify-center lg:justify-normal "> 
            <div className="border-0 bg-red-900 z-0 h-[230px] w-[160px] md:h-[346px] md:w-[241px] lg:h-[548px] lg:w-[363px]  bg-no-repeat absolute bottom-22 lg:-bottom-14 lg:left-28 rounded-xl"></div>
            <Image //260px
              className="transition z-10 h-[220px] md:h-[330px] lg:h-[500px] w-auto lg:relative lg:-bottom-8 lg:left-32 rounded-xl grayscale hover:grayscale-0 hover:scale-110 ease-in-out"
              src={hero}
              priority
              alt="Hero Image"
            />
          </div>
        </div> */}
      </div>
    </main>
  );
}
