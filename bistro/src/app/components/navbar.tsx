"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import Logo from '../../../public/logo.png'

export default function NavBar(){

   const NavLinks = [
      { href:'/' , name:'Home'},
      { href: '/about' , name:'About'},
      { href: '/Menu' , name:'Menu'},
      { href: '/Pages' , name:'Pages'},
      { href: '/Contact' , name:'Contact'}
    ]

    const pathname = usePathname()

 return (
<>
    <div className='row'>
         

      <div id='topnav'>
 
         <div id="logo">
               <Image src={Logo} width={50} height={50} alt="logo"/>
         </div>

         <div id="navitems">

         <div>
         {NavLinks.map((link)=>{
         const isActive = pathname.startsWith(link.href)
         return(
            <Link href={link.href} key={link.name}  className={ isActive ? "bg-gray-300 rounded-2xl py-1 px-4 font-bold mr-4" : "text-black-500 mr-4"}>
               {link.name}
            </Link>
         )
         })}
         </div>

         <div id='navbtndiv'>
            <button id='navbtn'>Book A Table</button>
         </div>

         </div>


      </div>

      </div>
</>
 )
}