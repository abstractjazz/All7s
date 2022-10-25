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

  const styles = {
    width:  500,
    height: 500
  }

  return (
      <div style={{width: '100vw', height: '100vh', position:'relative'}}>
        <Image
          alt="huge block letters 'S T A K' with an image of the rapper STAK inside of them"
          src="https://ik.imagekit.io/a9ltbtydo/stak-images/stak/images/Stak-main-feature(2560x1600).png"
          layout='fill'
          objectFit='cover'
         
        />
         <div className="absolute top-0 w-screen h-auto px-12 z-50">
          <div className="flex flex-row justify-end gap-x-4">
          <h1>About</h1>
          <h1>About</h1>
          <h1>About</h1>
          </div>
        </div>
      </div>
  )
}
