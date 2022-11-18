import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import StylesObj from '../components/styles.js'
import Splash from '../components/Splash'
import About from '../components/About'
import Featured from '../components/Featured'
import Contact from '../components/Contact'
import MusicAndVideo from '../components/MusicAndVideo'
import { client } from '../lib/client'
import { PortableText } from '@portabletext/react'

const Home=(clientFetch) =>{
  {console.log(clientFetch)}
  return (

    <div className={StylesObj.container}>
      {/* {console.log(JSON.stringify(aboutCopy.aboutCopy, null, 2))} */}
      <Splash/>
       <About sectionCopy={clientFetch.clientFetch}/>
       <MusicAndVideo videoPreLink={clientFetch.heroLink}/>
      {/* {console.log(clientFetch.vidLink)} */}
     
      {/* <Featured/>
      <Contact/>  */}
       {/* <h1>Landing | About | Highlights, like feature track, new release, news, new merch, etc...</h1>  */}
    </div>
  ) 
}




export default Home;

export const getServerSideProps = async() => {
  const query = "*[_type == 'about']" //is this the wrong query & why I am not getting the expected results? the return differs from a simple copy of the json 
  const clientFetch = await client.fetch(query)
  const query2 = "*[_type == 'videoLink']"
  const query3 = "*[_type == 'heroVideo']"
  const vidLink = await client.fetch(query2)
  const heroLink = await client.fetch(query3)
  
  return {
   props: {
      clientFetch,
      vidLink,
      heroLink
      }
    }
  }