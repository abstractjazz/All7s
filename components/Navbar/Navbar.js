import {useState, useEffect} from 'react'
import Headroom from "headroom.js"
import headroom from 'headroom.js'
import anime from 'animejs'



const Navbar=()=>{
useEffect(()=>{
    let lastScrollTop;
    let navbar = document.getElementById('nav');
    window.addEventListener('scroll',function(){
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
})

return(
<nav className="fixed top-0 w-screen h-auto px-12 z-50 font-Headline text-white" id="nav">
          <div className="flex flex-row justify-end gap-x-4">
          <h1>ABOUT ALL7z</h1>
          <h1>MUSIC & VIDEO</h1>
          <h1>SHOP</h1>
          <h1>BLOG</h1>
          </div>
        </nav>
    )
}

export default Navbar;