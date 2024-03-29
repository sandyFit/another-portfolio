import React, { useState } from 'react';
import { Link } from 'react-scroll';
import {CgArrowTopRight } from "react-icons/cg";
import Logo from '../../components/ui/Logo';
import { BsSun, BsMoon } from "react-icons/bs";
import { FaCircle, FaMoon } from "react-icons/fa";
import { BsChevronDoubleDown } from "react-icons/bs";


const Hero = () => {

    const [isClicked, setIsCkicked] = useState(false);    

    const handleClick = () => {
        setIsCkicked(!isClicked);
    }

    
    // Function to get the current date and time in the specified format
    const getCurrentTimeWithTimezone = () => {
        const now = new Date();
        const options = {
            hour: '2-digit',
            minute: '2-digit',
            timeZoneName: 'short'
        };
        // Using Intl.DateTimeFormat to format the date/time in the desired way, including AM/PM and GMT offset
        const formatter = new Intl.DateTimeFormat('en-US', options);
        return formatter.format(now);
    };
    

    return (
        <section
            id="hero"
            className="w-full h-screen flex flex-col justify-between bg-skyIce-950 relative "
        >          
            <div className="flex flex-col items-end w-[20%] mt-28 pr-6 absolute left-[93.5rem]">
                <h3 className='font-ibm text-lg font-[400] text-purple-500'>
                    <span className='text-electro-300'>{'<'}</span>
                    timezone
                    <span className='text-electro-300'>{'/>'}</span>
                    
                </h3>
                <p className='w-full text-zinc-500 uppercase font-ibm font-[400] text-lg text-right'>
                    Bogota: {getCurrentTimeWithTimezone()}
                </p>
            </div>

            <div className="flex flex-col w-full h-full ">
                <article className="flex flex-col justify-between w-full h-full ">
                    <div className="w-full  flex flex-col justify-center items-start mt-32 pl-24">
                        <p className="font-ibm uppercase text-[11rem] text-zinc-300 font-[400] ">
                            _developer
                        </p>
                        <p className="font-ibm uppercase text-[11rem] text-electro-300 font-[400] ml-[35rem] 
                            mt-[-7rem]">
                            & designer_
                        </p>
                    </div>
                                      
                    <div className="flex w-full justify-between" >                             
                        <div className="flex w-full flex-col pl-72  z-10">
                            <div className="flex w-[50%] ">
                                <div className="flex  flex-col p-10">
                                    <div className="flex">
                                        <FaCircle
                                            style={{ color: '#9333ea', fontSize: '10px', margin: '12px -100px 0 0', zIndex: '1' }} />
                                        <h3 className='w-[80%] text-zinc-300 uppercase font-ibm font-[400] text-lg pl-28 
                                             p-1 tracking-wider'>                                    
                                                hi there
                                        </h3>
                                    </div>
                                    <p className='w-full text-zinc-500 uppercase font-ibm font-[400] mt-2'>
                                        I'm Trish Ramos, a creative developer based in Colombia.
                                        <br/>
                                        I build web stuff that is engaging, responsive & secure.
                                    </p>
                                </div>
                            </div>                      
                        </div>

                        {/* <img src="/banner.svg" alt=""
                        className='absolute left-[16rem] bottom-[10.3rem] -z-0 '/> */}
                        
                        <div className="flex w-full h-full items-end">
                            <div className="w-full flex items-end pl-28 pt-8">                          
                                <div className="flex z-10 w-[50%] ">
                                    <div className="flex flex-col p-10">
                                        <div className="flex">
                                            <FaCircle
                                                style={{ color: '#9333ea', fontSize: '10px', margin: '12px -100px 0 0', zIndex: '1' }} />
                                            <h3 className='w-[80%] text-zinc-300 uppercase font-ibm font-[400] text-lg pl-28 
                                                 p-1 tracking-wider'>                                    
                                                    availabiity
                                            </h3> 
                                        </div>
                                        <p className='w-full text-zinc-500 uppercase font-ibm font-[400] mt-2'>
                                            Currently on the look for roles or gigs where I can seamlessly bridge design & code.
                                            <br/>
                                            Let's create something cool!
                                        </p>
                                        
                                        <div className="flex uppercase tracking-[.28rem]">
                                            <Link to='contact' class="group relative inline-flex h-[calc(48px+8px)] items-center 
                                                justify-center  py-1 pl-8 pr-16 text-[1.3rem] font-medium text-electro-300
                                                border-[1.5px] border-dashed border-purple-400 mt-6"
                                                smooth={true} 
                                                duration={500}
                                            >
                                                <span class="z-10 pr-2">contact me</span>
                                                <div class="absolute right-1 inline-flex h-12 w-12 items-center justify-end  
                                                    bg-purple-700 transition-[width] group-hover:w-[calc(100%-8px)]">
                                                    <div class="mr-3.5 flex items-center justify-center">
                                                        <svg width="15" height="15" viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-electro-300">
                                                            <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                                                            </path>
                                                        </svg>
                                                    </div>
                                                </div>                                
                                            </Link>
                                        </div>
                                    </div>                                   
                                </div>          
                           
                                {/* <img src="/banner2.svg" alt=""
                                    className='absolute right-72 bottom-[4.3rem] -z-0'
                                /> */}
                            </div>
                        </div>    
                    </div>                                            
                </article>                
                
                <article className="w-full h-full flex justify-center items-center">
                    <div className="flex w-full ml-24 pb-16">
                        <BsChevronDoubleDown style={{color: '#2ef938', fontSize: '1.2rem', margin: '5px 5px 0 0'}}/>
                        <h3 className='w-full font-ibm text-lg font-[400] text-purple-500'>
                            <span className='text-electro-300'>{'['}</span>
                            scroll to explore
                            <span className='text-electro-300'>{']'}</span>                        
                        </h3>  
                    </div>      
                    
                    <button className="flex text-3xl text-electro-300 mr-10 pb-16"
                        onClick={handleClick}
                    >
                        {isClicked ? <BsMoon/> : <BsSun/>}
                    </button>
                </article>   

            </div>           
        </section>
    );
};

export default Hero;
