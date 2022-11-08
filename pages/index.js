import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import StylesObj from '../components/styles.js'
import Splash from '../components/Splash'
import About from '../components/About'
import Featured from '../components/Featured'
import Contact from '../components/Contact'
import MusicAndVideo from '../components/MusicAndVideo'
import {PortableText} from '@portabletext/react'
import { client } from '../lib/client'

export default function Home(aboutCopy) {
  
  return (

    <div className={StylesObj.container}>
      {/* {console.log(JSON.stringify(aboutCopy.aboutCopy, null, 2))} */}
      <Splash/>
       <About sectionCopy={aboutCopy.aboutCopy} />
      <MusicAndVideo/>
     
      {/* <Featured/>
      <Contact/>  */}
       {/* <h1>Landing | About | Highlights, like feature track, new release, news, new merch, etc...</h1>  */}
    </div>
  ) 
}
export const getServerSideProps = async() => {
const query = "*[_type == 'about']" //is this the wrong query & why I am not getting the expected results? 
const aboutCopy = await client.fetch(query)
return {
 props: {
    aboutCopy,
    }
  }
}

