import React, { useState } from 'react';
import { Link } from 'react-scroll';
import {CgArrowTopRight } from "react-icons/cg";
import Logo from '../../components/ui/Logo';
import { BsSun, BsMoon } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";

const Hero = () => {

    const [isClicked, setIsCkicked] = useState(false);

    const handleClick = () => {
        setIsCkicked(!isClicked);
    }

    return (
        <section id='hero' className="w-full min-h-screen grid grid-cols-[70%_30%] bg-skyIce-950 border-[1px] 
            border-zinc-700">
            {/* Left Column */}
            <div className="flex  flex-col w-full h-full">
                
                <div className="flex w-full border-[1px] border-zinc-800 h-[65%] hover:bg-skyIce-900 
                    justify-center pl-16 pt-28" >
                
                    <p className='font-gugi text-[20rem] tracking-wider app-title '                       
                    >
                        TRISH
                    </p>
                </div>
               
                <div className="flex w-full h-[35%] items-center  " >
                    <div className="flex w-[65%] h-full hover:bg-skyIce-900 justify-center items-center pl-28">
                        <p className='font-prosto font-[950] text-zinc-300 text-[5.5rem] tracking-tight uppercase 
                            leading-[85px] '>
                            creative <br/>developer
                        </p>
                    </div>

                    <div className="flex  w-[35%] h-full  border-l-[1px] border-zinc-800 hover:bg-skyIce-900 
                        justify-center items-end " >                       
                        
                    </div>
                </div>
            </div>
            
            {/* Right Column */}
            <div className="flex flex-col w-full h-full">
                {/* Row 1 - 65% Height */}
                <div className="flex flex-col justify-between w-full h-[65%] hover:bg-skyIce-900 pl-12 pr-8" >

                    <ul className='text-purple-400 text-opacity-60 font-syne text-lg font-semibold uppercase pt-24 mb-16 flex
                        justify-end items-center '>
                        
                        <li className='list-disc text-emerald-400 text-3xl'></li>
                        <li>available for work</li>
                    </ul>


                    <div className="flex flex-col">
                        <h3 className='font-syne text-3xl text-purple-400 text-opacity-80 mb-2 tracking-widest'>
                            <span className='text-emerald-500'>[</span>TLDR
                            <span className='text-emerald-500'>]</span>
                        </h3>
                        
                        
                        <p className='font-syne text-[1.46rem] text-zinc-500 font-[100] pb-20 tracking-wide'>
                            Hi, I'm Trish Ramos, frontend developer & web designer.
                            Building digital products that connect brands, design & technology. <br /> <br />
                            Eager for collabs & projects that foster creativity, growth, and fun.<br />
                                <Link to='contact' className='text-purple-400 text-opacity-90 hover:text-purple-300 
                                    mr-4 bg-purple-300 bg-opacity-10 hover:bg-opacity-25 border-2 border-emerald-500
                                    inline-flex py-1 px-4 border-opacity-90 rounded-3xl mt-4'>
                                    Let's collab!
                                    <CgArrowTopRight
                                        style={{ fontSize: '1.5rem', fontWeight: '100', margin: '3px 0 0 2px', color: '#a855f7' }}/>
                                </Link><br/>                                                  
                           </p>
                    </div>
                </div>
                
                <div className="flex w-full border-[1px] border-zinc-800 h-[35%] hover:bg-skyIce-900 justify-center
                    items-center -z-0" >
                    <div className="absolute w-[180px] h-[180px] bg-purple-200 bg-opacity-20 rounded-full
                        border-[2px] border-opacity-40 border-emerald-400 -z-10"></div>
                    <Logo text='SCROLL * SCROLL * SCROLL * SCROLL * ' />   

                </div>
            </div>
        </section>
    );
};

export default Hero;
