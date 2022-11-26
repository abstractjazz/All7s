import Ecwid from "../components/Ecwid"
import Link from "next/link"
import { useEffect } from "react"
import  { ProductBrowser } from '@ecwid/nextjs-ecwid-plugin'
// import dynamic from "next/dynamic"

// const ProductBrowserClient = dynamic(async () => (await import('@ecwid/nextjs-ecwid-plugin')).ProductBrowser, { ssr: false })

export default function Shop() {
    return (
      <div className="absolute">
      <div className="flex justify-center mt-12 mb-12">
        <h1 className="font-Headline text-7xl drop-shadow-xl mb-1">SHOP ALL7z</h1>
      </div>
     

      {/* <ProductBrowser 
      storeId="81732001"
      /> */}
      </div>

    )
  
  }
  
    
  

  