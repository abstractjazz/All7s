import { Fragment, useEffect } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  ChatBubbleBottomCenterTextIcon,
  ChatBubbleLeftRightIcon,
  InboxIcon,
  QuestionMarkCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import anime from 'animejs'
import styles from '../styles.js'
import Image from 'next/image'

export default function Splash() {


  useEffect(()=> {
    anime({
      targets: '.headline',
      rotate: '1turn',
      duration: 800
    })
  })

  return (
   <>
   <div className="relative w-screen h-screen">
    <Image
    alt="huge block letters 'S T A K' with an image of the rapper STAK inside of them"
    src="https://ik.imagekit.io/a9ltbtydo/stak-images/stak/images/Stak-main-feature.png"
    layout="fill"
    objectFit="cover"
    quality={100}
    sizes="100vw, 100vh"
    />

   </div>
   </>
  )
}
