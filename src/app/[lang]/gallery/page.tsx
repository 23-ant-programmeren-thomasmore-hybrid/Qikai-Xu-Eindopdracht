import { getDictionary } from '../../../dictionaries'
import {Locale} from "../../../../i18n.config";
 
import Image from 'next/image'
import mountains from '/public/images/mountains.jpg'

export default async function Gallery({ params: { lang } }: {params: {lang: Locale}}) {
  const dict = await getDictionary(lang) // nl
  return (
    <main className="p-10">
      <h1>{dict.page.gallery.title}</h1>
      <h2>{dict.page.gallery.description}</h2>
      <Image
      src={mountains}
      width={500}
      height={500}
      alt="Picture of the author"
    />
    </main>
  )
}