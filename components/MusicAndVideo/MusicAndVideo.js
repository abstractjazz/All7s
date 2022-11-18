import Music from '../Music'
import Video from '../Video'
import Image from 'next/image'
import { useEffect } from 'react'
import getYouTubeID from 'get-youtube-id'
import YouTube from 'react-youtube'
import { PortableText }  from '@portabletext/react'
import { urlFor } from '../../lib/client'

// const components = {
//   types: {
//     youtube: ({node}) => {
//     const {url} = node
//     const id = getYouTubeId(url)
//     {console.log(id)}
//     return (<YouTube videoId={id}/>)

//     }
//   }
// }


export default function MusicAndVideo(videoPreLink) {
  console.log(videoPreLink)
  const getUrl = videoPreLink.videoPreLink.heroLink[0].url
  const id = getYouTubeID(getUrl)
  const url = `https://www.youtube.com/embed/${id}`
  
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
    
       <div className="parallax-container flex flex-col items-center justify-center w-full h-full bg-green-200/0 z-2 "> 
       <div className="z-50 flex justify-center mb-20 w-screen">
       <iframe className="w-3/4 h-screen"
  //  width='1032' 
  //  height="630" 
   src={url} 
   title="YouTube video player"  
   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
   modestbranding="1"
   frameBorder='0'
   color="black"
   rel="1"
   theme="dark"
   />
      </div>
       
       <div className="w-screen grid-container px-12 mt-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-2">
        
          {videoPreLink.videoPreLink.vidLink.map(function(video) {
            const getVid=video.url
            const id2 = getYouTubeID(getVid)
            const url2 = `https://www.youtube.com/embed/${id2}`
            return (
           
            <iframe className=" w-full z-50"
              src={url2}
              width={500}
              height={500}
              alt=""
              allow="fullscreen"
            />
          
            )
          })}
          
          
          
         </div>
        </div>
        
        {/* <Video/> */}
        {/* <Music/> */}
    </>

    )
}



//encodeURIComponent

// my goal is to use an array of music links like features is currently used
// my goal is to use an array of YT links like features is currently used 
// my goal is to have a hero video centered 