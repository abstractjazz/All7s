// import Ecwid from "../components/Ecwid"
import Link from "next/link"
import { useEffect } from "react"
import HeroBanner from "../components/HeroBanner"
import Product from "../components/Product"
import FooterBanner from "../components/FooterBanner/FooterBanner"
import { client } from "../lib/client"


// import  { ProductBrowser } from '@ecwid/nextjs-ecwid-plugin'
// import dynamic from "next/dynamic"

// const ProductBrowserClient = dynamic(async () => (await import('@ecwid/nextjs-ecwid-plugin')).ProductBrowser, { ssr: false })

const Shop = ({products, bannerData}) => (
      <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>

        <div className="products-heading">
          <h2 className="mt-28">SHOP ALL7z</h2>
        
        </div>
        <div className="products-container">
          {products?.map((product)=> <Product key={product.id} product={product}/>)}
        
        </div>
        <FooterBanner footerBanner={bannerData && bannerData[0]}/>
      </>
    )

  export const getServerSideProps = async () => {
    const query = '*[_type == "product"]'
    const bannerQuery = '*[_type == "banner"]'
    const products = await client.fetch(query)
    const bannerData = await client.fetch(bannerQuery)
    return {
      props: {
        products, bannerData
      }
    }
  }
  
    
    {/* <ProductBrowser 
      storeId="81732001"
      /> */}

  export default Shop;