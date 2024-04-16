import { getDictionary } from "../../../dictionaries";
import { Locale } from "../../../../i18n.config";

import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

import { Roboto_Mono, Roboto  } from 'next/font/google';

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default async function Other({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang); // nl
  return (
    <main className="p-10 px-60 bg-stone-800">
      <div className="mx-auto max-w-7xl px-12 sm:px-14 lg:px-16">
        <h1 className={`${roboto_mono.className} text-4xl text-red-900`}>
          {dict.page.other.title}
        </h1>
        <h2 className="mb-3">{dict.page.other.description}</h2>
        <p className="text-amber-100">{dict.page.other.explanation1}</p>
        <div className="flex flex-col lg:flex-row mt-4 items-center justify-between ">
          <Card className="group w-[400px] md:w-[450px] xl:w-[400px] h-[245px] xl:h-[270px] m-2 lg:ml-0 transition hover:scale-110 hover:rounded-xl ease-in-out rounded-none border-0 bg-amber-100">
            <CardHeader>
              <div className="flex justify-between text-stone-800 group-hover:text-red-900">
                <div>
                  <CardTitle
                    className={`${roboto_mono.className} m-0 p-2 px-0 transition group-hover:scale-110 ease-in-out`}
                  >
                    {dict.page.other.project1.title}
                  </CardTitle>
                  <CardDescription>
                    {dict.page.other.project1.subject}
                  </CardDescription>
                </div>
                <a href="https://qikai.be/" target="_blank">
                  <ExternalLink className="m-0 p-2 pr-0 h-10 w-10 transition-transform group-hover:translate-x-2 group-hover:-translate-y-2 motion-reduce:transform-none"/>
                </a>
              </div>
            </CardHeader>
            <CardContent className="text-base font-normal	text-stone-800">
              {dict.page.other.project1.description}
            </CardContent>
            <CardFooter className="flex justify-around">
              <CardDescription className="flex-auto text-xs text-stone-400">
              {dict.page.other.project1.language1}
              </CardDescription>
              <CardDescription className="flex-auto text-xs text-stone-400">
              {dict.page.other.project1.language2}
              </CardDescription>
              <CardDescription className="flex-auto text-xs text-stone-400">
              {dict.page.other.project1.language3}
              </CardDescription>
            </CardFooter>
          </Card>
        <Card className="group w-[400px] md:w-[450px] xl:w-[400px] h-[245px] xl:h-[270px] m-2 transition hover:scale-110 hover:rounded-xl ease-in-out rounded-none border-0 bg-amber-100">
            <CardHeader>
              <div className="flex justify-between text-stone-800 group-hover:text-red-900">
              <div>
                  <CardTitle
                    className={`${roboto_mono.className} m-0 p-2 px-0 transition group-hover:scale-110 ease-in-out`}
                  >
                    {dict.page.other.project2.title}
                  </CardTitle>
                  <CardDescription>
                    {dict.page.other.project2.subject}
                  </CardDescription>
                </div>
                <a href="https://qikai.be/hobby" target="_blank">
                  <ExternalLink className="m-0 p-2 pr-0 h-10 w-10 transition-transform group-hover:translate-x-2 group-hover:-translate-y-2 motion-reduce:transform-none" />
                </a>
              </div>
            </CardHeader>
            <CardContent className="text-base font-normal	text-stone-800">
              {dict.page.other.project2.description}
            </CardContent>
            <CardFooter className="flex justify-around">
              <CardDescription className="flex-auto text-xs text-stone-400">
                {dict.page.other.project2.language1}
              </CardDescription>
              <CardDescription className="flex-auto text-xs text-stone-400">
                {dict.page.other.project2.language2}
              </CardDescription>
              <CardDescription className="flex-auto text-xs text-stone-400">
                {dict.page.other.project2.language3}
              </CardDescription>
            </CardFooter>
          </Card>
          <Card className="group w-[400px] md:w-[450px] xl:w-[400px] h-[245px] xl:h-[270px] m-2 lg:mr-0 transition hover:scale-110 hover:rounded-xl ease-in-out rounded-none border-0 bg-amber-100">
            <CardHeader>
            <div className="flex justify-between text-stone-800 group-hover:text-red-900">
                <div>
                  <CardTitle
                    className={`${roboto_mono.className} m-0 p-2 px-0 transition group-hover:scale-110 ease-in-out`}
                  >
                    {dict.page.other.project3.title}
                  </CardTitle>
                  <CardDescription>
                    {dict.page.other.project3.subject}
                  </CardDescription>
                </div>
                <ExternalLink className="m-0 p-2 pr-0 h-10 w-10 transition-transform group-hover:translate-x-2 group-hover:-translate-y-2 motion-reduce:transform-none" />
              </div>
            </CardHeader>
            <CardContent className="text-base font-normal	text-stone-800">
              {dict.page.other.project3.description}
            </CardContent>
            <CardFooter className="flex justify-around">
              <CardDescription className="flex-auto text-xs text-stone-400">
                {dict.page.other.project3.language1}
              </CardDescription>
              <CardDescription className="flex-auto text-xs text-stone-400">
                {dict.page.other.project3.language2}
              </CardDescription>
              <CardDescription className="flex-auto text-xs text-stone-400">
                {dict.page.other.project3.language3}
              </CardDescription>
            </CardFooter>
          </Card>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <Card className="group w-[400px] md:w-[450px] xl:w-[400px] h-[245px] xl:h-[270px] m-2 lg:ml-0 transition hover:scale-110 hover:rounded-xl ease-in-out rounded-none border-0 bg-amber-100">
            <CardHeader>
              <div className="flex justify-between text-stone-800 group-hover:text-red-900">
                <div>
                  <CardTitle
                    className={`${roboto_mono.className} m-0 p-2 px-0 transition group-hover:scale-110 ease-in-out`}
                  >
                    {dict.page.other.project4.title}
                  </CardTitle>
                  <CardDescription>
                    {dict.page.other.project4.subject}
                  </CardDescription>
                </div>
                <a href="https://qikai-xu.webnode.nl/" target="_blank">
                  <ExternalLink className="m-0 p-2 pr-0 h-10 w-10 transition-transform group-hover:translate-x-2 group-hover:-translate-y-2 motion-reduce:transform-none"/>
                </a>
              </div>
            </CardHeader>
            <CardContent className="text-base font-normal	text-stone-800">
              {dict.page.other.project4.description}
            </CardContent>
            <CardFooter className="flex justify-around">
              <CardDescription className="flex-auto text-xs text-stone-400">
                {dict.page.other.project4.language1}
              </CardDescription>
              <CardDescription className="flex-auto text-xs text-stone-400">
                {dict.page.other.project4.language2}
              </CardDescription>
              <CardDescription className="flex-auto text-xs text-stone-400">
                {dict.page.other.project4.language3}
              </CardDescription>
            </CardFooter>
          </Card>
          <Card className="group w-[400px] md:w-[450px] xl:w-[400px] h-[245px] xl:h-[270px] m-2 transition hover:scale-110 hover:rounded-xl ease-in-out rounded-none border-0 bg-amber-100">
            <CardHeader>
              <div className="flex justify-between text-stone-800 group-hover:text-red-900">
                <div>
                  <CardTitle
                    className={`${roboto_mono.className} m-0 p-2 px-0 transition group-hover:scale-110 ease-in-out`}
                  >
                    {dict.page.other.project5.title}
                  </CardTitle>
                  <CardDescription>
                    {dict.page.other.project5.subject}
                  </CardDescription>
                </div>
                <a href="https://civilization-2-food-drinks.webnode.nl/" target="_blank">
                  <ExternalLink className="m-0 p-2 pr-0 h-10 w-10 transition-transform group-hover:translate-x-2 group-hover:-translate-y-2 motion-reduce:transform-none"/>
                </a>
              </div>
            </CardHeader>
            <CardContent className="text-base font-normal	text-stone-800">
              {dict.page.other.project5.description}
            </CardContent>
            <CardFooter className="flex justify-around">
              <CardDescription className="flex-auto text-xs text-stone-400">
              {dict.page.other.project5.language1}
              </CardDescription>
              <CardDescription className="flex-auto text-xs text-stone-400">
              {dict.page.other.project5.language2}
              </CardDescription>
              <CardDescription className="flex-auto text-xs text-stone-400">
              {dict.page.other.project5.language3}
              </CardDescription>
            </CardFooter>
          </Card>
          <Card className="group w-[400px] md:w-[450px] xl:w-[400px] h-[245px] xl:h-[270px] m-2 lg:mr-0 transition hover:scale-110 hover:rounded-xl ease-in-out rounded-none border-0 bg-amber-100">
            <CardHeader>
              <div className="flex justify-between text-stone-800 group-hover:text-red-900">
                <div>
                  <CardTitle
                    className={`${roboto_mono.className} m-0 p-2 px-0 transition group-hover:scale-110 ease-in-out `}
                  >
                    {dict.page.other.project6.title}
                  </CardTitle>
                  <CardDescription>
                    {dict.page.other.project6.subject}
                  </CardDescription>
                </div>
                <a href="https://toekomstig-budgetteren.webnode.be/" target="_blank">
                  <ExternalLink className="m-0 p-2 pr-0 h-10 w-10 transition-transform group-hover:translate-x-2 group-hover:-translate-y-2 motion-reduce:transform-none"/>
                </a>
              </div>
            </CardHeader>
            <CardContent className="text-base font-normal 	text-stone-800">
              {dict.page.other.project6.description}
            </CardContent>
            <CardFooter className="flex justify-around">
              <CardDescription className="flex-auto text-xs text-stone-400">
                {dict.page.other.project6.language1}
              </CardDescription>
              <CardDescription className="flex-auto text-xs text-stone-400">
                {dict.page.other.project6.language2}
              </CardDescription>
              <CardDescription className="flex-auto text-xs text-stone-400">
                {dict.page.other.project6.language3}
              </CardDescription>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  );
}
