import { getDictionary } from "../../dictionaries";
import { Locale } from "../../../i18n.config";
import ScrollToTopPage from "@/components/scrollReset";
import Hero from "./hero/page";
import About from "./about/page";
import Gallery from "./gallery/page";
import Projects from "./projects/page";
import Education from "./education/page";
import Other from "./other/page";
import Contact from "./contact/page";

import { Roboto_Mono, Roboto } from "next/font/google";

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang); // nl
  return (
    <main className={roboto.className}>
      <div className="flex overflow-hidden min-h-screen flex-col items-center justify-between p-4 pb-0 bg-stone-900/50">
        <section
          id="hero-section"
          className="max-w-4xl w-screen h-screen items-center justify-center text-xl lg:flex lg:-mt-12"
        >
          <Hero
            params={{
              lang: lang,
            }}
          />
        </section>
        <div>
          <section id="about-section">
            <About
              params={{
                lang: lang,
              }}
            />
          </section>
          <section id="education-section">
            <Education
              params={{
                lang: lang,
              }}
            />
          </section>
          <main id="projects-section">
            <Projects
              params={{
                lang: lang,
              }}
            />
          </main>
          <section id="other-section">
            <Other
              params={{
                lang: lang,
              }}
            />
          </section>
          <section id="gallery-section">
            <Gallery
              params={{
                lang: lang,
              }}
            />
          </section>
          <section id="contact-section">
          <Contact
              params={{
                lang: lang,
              }}
            />
          </section>
        </div>
        <ScrollToTopPage />
      </div>
    </main>
  );
}
