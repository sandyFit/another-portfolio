import React from 'react'
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
    return (                      
        <nav className='flex items-center w-[96%] max-w-full h-[50px] fixed top-6 left-8 bg-skyIce-950 z-20 
            hover:text-zinc-900 border-[.5px] border-dashed border-purple-400'> 
            <div className="flex w-full justify-between items-center mx-8">
                <p className='text-electro-300 font-ibm text-lg font-[300] uppercase '>
                    <ScrollLink to="hero" >trish ramos</ScrollLink>
                </p>
                <div className="relative w-[47.5%]">
                    <div className='flex justify-center items-center'>           
                        <ul className='w-full flex justify-between items-center bg-transparent'> 
                            {['about', 'projects', 'playground', 'resume'].map((item, index) => (
                                <li className='text-electro-300 font-ibm text-[1rem] font-[300] 
                                px-6 py-2 uppercase'
                                    key={index}
                                    
                                >
                                    <ScrollLink to={item} smooth={true} duration={500} offset={item === 'about' ? -78 : 0}>
                                        {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
                                    </ScrollLink>
                                </li>
                            ))}

                            <ScrollLink to='contact' smooth={true} duration={500}>
                                <button className="text-electro-300 font-ibm text-[1rem] font-[300]
                                uppercase">                                                                
                                    get in touch                                                                   
                                </button>
                            </ScrollLink>
                        </ul>          
                    </div>
                </div>                                  
            </div>
        </nav>
        
    )
}

export default Navbar;

