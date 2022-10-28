import { Fragment, useEffect, useState } from 'react'
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
    window.scrollTo(140, 140)
  })

  useEffect(()=> {
    anime({
      targets: '#focus-mask',
      opacity: 0,
      translateY: -30,
      translateX:3,
      translateX:-5,
      duration: 7000,
      easing: 'easeOutQuad'
    })
  })

 





    
   
   

  // const styles = {
  //   width:  500,
  //   height: 500
  // }
  // style={{display:'flex', flexDirection:'column', alignItems: 'center', alignContent:'center'}}

  return (
      <div className="w-full h-auto scroll-smooth">
        <Image
          alt="huge block letters 'S T A K' with an image of the rapper STAK inside of them"
          src="https://ik.imagekit.io/a9ltbtydo/stak-images/stak/images/Stak-main-feature-(25x16).png"
          layout='responsive'
          width={2560}
          height={1600}
          objectFit='cover'
        />
        <div className="bg-black absolute top-5 w-screen h-screen opacity-40 " id="focus-mask">
        <Image
          alt="huge block letters 'S T A K' with an image of the rapper STAK inside of them"
          src="https://ik.imagekit.io/a9ltbtydo/stak-images/stak/images/Stak-main-feature-(25x16).png"
          layout='responsive'
          width={2560}
          height={1600}
          objectFit="cover"
        />
        </div>
      </div>
  )
}
