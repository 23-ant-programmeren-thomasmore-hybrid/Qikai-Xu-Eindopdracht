import { getDictionary } from "../../../dictionaries";
import { Locale } from "../../../../i18n.config";

import { Roboto_Mono, Roboto } from "next/font/google";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-label";
import { ChevronRight } from "lucide-react";

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default async function Education({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang); // nl
  return (
    <main className="p-10 px-60 bg-stone-800">
      <div className="mx-auto max-w-7xl px-12 sm:px-14 lg:px-16">
        <h1 className={`${roboto_mono.className} text-4xl text-red-900`}>
          {dict.page.education.title}
        </h1>
        <h2 className="mb-3">{dict.page.education.description}</h2>
        <p className="text-amber-100 mb-3">{dict.page.education.explanation1}</p>
        <p className="text-amber-100">{dict.page.education.explanation2}</p>
        <Tabs defaultValue="" className="lg:flex mt-4 items-center lg:items-start gap-4">
          <TabsList className="lg:grid w-[420px] md:w-[450px] lg:w-auto h-full grid-rows-5 mb-1 lg:mb-0 lg:ml-40 lg:mt-1 lg:justify-normal border-2 lg:border-0 lg:border-l-2 bg-stone-800">
            <TabsTrigger
              value="TM"
              className="w-[80px] lg:w-[175px] bg-red-800/50 hover:bg-amber-100 hover:text-stone-800 text-amber-100 focus:bg-red-800/50 focus:text-stone-800">
              TM
            </TabsTrigger>
            <TabsTrigger
              value="KdG"
              className="w-[80px] lg:w-[175px] bg-red-800/50 hover:bg-amber-100 hover:text-stone-800 text-amber-100 focus:bg-red-800/50 focus:text-stone-800">
              KdG
            </TabsTrigger>
            <TabsTrigger
              value="KTA"
              className="w-[80px] lg:w-[175px] bg-red-800/50 hover:bg-amber-100 hover:text-stone-800 text-amber-100 focus:bg-red-800/50 focus:text-stone-800">
              KTA
            </TabsTrigger>
            <TabsTrigger
              value="KTA2"
              className="w-[80px] lg:w-[175px] bg-red-800/50 hover:bg-amber-100 hover:text-stone-800 text-amber-100 focus:bg-red-800/50 focus:text-stone-800">
              KTA
            </TabsTrigger>
            <TabsTrigger
              value="OLVE"
              className="w-[80px] lg:w-[175px] bg-red-800/50 hover:bg-amber-100 hover:text-stone-800 text-amber-100 focus:bg-red-800/50 focus:text-stone-800">
              OLVE
            </TabsTrigger>
          </TabsList>
          <TabsContent value="TM">
            <Card className="w-[420px] md:w-[450px] lg:w-[550px] bg-amber-100">
              <CardHeader className="pb-3">
                <CardTitle className={`${roboto_mono.className} text-stone-800`}>{dict.page.education.study1.title}</CardTitle>
                <CardDescription className="flex flex-col">
                    <p>{dict.page.education.study1.school}</p>
                    <p>{dict.page.education.study1.year}</p>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="lg:grid grid-cols-2">
                  <div className="grid gap-1 not-italic">
                    <div className="flex flex-row">
                      <ChevronRight className="h-5 w-5 mt-0.5 text-red-900"/>
                      <p className="w-[350px] lg:w-[450px] text-stone-800">
                        {dict.page.education.study1.skill1}
                      </p>
                    </div>
                    <div className="flex flex-row">
                      <ChevronRight className="h-5 w-5 mt-0.5 text-red-900"/>
                      <p className="w-[350px] lg:w-[450px] text-stone-800">
                        {dict.page.education.study1.skill2}
                      </p>
                    </div>
                    <div className="flex flex-row">
                      <ChevronRight className="h-5 w-5 mt-0.5 text-red-900"/>
                      <p className="w-[350px] lg:w-[450px] text-stone-800">
                        {dict.page.education.study1.skill3}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="KdG">
            <Card className="w-[420px] md:w-[450px] lg:w-[550px] bg-amber-100">
              <CardHeader className="pb-3">
                <CardTitle className={`${roboto_mono.className} text-stone-800`}>{dict.page.education.study2.title}</CardTitle>
                <CardDescription className="flex flex-col">
                  <p>{dict.page.education.study2.school}</p>
                  <p>{dict.page.education.study2.year}</p>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="lg:grid grid-cols-2">
                  <div className="grid gap-1 not-italic">
                    <div className="flex flex-row">
                      <ChevronRight className="h-5 w-5 mt-0.5 text-red-900"/>
                      <p className="w-[350px] lg:w-[450px] text-stone-800">
                        {dict.page.education.study2.skill1}
                      </p>
                    </div>
                    <div className="flex flex-row">
                      <ChevronRight className="h-5 w-5 mt-0.5 text-red-900"/>
                      <p className="w-[350px] lg:w-[450px] text-stone-800">
                        {dict.page.education.study2.skill2}
                      </p>
                    </div>
                    <div className="flex flex-row">
                      <ChevronRight className="h-5 w-5 mt-0.5 text-red-900"/>
                      <p className="w-[350px] lg:w-[450px] text-stone-800">
                        {dict.page.education.study2.skill3}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="KTA">
          <Card className="w-[420px] md:w-[450px] lg:w-[550px] bg-amber-100">
              <CardHeader className="pb-3">
                <CardTitle className={`${roboto_mono.className} text-stone-800`}>{dict.page.education.study3.title}</CardTitle>
                <CardDescription className="flex flex-col">
                  <p>{dict.page.education.study3.school}</p>
                  <p>{dict.page.education.study3.year}</p>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="lg:grid grid-cols-2">
                  <div className="grid gap-1 not-italic">
                    <div className="flex flex-row">
                      <ChevronRight className="h-5 w-5 mt-0.5 text-red-900"/>
                      <p className="w-[350px] lg:w-[450px] text-stone-800">
                        {dict.page.education.study3.skill1}
                      </p>
                    </div>
                    <div className="flex flex-row">
                      <ChevronRight className="h-5 w-5 mt-0.5 text-red-900"/>
                      <p className="w-[350px] lg:w-[450px] text-stone-800">
                        {dict.page.education.study3.skill2}
                      </p>
                    </div>
                    <div className="flex flex-row">
                      <ChevronRight className="h-5 w-5 mt-0.5 text-red-900"/>
                      <p className="w-[350px] lg:w-[450px] text-stone-800">
                        {dict.page.education.study3.skill3}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="KTA2">
          <Card className="w-[420px] md:w-[450px] lg:w-[550px] bg-amber-100">
              <CardHeader className="pb-3">
                <CardTitle className={`${roboto_mono.className} text-stone-800`}>{dict.page.education.study4.title}</CardTitle>
                <CardDescription className="flex flex-col">
                  <p>{dict.page.education.study4.school}</p>
                  <p>{dict.page.education.study4.year}</p>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="lg:grid grid-cols-2">
                  <div className="grid gap-1 not-italic">
                    <div className="flex flex-row">
                      <ChevronRight className="h-5 w-5 mt-0.5 text-red-900"/>
                      <p className="w-[350px] lg:w-[450px] text-stone-800">
                        {dict.page.education.study4.skill1}
                      </p>
                    </div>
                    <div className="flex flex-row">
                      <ChevronRight className="h-5 w-5 mt-0.5 text-red-900"/>
                      <p className="w-[350px] lg:w-[450px] text-stone-800">
                        {dict.page.education.study4.skill2}
                      </p>
                    </div>
                    <div className="flex flex-row">
                      <ChevronRight className="h-5 w-5 mt-0.5 text-red-900"/>
                      <p className="w-[350px] lg:w-[450px] text-stone-800">
                        {dict.page.education.study4.skill3}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="OLVE">
          <Card className="w-[420px] md:w-[450px] lg:w-[550px] bg-amber-100">
              <CardHeader className="pb-3">
                <CardTitle className={`${roboto_mono.className} text-stone-800`}>{dict.page.education.study5.title}</CardTitle>
                <CardDescription className="flex flex-col">
                    <p>{dict.page.education.study5.school}</p>
                    <p>{dict.page.education.study5.year}</p>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="lg:grid grid-cols-2">
                  <div className="grid gap-1 not-italic">
                  <div className="flex flex-row">
                      <ChevronRight className="h-5 w-5 mt-0.5 text-red-900"/>
                      <p className="w-[350px] lg:w-[450px] text-stone-800">
                        {dict.page.education.study5.skill1}
                      </p>
                    </div>
                    <div className="flex flex-row">
                      <ChevronRight className="h-5 w-5 mt-0.5 text-red-900"/>
                      <p className="w-[350px] lg:w-[450px] text-stone-800">
                        {dict.page.education.study5.skill2}
                      </p>
                    </div>
                    <div className="flex flex-row">
                      <ChevronRight className="h-5 w-5 mt-0.5 text-red-900"/>
                      <p className="w-[350px] lg:w-[450px] text-stone-800">
                        {dict.page.education.study5.skill3}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
