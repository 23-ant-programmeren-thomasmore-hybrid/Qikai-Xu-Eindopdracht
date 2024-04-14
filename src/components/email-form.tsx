import { getDictionary } from "@/dictionaries";
import { Locale } from "../../i18n.config";
import {EmailTemplate} from "../components/email-template";
import { Resend } from "resend";

const resend = new Resend("re_4VqX3hhG_M5p9PEurN5KbtwpcDujznJpj");

async function send(formData: FormData) {
    'use server'
    const userName = formData.get("userName") as string
    const email = formData.get("email") as string
    const message = formData.get("message") as string
    
    const resend = new Resend(process.env.RESEND_API_KEY);
    const data = await resend.emails.send({
        from: 'Portfolio <noreply@qikai.be>',
        to: 'r0953902@student.thomasmore.be',
        subject: 'Hello world',
        html: "",
        react: EmailTemplate({userName, email, message}),
      });
    console.log(userName, email, message, data)
}
export default async function EmailForm({
    params: { lang },
  }: {
    params: { lang: Locale };
  }) {
    const dict = await getDictionary(lang); // nl
  return (
    <main className="flex lg:flex-col items-center mx-auto mt-4 bg-stone-800 rounded-xl w-full md:w-[450px] lg:w-[750px]">
    <form className="flex flex-col items-center w-full p-6 gap-4" action={send}>
      <div className="flex flex-col lg:flex-row justify-center w-[350px] lg:w-[600px]">
        <div>
            <label
              htmlFor="userName"
              className="block items-start text-sm font-medium leading-6 "
            >
              {dict.page.contact.username}
            </label>
            <div className="flex w-[350px] ring-red-800/50">
              <input
                type="text"
                name="userName"
                id="userName"
                className="block flex-1 rounded-md border-0 bg-amber-100 py-1.5 pl-2 lg:mr-4 text-gray-900 focus:ring-2 focus:ring-inset focus:ring-red-800 sm:text-sm sm:leading-6"
              />
            </div>
            <label htmlFor="email" className="block mt-3 text-sm font-medium leading-6">
            {dict.page.contact.email}
            </label>
            <div className="flex w-[350px] ring-red-800/50">
              <input
                id="email"
                name="email"
                type="email"
                className="block flex-1 rounded-md border-0 bg-amber-100 py-1.5 pl-2 lg:mr-4 text-gray-900 focus:ring-2 focus:ring-inset focus:ring-red-800 sm:text-sm sm:leading-6"
              />
            </div>
        </div>

        <div>
            <label
              htmlFor="message"
              className="flex w-[350px] mt-3 lg:mt-0 text-sm font-medium leading-6"
            >
              {dict.page.contact.message}
            </label>
            <textarea
              className="block w-full rounded-md border-0 bg-amber-100 py-1.5 pl-2 text-gray-900 focus:ring-2 focus:ring-inset focus:ring-red-800 sm:text-sm sm:leading-6"
              name="message"
              id="message"
              cols={30}
              rows={10}
            ></textarea>
        </div>
      </div>
      <button
        type="submit"
        className="flex justify-center rounded-md w-24 px-3.5 py-2.5 text-sm font-semiboldrounded-lg bg-red-800/50 hover:bg-amber-100 hover:text-stone-800 text-amber-100 focus:bg-red-800/50 focus:text-stone-800"
      >
        {dict.page.contact.submit}
      </button>
    </form>
    </main>
  );
}
