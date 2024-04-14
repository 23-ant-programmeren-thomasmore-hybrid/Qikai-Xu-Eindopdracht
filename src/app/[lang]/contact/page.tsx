import { Input } from "@/components/ui/input";
import { getDictionary } from "@/dictionaries";
import { Locale } from "../../../../i18n.config";
import { Label } from "@/components/ui/label";
import { LoaderCircle } from "lucide-react";


import { Roboto_Mono, Roboto } from "next/font/google";
import EmailForm from "@/components/email-form";

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const onSubmit = () => {};

export default async function Contact({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang); // nl
  

  return (
    <main className="p-10 px-60">
      <div className="mx-auto max-w-7xl px-12 sm:px-14 lg:px-16">
        <h1 className={`${roboto_mono.className} text-4xl text-red-900`}>
          {dict.page.contact.title}
        </h1>
        <h2 className="mb-3">{dict.page.contact.description}</h2>
        <p className="text-amber-100">{dict.page.contact.explanation1}</p>
          <EmailForm params={{
          lang: lang
        }}/>
      </div>
    </main>
  );
}
