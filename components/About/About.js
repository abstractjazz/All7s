/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { CameraIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import {PortableText} from '@portabletext/react'
import about from '../../sanity_staksite/schemas/about'
import doc from '../../doc.json'

export default function About({sectionCopy}) {
  return (
  <>
      <div className="absolute w-screen h-screen z-20 text-9xl">
        <div className="w-full h-full flex content-center justify-center align-middle items-center font-Headline font-bold px-24 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-blue-300 to-purple-600 mt-24">
        <p>{sectionCopy[0].body[0].children[0].text}</p>
      {/* {console.log(doc)}  */}
      {/* {console.log(sectionCopy[0].body[0].children[0].text)} */}
        {/* <PortableText value={sectionCopy[0].body[0].children[0].text}/>  */}
      {/* {console.log(sectionCopy.aboutCopy[0].body[0].children[0].text)} */}
       </div>
      </div>
   
      
      <Image
        alt="huge block letters 'S T A K' with an image of the rapper STAK inside of them"
        src="https://ik.imagekit.io/a9ltbtydo/stak-images/stak/images/Stak-about-page.png"
        layout="responsive"
        width={1440}
        height={900}
      />
  </>
  )
}
