import Head from 'next/head'

const Layout =({children})=>{
    return (
        <>
        {/* <Navbar/> */}
        { children } 
        {/* <Footer/> */}
        </>
    )
}

export default Layout;