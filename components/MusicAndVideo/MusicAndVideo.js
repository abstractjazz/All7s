import Music from '../Music'
import Video from '../Video'
import Image from 'next/image'
import { useEffect } from 'react'

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
]



export default function MusicAndVideo() {

    useEffect(()=>{


const video = document.querySelector(".vid");
let playState = null;

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      video.pause();
      playState = false;
    } else {
      video.play();
      playState = true;
    }
  });
}, {});

observer.observe(video);

const onVisibilityChange = () => {
  if (document.hidden || !playState) {
    video.pause();
  } else {
    video.play();
  }
};

document.addEventListener("visibilitychange", onVisibilityChange);
    })



return (
    <>
  
    <video className="vid sticky top-0 w-screen h-screen" src="https://ik.imagekit.io/a9ltbtydo/stak-images/stak/images/smoke-transition-bg.mp4" muted></video>
    <audio className="w-screen">
      <source src="https://cdn.sanity.io/files/1gxdk71x/production/2a170f1a2f45f06c44c614e3e1bfeb104a6cd352.mp3" type="audio/mpeg"></source>
    </audio>
       <div className="parallax-container items-center w-full h-full bg-green-200/0 z-2"> 
        
         <div className="grid-container px-12 mt-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="">
            <Image
              src={feature.image}
              width={500}
              height={500}
              alt=""
            />
            </div>
          ))}
         </div>
        </div>
        
        {/* <Video/> */}
        {/* <Music/> */}
    </>

    )
}