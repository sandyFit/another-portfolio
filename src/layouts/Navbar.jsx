import React, { useState } from 'react'
import { Link as ScrollLink } from 'react-scroll';
import { BsArrowRight } from "react-icons/bs";

const Navbar = () => {
    return (                      
        <nav className='flex justify-between items-center w-full h-[80px] fixed top-0 left-0 bg-zinc-300 z-20 
            hover:text-zinc-900 '>               
            <p className='text-skyIce-950 font-syne text-lg font-semibold uppercase ml-28'>
                <ScrollLink to="hero" >portfolio</ScrollLink>
            </p>
            <div className="relative w-[47.5%]">
                <div className='flex justify-center items-center mr-2'>           
                    <ul className='w-full flex justify-between items-center bg-zinc-300'> 
                        {['about', 'projects', 'playground', 'resume'].map((item, index) => (
                            <li className='text-skyIce-950 font-syne text-lg font-semibold hover:text-purple-500 
                            px-6 py-2 uppercase'
                                key={index}
                                
                            >
                                <ScrollLink to={item} smooth={true} duration={500} offset={item === 'about' ? -78 : 0}>
                                    {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
                                </ScrollLink>
                            </li>
                        ))}

                        <ScrollLink to='contact' smooth={true} duration={500}>
                            <button className="text-skyIce-950 font-syne text-lg font-semibold hover:text-purple-500 
                            px-6 py-2 uppercase">                                                                
                                get in touch                                                                   
                            </button>
                        </ScrollLink>
                    </ul>          
                </div>
            </div>                                  
        </nav>
        
    )
}

export default Navbar;

