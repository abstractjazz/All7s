/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from '@heroicons/react/24/outline'
import Image from 'next/future/image'

const features = [
  {
    name: 'One',
    description: 'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.',
    image: '/background.jpg'
  },
  {
    name: 'Two',
    description: 'Ornare donec rhoncus vitae nisl velit, neque, mauris dictum duis. Nibh urna non parturient.',
    image: '/background.jpg'
  },
  {
    name: 'Three',
    description: 'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.',
    image: '/background.jpg'
  },
  {
    name: 'Four',
    description: 'Ornare donec rhoncus vitae nisl velit, neque, mauris dictum duis. Nibh urna non parturient.',
    image: '/background.jpg'
  },
  {
    name: 'Five',
    description: 'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.',
    image: '/background.jpg'
  },
  {
    name: 'Six',
    description: 'Ornare donec rhoncus vitae nisl velit, neque, mauris dictum duis. Nibh urna non parturient.',
    image: '/background.jpg'
  },
  {
    name: 'Seven',
    description: 'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.',
    image: '/background.jpg'
  },
  {
    name: 'Eight',
    description: 'Ornare donec rhoncus vitae nisl velit, neque, mauris dictum duis. Nibh urna non parturient.',
    image: '/background.jpg'
  },
  {
    name: 'Nine',
    description: 'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.',
    image: '/background.jpg'
  },
  {
    name: 'Ten',
    description: 'Ornare donec rhoncus vitae nisl velit, neque, mauris dictum duis. Nibh urna non parturient.',
    image: '/background.jpg'
  },
  {
    name: 'Eleven',
    description: 'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.',
    image: '/background.jpg'
  },
  {
    name: 'Twelve',
    description: 'Ornare donec rhoncus vitae nisl velit, neque, mauris dictum duis. Nibh urna non parturient.',
    image: '/background.jpg'
  }
 
  
]
const css = { maxWidth: '100%', height: 'auto' }
export default function Music() {
  return (
    <div className="bg-black/0">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white">Latest Music</h2>

        </div>
        <div className="mt-12 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8 ">
          {features.map((feature) => (
            <div key={feature.name} className="relative border-solid border-white border">
            <Image
              src={feature.image}
              width={1000}
              height={500}
              alt=""
            />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
