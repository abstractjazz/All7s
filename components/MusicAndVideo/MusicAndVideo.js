import Music from '../Music'
import Video from '../Video'
import Image from 'next/image'

export default function MusicAndVideo() {
return (
    <div className="">
        <Image
          alt="huge block letters 'S T A K' with an image of the rapper STAK inside of them"
          src="https://ik.imagekit.io/a9ltbtydo/stak-images/stak/images/Stak-music-&-video-2.png"
          width={1440}
          height={900}
        />
        {/* <Video/>
        <Music/> */}
    </div>

    )
}