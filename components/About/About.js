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

export default function About() {
  return (
    <>
    <div className="">
    <div className="absolute w-screen h-screen bg-gray-200/0 z-20 text-9xl px-12 overflow-scroll">
      <p className="mt-10">All7z is a brand for 777777 <span className="text-[#D01975]">MUSIC</span> 777777 <span className="text-[#F3EC8C]">MERCH</span> 777777 <span className="text-[#5242EF]">AND MORE</span> 777777 <span className="text-[#EE7516]">PRESS KIT HERE</span></p>
    </div>
    <Image
          alt="huge block letters 'S T A K' with an image of the rapper STAK inside of them"
          src="https://ik.imagekit.io/a9ltbtydo/stak-images/stak/images/Stak-about-page.png"
          layout="responsive"
          width={1440}
          height={900}
        />
      
    </div>
   
    </>
  )
}
