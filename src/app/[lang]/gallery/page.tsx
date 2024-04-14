import { getDictionary } from "../../../dictionaries";
import { Locale } from "../../../../i18n.config";

import Image from "next/image";
import mountains from "/public/images/mountains.jpg";
import background2 from "/public/images/background2.jpg";
import landscape from "/public/images/landscape.png";
import sunsetting from "/public/images/gallery/IMG_0326.jpg";
import lookout from "/public/images/gallery/IMG_0387.jpg";
import vibes from "/public/images/gallery/IMG_0406.jpg";
import fisheye from "/public/images/gallery/IMG_0932.jpg";
import foodfest from "/public/images/gallery/IMG_1148.jpg";
import datenight from "/public/images/gallery/IMG_1486.jpg";
import laundryday from "/public/images/gallery/IMG_1845.jpg";
import chilling from "/public/images/gallery/IMG_4626.jpg";
import summertime from "/public/images/gallery/IMG_8785.jpg";
import bloemenmarkt from "/public/images/gallery/IMG_8926.jpg";
import attention from "/public/images/gallery/IMG_9637.jpg";
import misty from "/public/images/gallery/IMG_66731.jpg";

import { Roboto, Roboto_Mono } from "next/font/google";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default async function Gallery({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang); // nl
  return (
    <main
      className="p-10 px-60 bg-cover"
      style={{
        backgroundImage: `url(${background2.src})`,
      }}
    >
      <div className="mx-auto max-w-7xl px-12 sm:px-14 lg:px-16">
        <h1 className={`${roboto_mono.className} text-4xl text-red-900`}>
          {dict.page.gallery.title}
        </h1>
        <h2 className="mb-3">{dict.page.gallery.description}</h2>
        <p className="text-stone-800">{dict.page.gallery.explanation1}</p>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <Card className="group w-[400px] md:w-full h-1/2 m-2 lg:ml-0 hover:rounded-xl rounded-none border-0 bg-amber-100">
            <Image
              src={vibes}
              width={600}
              height={600}
              alt="Picture of the author"
              className="transition hover:rounded-xl hover:scale-110 ease-in-out"
            />
          </Card>
          <Card className="group w-[400px] md:w-full h-1/2 m-2 hover:rounded-xl rounded-none border-0 bg-amber-100">
            <Image
              src={misty}
              width={600}
              height={600}
              alt="Picture of the author"
              className="transition hover:rounded-xl hover:scale-110 ease-in-out"
            />
          </Card>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <Card className="group w-[400px] md:w-1/3 h-full m-2 lg:ml-0 hover:rounded-xl rounded-none border-0 bg-amber-100">
            <Image
              src={fisheye}
              width={600}
              height={600}
              alt="Picture of the author"
              className="transition hover:rounded-xl hover:scale-110 ease-in-out"
            />
          </Card>
          <Card className="group w-[400px] md:w-1/3 h-full m-2 hover:rounded-xl rounded-none border-0 bg-amber-100">
            <Image
              src={lookout}
              width={600}
              height={600}
              alt="Picture of the author"
              className="transition hover:rounded-xl hover:scale-110 ease-in-out"
            />
          </Card>
          <Card className="group w-[400px] md:w-1/3 h-full m-2 hover:rounded-xl rounded-none border-0 bg-amber-100">
            <Image
              src={datenight}
              width={600}
              height={600}
              alt="Picture of the author"
              className="transition hover:rounded-xl hover:scale-110 ease-in-out"
            />
          </Card>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <Card className="group w-[400px] md:w-full h-1/2 m-2 lg:ml-0 hover:rounded-xl rounded-none border-0 bg-amber-100">
            <Image
              src={attention}
              width={600}
              height={600}
              alt="Picture of the author"
              className="transition hover:rounded-xl hover:scale-110 ease-in-out"
            />
          </Card>
          <Card className="group w-[400px] md:w-full h-1/2 m-2 hover:rounded-xl rounded-none border-0 bg-amber-100">
            <Image
              src={chilling}
              width={600}
              height={600}
              alt="Picture of the author"
              className="transition hover:rounded-xl hover:scale-110 ease-in-out"
            />
          </Card>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <Card className="group w-[400px] md:w-1/3 h-full m-2 lg:ml-0 hover:rounded-xl rounded-none border-0 bg-amber-100">
            <Image
              src={foodfest}
              width={600}
              height={600}
              alt="Picture of the author"
              className="transition hover:rounded-xl hover:scale-110 ease-in-out"
            />
          </Card>
          <Card className="group w-[400px] md:w-1/3 h-full m-2 hover:rounded-xl rounded-none border-0 bg-amber-100">
            <Image
              src={bloemenmarkt}
              width={600}
              height={600}
              alt="Picture of the author"
              className="transition hover:rounded-xl hover:scale-110 ease-in-out"
            />
          </Card>
          <Card className="group w-[400px] md:w-1/3 h-full m-2 hover:rounded-xl rounded-none border-0 bg-amber-100">
            <Image
              src={laundryday}
              width={600}
              height={600}
              alt="Picture of the author"
              className="transition hover:rounded-xl hover:scale-110 ease-in-out"
            />
          </Card>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <Card className="group w-[400px] md:w-full h-1/2 m-2 lg:ml-0 hover:rounded-xl rounded-none border-0 bg-amber-100">
            <Image
              src={sunsetting}
              width={600}
              height={600}
              alt="Picture of the author"
              className="transition hover:rounded-xl hover:scale-110 ease-in-out"
            />
          </Card>
          <Card className="group w-[400px] md:w-full h-1/2 m-2 hover:rounded-xl rounded-none border-0 bg-amber-100">
            <Image
              src={summertime}
              width={600}
              height={600}
              alt="Picture of the author"
              className="transition hover:rounded-xl hover:scale-110 ease-in-out"
            />
          </Card>
        </div>
      </div>
    </main>
  );
}
