import { getDictionary } from "../../../dictionaries";
import { Locale } from "../../../../i18n.config";

import * as React from "react";
import landscape from "/public/images/landscape.png";
import mountains from "/public/images/mountains.jpg";
import background2 from "/public/images/background2.jpg";
import smak from "/public/images/smak.png";
import frituursnack from "/public/images/frituursnack.png";

import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {ExternalLink, Github} from "lucide-react";

import { Roboto_Mono, Roboto} from 'next/font/google';

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default async function Projects({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang); // nl
  return (
    <main
      className="p-10 px-60 bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${background2.src})`,
      }}
    >
      <div className="mx-auto max-w-7xl px-12 sm:px-14 lg:px-16">
        <h1 className={`${roboto_mono.className} text-4xl text-red-900`}>
          {dict.page.projects.title}
        </h1>
        <h2 className="mb-3">
          {dict.page.projects.description}
        </h2>
        <p className="text-stone-800">{dict.page.projects.explanation1}</p>
        <div className="flex group justify-center hover:scale-110 ">
          <div
            className=" lg:hidden m-2 my-4"
            style={{
              backgroundImage: `url(${smak.src})`,
            }}
          >
            <Card className="transition ease-in-out w-[400px] md:w-[450px] xl:w-[500px] h-auto md:h-[300px] xl:h-[350px]  lg:ml-0 rounded-none border-0 bg-amber-100 opacity-90">
              <CardHeader>
                <div className="flex justify-between text-stone-800 group-hover:text-red-900">
                  <CardTitle
                    className={`${roboto_mono.className} transition group-hover:scale-110 group-hover:translate-x-2 ease-in-out m-0 p-2 px-0`}
                  >
                    {dict.page.projects.project1.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pb-3">
                <CardDescription className="text-base font-normal	text-stone-800">
                  {dict.page.projects.project1.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-around pb-0">
                <CardDescription className="flex-auto text-xs text-stone-400">
                  Spring
                </CardDescription>
                <CardDescription className="flex-auto text-xs text-stone-400">
                  Java
                </CardDescription>
                <CardDescription className="flex-auto text-xs text-stone-400">
                  Firebase
                </CardDescription>
                <CardDescription className="flex-auto text-xs text-stone-400">
                  JavaScript
                </CardDescription>
                <CardDescription className="flex-auto text-xs text-stone-400">
                  CSS
                </CardDescription>
                <CardDescription className="flex-auto text-xs text-stone-400">
                  Bootstrap
                </CardDescription>
              </CardFooter>
              <div className="pl-6 pt-4 pb-2 flex flex-row">
                <a href="https://github.com/22-project-programmeren-thomasmore/Snapping-S.M.A.K.">
                  <Github className="m-0 p-2 pl-0 h-10 w-10 transition-transform group-hover:scale-110 hover:text-red-900 motion-reduce:transform-none"/>
                </a>
                <a href="https://snapping-smak.onrender.com/">
                  <ExternalLink className="m-0 p-2 h-10 w-10 transition-transform group-hover:scale-110 hover:text-red-900 motion-reduce:transform-none"/>
                </a>
              </div>
            </Card>
          </div>
        </div>
        <div className="flex group justify-center hover:scale-110">
          <div
            className=" lg:hidden m-2 my-4"
            style={{
              backgroundImage: `url(${frituursnack.src})`,
            }}
          >
            <Card className="transition ease-in-out w-[400px] md:w-[450px] xl:w-[500px] h-auto md:h-[300px] xl:h-[350px] lg:ml-0 rounded-none border-0 bg-amber-100 opacity-90">
              <CardHeader>
                <div className="flex justify-between text-stone-800 group-hover:text-red-900">
                  <CardTitle
                    className={`${roboto_mono.className} transition group-hover:scale-110 group-hover:translate-x-2 ease-in-out m-0 p-2 px-0`}
                  >
                    {dict.page.projects.project2.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pb-3">
                <CardDescription className="text-base font-normal	text-stone-800">
                  {dict.page.projects.project2.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-around pb-0">
                <CardDescription className="flex-auto text-xs text-stone-400">
                  Spring
                </CardDescription>
                <CardDescription className="flex-auto text-xs text-stone-400">
                  Java
                </CardDescription>
                <CardDescription className="flex-auto text-xs text-stone-400">
                  Firebase
                </CardDescription>
                <CardDescription className="flex-auto text-xs text-stone-400">
                  JavaScript
                </CardDescription>
                <CardDescription className="flex-auto text-xs text-stone-400">
                  CSS
                </CardDescription>
                <CardDescription className="flex-auto text-xs text-stone-400">
                  Bootstrap
                </CardDescription>
              </CardFooter>
              <div className="pl-6 pt-4 pb-2 flex flex-row">
              <a href="https://github.com/xQikai/frituur-snack">
                  <Github className="m-0 p-2 pl-0 h-10 w-10 transition-transform group-hover:scale-110 hover:text-red-900 motion-reduce:transform-none"/>
                </a>
                <a href="https://frituur-snack.onrender.com/">
                  <ExternalLink className="m-0 p-2 h-10 w-10 transition-transform group-hover:scale-110 hover:text-red-900 motion-reduce:transform-none"/>
                </a>
              </div>
            </Card>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between mb-6">
          <div className="hidden lg:flex flex-row -space-x-32 items-center">
            <Card className="group transition hover:scale-110 ease-in-out z-10 w-[400px] md:w-[450px] xl:w-[500px] h-[200px] md:h-[250px] xl:h-[300px] m-2 lg:ml-0 rounded-none hover:rounded-xl border-0 bg-amber-100 opacity-90">
              <CardHeader>
                <div className="flex justify-between text-stone-800 group-hover:text-red-900">
                  <CardTitle
                    className={`${roboto_mono.className} transition group-hover:scale-110 group-hover:translate-x-2 ease-in-out m-0 p-2 px-0`}
                  >
                    {dict.page.projects.project1.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pb-3">
                <CardDescription className="text-base font-normal	text-stone-800">
                  {dict.page.projects.project1.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-around pb-0">
                <CardDescription className="flex-auto text-xs text-stone-400">
                  Spring
                </CardDescription>
                <CardDescription className="flex-auto text-xs text-stone-400">
                  Java
                </CardDescription>
                <CardDescription className="flex-auto text-xs text-stone-400">
                  Firebase
                </CardDescription>
                <CardDescription className="flex-auto text-xs text-stone-400">
                  JavaScript
                </CardDescription>
                <CardDescription className="flex-auto text-xs text-stone-400">
                  CSS
                </CardDescription>
                <CardDescription className="flex-auto text-xs text-stone-400">
                  Bootstrap
                </CardDescription>
              </CardFooter>
              <div className="pl-6 pt-4 flex flex-row">
                <a href="https://github.com/22-project-programmeren-thomasmore/Snapping-S.M.A.K.">
                  <Github className="m-0 p-2 pl-0 h-10 w-10 transition-transform group-hover:scale-110 hover:text-red-900 motion-reduce:transform-none"/>
                </a>
                <a href="https://snapping-smak.onrender.com/">
                  <ExternalLink className="m-0 p-2 h-10 w-10 transition-transform group-hover:scale-110 hover:text-red-900 motion-reduce:transform-none"/>
                </a>
              </div>
            </Card>
            <Card
              style={{
                backgroundImage: `url(${smak.src})`,
              }}
              className="rounded-none grayscale hover:grayscale-0 hover:rounded-xl ease-in-out border-0"
            >
              <a href="https://snapping-smak.onrender.com/">
                <Image
                  className="w-[750px] h-full rounded-none grayscale hover:grayscale-0 hover:rounded-xl ease-in-out "
                  src={smak}
                  priority
                  alt="Project Image"
                />
              </a>
            </Card>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between mt-6">
          <div className="hidden lg:flex flex-row -space-x-32 items-center">
            <Card
              style={{
                backgroundImage: `url(${frituursnack.src})`,
              }}
              className="rounded-none grayscale hover:grayscale-0 hover:rounded-xl ease-in-out border-0"
            >
              <a href="https://frituur-snack.onrender.com/">
                <Image
                  className="w-[750px] rounded-none grayscale hover:grayscale-0 hover:rounded-xl ease-in-out "
                  src={frituursnack}
                  priority
                  alt="Project Image"
                />
              </a>
            </Card>
            <Card className="group transition hover:scale-110 ease-in-out z-10 w-[400px] md:w-[450px] xl:w-[500px] h-[200px] md:h-[250px] xl:h-[300px] m-2 lg:mr-0 rounded-none hover:rounded-xl border-0 bg-amber-100 opacity-90">
              <CardHeader>
                <div className="flex justify-between text-stone-800 group-hover:text-red-900">
                  <CardTitle
                    className={`${roboto_mono.className} transition group-hover:scale-110 group-hover:translate-x-2 ease-in-out m-0 p-2 px-0`}
                  >
                    {dict.page.projects.project2.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pb-3">
                <CardDescription className="text-base font-normal	text-stone-800">
                  {dict.page.projects.project2.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-around pb-0">
                <CardDescription className="flex-auto text-xs text-stone-400">
                  Spring
                </CardDescription>
                <CardDescription className="flex-auto text-xs text-stone-400">
                  Java
                </CardDescription>
                <CardDescription className="flex-auto text-xs text-stone-400">
                  Firebase
                </CardDescription>
                <CardDescription className="flex-auto text-xs text-stone-400">
                  JavaScript
                </CardDescription>
                <CardDescription className="flex-auto text-xs text-stone-400">
                  CSS
                </CardDescription>
                <CardDescription className="flex-auto text-xs text-stone-400">
                  Bootstrap
                </CardDescription>
              </CardFooter>
              <div className="pl-6 pt-4 flex flex-row">
                <a href="https://github.com/xQikai/frituur-snack">
                  <Github className="m-0 p-2 pl-0 h-10 w-10 transition-transform group-hover:scale-110 hover:text-red-900 motion-reduce:transform-none"/>
                </a>
                <a href="https://frituur-snack.onrender.com/">
                  <ExternalLink className="m-0 p-2 h-10 w-10 transition-transform group-hover:scale-110 hover:text-red-900 motion-reduce:transform-none"/>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
