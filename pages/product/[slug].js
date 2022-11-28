import {client, urlFor} from '../../lib/client'
import {AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar} from 'react-icons/ai'
import  Product  from '../../components/Product'
import { useState } from 'react'

const ProductDetails = ({ product, products}) => {
    const {image, name, details, price } = product;
    const [index, setIndex]=useState(0)
    return (
        <div>
            <div className="product-detail-container">
                <div>
                    <div className="image-container">
                        <img src={urlFor(image && image [index])} alt="ALL7z Product" className="product-detail-image" width="300" height="300"></img>
                    </div>
                </div>
            </div>
            <div className="small-images-container">
                {image?.map((item, i) =>  (
                    <img src={urlFor(item) }
                         className={i === index ? 'small-image selected-image': 'small-image'}
                         onMouseEnter={()=>setIndex(i)}
                    />

                ))}
            </div>
            <div className="product-detail-desc">
                <h1>{name}</h1>
                <div className="reviews flex-col">
                    {/* <div>
                       <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </div> */}
                    {/* <p>
                        (77)  
                    </p> */}
                    <h4>Details: </h4>
                    <p className="">{details}</p>
                    <p className="price">${price}</p>
                    <div className="quantity flex flex-col items-center">
                        <h3 className=" mt-8 mb-3">Quantity</h3>
                        <p className="quanity-desc flex gap-x-3 ">
                            <span className="minus" onClick=""><AiOutlineMinus/></span>
                            <span className="num" onClick="">0</span>
                            <span className="plus" onClick=""><AiOutlinePlus/></span>
                        </p>
                        <div className="buttons">
                            <button type="button"
                                    className="add-to-cart"
                                    onClick="">Add to Cart
                            </button>
                            
                            <button type="button"
                                    className='buy-now' 
                                    onClick="">Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="maylike-products-wrapper flex flex-col items-center mt-12">
                <h2 className="bg-black">More to love</h2>
                <div className="marquee ">
                    <div className="maylike-products-container track">{products.map((item)=><Product key={item.name} product={item}/>)}</div>
                </div>
            </div>
        </div>
       
    )
}

export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
        slug {
            current
        }
    }`;

    const products = await client.fetch(query)
    const paths = products.map((product)=> ({
        params: {
            slug: product.slug.current
        }
    }));

    return {
        paths, 
        fallback: 'blocking'
    }
    //include parentheses --> instantly returning an object from a function 
}

export const getStaticProps = async ({params: { slug }}) => {
    
    const query = `*[_type == "product" && slug.current ==  '${slug}'][0]`;
    const productsQuery = "*[_type == 'product']"
    
    const product = await client.fetch(query)
    const products = await client.fetch(productsQuery)

    return {
      props: {products, product}
    }
  }


export default ProductDetails