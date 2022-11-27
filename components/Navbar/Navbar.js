import {useState, useEffect} from 'react'
import Headroom from "headroom.js"
import headroom from 'headroom.js'
import anime from 'animejs'
import Link from 'next/link'


const Navbar=()=>{
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
          <h1>ABOUT ALL7z</h1>
          </Link>

          <Link href="/#listen">
          <h1>MUSIC & VIDEO</h1>
          </Link>


          <Link href="/shop">
          <h1>SHOP</h1>
          </Link>


          <Link href="/blog/posts">
          <h1>BLOG</h1>
          </Link>


          </div>
        </nav>
    )
}

export default Navbar;