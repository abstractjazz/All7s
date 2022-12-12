import Link from 'next/link'
import { urlFor } from '../../lib/client'
import { AiOutlineShopping } from 'react-icons/ai'



const HeroBanner = ({ heroBanner }) => {
  
return(
<div className="hero-banner-container">
    
    <div className="flex flex-col items-center">
        <p className="beats-solo font-Headline ml-0">{heroBanner.smallText}</p>
        <h3 className="font-Headline">{heroBanner.midText}</h3>
        <h1 className="font-Headline ml-5">{heroBanner.largeText1}</h1>
        {/* <img src={urlFor(heroBanner.image)} alt="ALL7Z PRODUCT" className="hero-banner-image mt-8 md:w-1/16 md:h-1/16" /> */}
        <div>
            {/* <Link href={`/product/${heroBanner.product}`}>
            <button type='button'>{heroBanner.buttonText}</button>
            </Link> */}
            {/* <div className="desc">
                <h5>About this product</h5>
                <p>{heroBanner.desc}</p>
            </div> */}
            
        </div>
    </div>

</div>


)

}

export default HeroBanner