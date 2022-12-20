import Music from '../Music'
import Video from '../Video'
import Album from '../../components/Album'
import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'
import getYouTubeID from 'get-youtube-id'
import YouTube from 'react-youtube'
import { PortableText }  from '@portabletext/react'
import { urlFor } from '../../lib/client'
import { client } from '../../lib/client'
import { imageUrlBuilder } from 'next-sanity-image'
import { ChevronDoubleLeftIcon } from '@heroicons/react/24/outline'
import anime from 'animejs'

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
// const builder = imageUrlBuilder(client)

export default function MusicAndVideo(videoPreLink) {
const soundCloudMusic = videoPreLink.videoPreLink.musicLink
const albumRef = soundCloudMusic.map(function(album){console.log(album)})


const [play, setPlay] = useState(<div className="text-9xl flex flex-col justify-center items-center">{soundCloudMusic.map(function(album){

return ( 
<div className='album-div flex flex-col items-center justify-center' onClick={()=>{
 handleClick
}}> 
{/* <Album content={album} isClicked="false"/> */}
<p className="rounded-lg text-2xl w-1/2 mb-3 font-Headline">{album.description}</p>
<div className="flex flex-col items-center drop-shadow-2xl">
{/* <img className="transition-all ease-linear duration-1000 w-1/2 absolute z-10 mt-28 hover:-translate-x-150 hover:animate-ping" src='./whiteRabbit.png' id="bunny"/> */}
<img className="bg-black/20 z-30 mb-8 w-1/2 h-auto transition-all hover:border-red-400/50 hover:scale-75 border-black/50 border-8 rounded-lg ease-linear duration-500" id="album" src={urlFor(album.image)}/>


</div>
</div>
    )
  }
)}
</div>
)

let elementClicked='true'


// useEffect(()=>{if (elementClicked.current=true) {
//   anime({
//     targets: '.album-div',
   
//     translateX:-20,
//     duration: 4000,
//     easing: 'easeOutQuad'
// })
// } else {

// }},[])





const handleClick=()=> {
  setPlay(<div className="flex items-center justify-center flex-wrap gap-x-12">{soundCloudMusic.map(function(album){
  
   if (elementClicked='true') {
    return (
      
      <div className="album div w-96 mb-12" dangerouslySetInnerHTML={{__html:album.body[0].children[0].text}}></div>
    
          )
    
        } else {
        return ( 
          <div className='flex flex-col items-center justify-center' onClick={()=>{
          handleClick
          
          }}> 
          <p className="bg-black/50 rounded-lg text-2xl font-bold w-1/2 mb-3 bg-gradient-to-r from-blue-300/50 via-pink-600/50 to-purple-600/50">{album.description}</p>
          <img className="mb-8 w-1/2 h-auto" src={urlFor(album.image)}/>
          </div>
        )      
      }
      })}    
  </div>)
      }
 
  console.log(soundCloudMusic) // map this and drill down into each object to get the iframe 
  
  const getUrl = videoPreLink.videoPreLink.heroLink[0].url
  const id = getYouTubeID(getUrl)
  const url = `https://www.youtube.com/embed/${id}`
  


// useEffect(() => {
//   if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
//     // true for mobile device
//     document.write("mobile device");
//   }else{
//     // false for not mobile device
//     document.write("not mobile device");
//   }
  
// })

  useEffect(()=>{
  if ((!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
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
}})
 
useEffect(()=>{if (window.innerWidth < 768) {
  setMobile(true)
}},[])


const [mobile, setMobile] = useState(false)
return (
    <>
  {!mobile ? <video className="vid sticky top-0 w-screen h-screen z-10" src="https://ik.imagekit.io/a9ltbtydo/stak-images/stak/images/smoke-transition-bg.mp4" muted></video> : <img src="/stak-tape.png" className="mb-12 -z-5"/>}
  
    
       <div className="parallax-container flex flex-col items-center justify-center w-full h-full z-10"> 
      
       <div className="z-30 flex flex-col items-center justify-center mb-20 w-screen">
        <div className="mb-12 rounded-lg">
       <p className="text-7xl font-Headline text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-pink-600 to-purple-600 font-bold" id="LOOK">LOOK</p>
       </div>
       <iframe className="w-3/4 h-screen border-8 border-black/50"
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
       
       <div className="w-screen grid-container px-12 mt-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-2 z-50">
        
          {videoPreLink.videoPreLink.vidLink.map(function(video, i) {
            const getVid=video.url
            const id2 = getYouTubeID(getVid)
            const url2 = `https://www.youtube.com/embed/${id2}`
            return (
           
            <iframe className="w-full z-50 border-8 border-black/50 rounded-lg"
             
              src={url2}
              width={500}
              height={500}
              alt=""
              allow="fullscreen"
            />
              
            )
          })}
          
          
          
         </div>

         <div className="w-3/4 flex mt-12 gap-y-12 flex-col items-center z-30">
         <div className="mb-12 rounded-lg flex items-center justify-center w-1/2">
       <p className="text-7xl font-Headline text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-pink-600 to-purple-600 font-bold" id="LISTEN">LISTEN</p>
       </div>

          {/* {useEffect(()=>{
          const changeDiv=document.querySelector('.album-div')
          
          })}
      */}
   
          {/* const changeDivContent=()=>{<div className="stak-albums w-full" dangerouslySetInnerHTML={{__html:album.body[0].children[0].text}}></div>} */}
          
         
          <div className="" onClick={handleClick}>
          {play}
         </div>
       
         
         
         {/* <div className="stak-albums w-full" dangerouslySetInnerHTML={{__html:album.body[0].children[0].text}}></div>
        musicDiv.innerHTML=album.body[0].children[0].text
        console.log(musicDiv)
          */}
         
         </div>
        </div>
        
        {/* <Video/> */}
        {/* <Music/> */}
    </>

    )
}



//encodeURIComponent

