import Head from 'next/head'
import Navbar from '../Navbar';

const Layout =({children})=>{
    return (
        <>
        <Navbar/>
        { children } 
        {/* <Footer/> */}
        </>
    )
}

export default Layout;