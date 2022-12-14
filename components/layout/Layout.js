import Head from 'next/head'
import Navbar from '../Navbar';
import Footer from '../Footer';

const Layout =({children})=>{
    return (
        <>
        <div className="">
            <header>
                <Navbar/>
            </header>
            <div className="main-container main-layout">
            { children } 
            </div>
            <Footer/>
        </div>
        
        
        </>
    )
}

export default Layout;