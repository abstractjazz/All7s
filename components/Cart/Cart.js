import { useRef } from 'react'
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping} from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import toast from 'react-hot-toast';
import { useStateContext } from '../../context/StateContext'
import { urlFor } from '../../lib/client';



const Cart = () => {
const cartRef = useRef();
const { totalPrice, totalQuantities, cartItems, setShowCart } = useStateContext();
return(
<div className="cart-wrapper" ref={cartRef}>
    <div className="cart-container">
        <button 
            type="button"
            className="cart-heading"
            onClick={()=>setShowCart(false)}>
             <AiOutlineLeft className="text-black text-2xl" />
             <span className="heading text-black">Your Cart</span>
             <span className="cart-num-items">({ totalQuantities  } items)</span>
             
        </button>
        {cartItems.length < 1 && (
            <div className="empty-cart">
                <AiOutlineShopping size={150}/>
                <h3 className="text-black">YOUR SHOPPING BAG IS EMPTY</h3>
                <Link href="/">
                    <button
                    type="button"
                    onClick={() => setShowCart(false)}
                    className="btn"
                    >CONTINUE SHOPPING</button>
                </Link>
            </div>
        )}
        <div className="product-container">
            {cartItems.length >= 1 && cartItems.map((item)=> (
                <div className="product" key={item._id}>
                <img src={urlFor(item?.image[0])}
                className="cart-product-image mt-12"/>
                  <div className="item-desc">
                    <div className="flex flex-col">
                        <h5>{item.name}</h5>
                        <h4>${item.price}</h4>
                    <div className="flex-col">
                        <div>
                            <p className="quantity-desc">
                            <p className="flex flex-col">
                            <span className="plus" onClick=""><AiOutlinePlus/></span>
                            <span className="num">0</span>
                            <span className="minus" onClick=""><AiOutlineMinus/></span>
                            
                            
                        </p>
                            </p>
                        </div>
                    </div>
                    </div>
                  </div>
                </div>
              
            ))}

        </div>


    </div>
</div>

    )
}

export default Cart