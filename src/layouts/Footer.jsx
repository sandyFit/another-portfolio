import { ArrowRight, ArrowRightAltSharp, CopyrightRounded, GitHub, Instagram, LinkedIn, SouthEast } from '@mui/icons-material';
import React from 'react'
import { FaCopyright, FaHeart } from 'react-icons/fa';
import {CgArrowTopRight } from "react-icons/cg";
import RandomLetterReveal from '../components/ui/RandomLetterReveal';


const Footer = () => {

    const date = new Date()
    

    return (
        <section id='contact' className='w-full min-h-screen bg-skyIce-950 flex flex-col'>
            {/* Content */}

            <div  className="flex flex-col items-start w-full h-full pl-56 mt-56">  
                <div className="flex flex-col w-full h-full justify-start">
                    <h1 className='font-prosto uppercase text-[5.8rem] text-zinc-300 leading-[110px] font-[800] 
                            tracking-tight'>
                        <RandomLetterReveal text={"let's connect"}/> <br/>
                    </h1>
                    
                    <p className='w-7/12 font-syne text-zinc-500 text-2xl font-[200] tracking-[.1rem] mt-[-2.5rem]'>
                        Captivated by my work? Let's collaborate or chat. Drop me a line now, your message is the first step
                        to build something awesome together!
                    </p>
                
                    <a href="mailto:sandy07r@gmail.com" className='flex justify-start'>
                        <p className='font-syne text-fuchsia-400 app-title text-[2.5rem] font-[200] inline-flex
                        tracking-[.1rem] hove:underline mt-8 border-2 border-purple-400 rounded-[100px] py-2 px-8'>
                            
                            hello@trishramos.com
                            <CgArrowTopRight
                                style={{ fontSize: '3rem', fontWeight: '100', margin: '3px 0 0 2px', color: '#7e22ce' }}/>
                        </p>
                    </a>
                </div>    
           
                <div className="w-full h-full flex flex-col justify-start mt-48 py-12">     
                    
                    <hr className='w-[90%] border-t-[1px] border-dashed border-zinc-700 '/>

                    <div className="w-full h-full flex font-normal uppercase text-zinc-500 mt-8
                        tracking-wide">
                        <FaCopyright style={{margin: '.25rem .5rem 0 0', fontSize: '1rem'}}/>
                        {`${date.getFullYear()}. Trish ramos |   Crafted with`}
                        <FaHeart style={{ color: 'red', margin: '5px 8px 0 6px', opacity: '.6' }} />
                        {'by yours truly'}
                    </div>             
                </div>
            </div>           
             
            
        </section>
    )
}

export default Footer;




