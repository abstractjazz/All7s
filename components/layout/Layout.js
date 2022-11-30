import Head from 'next/head'
import Navbar from '../Navbar';

const Layout =({children})=>{
    return (
        <>
        <div>
            <header>
                <Navbar/>
            </header>
            <div className="main-container">
            { children } 
            </div>
        </div>
        
        
        </>
    )
}

export default Layout;