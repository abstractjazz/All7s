import Music from '../Music'
import Video from '../Video'
import Image from 'next/image'

export default function MusicAndVideo() {
return (
    <>
       <div className="absolute w-screen h-screen bg-gray-200/0 z-20"> 
        <div className="w-full h-full flex items-center text-9xl overflow-hidden">
       <video src="https://ik.imagekit.io/a9ltbtydo/stak-images/stak/images/smoke-transition-bg.mp4" muted autoPlay></video>
        </div>
        </div>
        <Video/>
        {/* <Music/> */}
    </>

    )
}