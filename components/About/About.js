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

export default function About({sectionCopy}) {
  return (
  <>
      <div className="absolute w-screen h-screen bg-gray-200/0 z-20 text-9xl px-12">
        <div className="w-full h-full flex items-center ml-10">
          <p>{sectionCopy.aboutCopy[0].body[0].children[0].text}</p> 
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
