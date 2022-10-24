import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import StylesObj from '../components/styles.js'
import Splash from '../components/Splash'
import About from '../components/About'
import Featured from '../components/Featured'
import Contact from '../components/Contact'

export default function Home() {
  return (
    
    <div className={StylesObj.container}>
      <Splash/>
      { <About/>
     /* <Featured/>
      <Contact/> */}
      {/* <h1>Landing | About | Highlights, like feature track, new release, news, new merch, etc...</h1> */}
    </div>
  )
}
