import {useState, useEffect} from 'react'
import Headroom from "headroom.js"
import headroom from 'headroom.js'
import anime from 'animejs'
import Link from 'next/link'
import Cart from '../Cart'
import { useStateContext }  from '../../context/StateContext'
import { AiOutlineShopping } from 'react-icons/ai'

const Navbar=()=>{
    
    const {showCart, setShowCart, totalQuantities} = useStateContext();

useEffect(()=>{
    let lastScrollTop;
    let navbar = document.getElementById('nav');
    window.addEventListener('scroll',function(){
        //unbind eventlistener 
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop > lastScrollTop){
    anime({
        targets:'#nav',
        translateY:-80,
    })
    }
    else{
    anime({
        targets:'#nav', 
        translateY:'15'
    })
    }
    lastScrollTop = scrollTop;
    });
},[])

useEffect(()=>{
    const nav = document.getElementById('nav')
    nav.addEventListener('mousemove', cursor)
    
    function cursor(e) {
      nav.style.cursor="pointer"
    }
//unbind eventlistener 
},[])

return(
<nav className="nav fixed top-0 w-screen h-auto px-12 z-50 font-Headline text-white z-50" id="nav">
          <div className="flex flex-row justify-end gap-x-4 mb-8 mt-9">
          
          <Link href="/#about">
          <h1 className="font-Headline">LOOK</h1>
          </Link>

          <Link href="/#listen">
          <h1 className="font-Headline">LISTEN</h1>
          </Link>


          <Link href="/shop">
          <h1 className="font-Headline">LEARN</h1>
          </Link>


          <Link href="/blog/posts">
          <h1 className="font-Headline">LOVE</h1>
          </Link>
         
          <Link href="/blog/posts">
          <h1 className="text-[#1FE827] font-Headline">BUY</h1>
          </Link>


        <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
            <span className="cart-item-qty">{totalQuantities}</span>
            <span><AiOutlineShopping/></span>
        </button>


        {showCart && <Cart />}


          </div>
        </nav>
    )
}

export default Navbar;