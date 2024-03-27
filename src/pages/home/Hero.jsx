import React, { useState } from 'react';
import { Link } from 'react-scroll';
import {CgArrowTopRight } from "react-icons/cg";
import Logo from '../../components/ui/Logo';
import { BsSun, BsMoon } from "react-icons/bs";
import { FaAsterisk, FaCircle } from "react-icons/fa";
import MotionText from '../../components/ui/MotionText';
import RandomLetterReveal from '../../components/ui/RandomLetterReveal';

const Hero = () => {

    const [isClicked, setIsCkicked] = useState(false);

    const handleClick = () => {
        setIsCkicked(!isClicked);
    }

    return (
        <section id='hero' className="w-full min-h-screen grid grid-cols-[70%_30%] bg-skyIce-950 border-[1px] border-dashed
            border-zinc-700">
            {/* Left Column */}
            <div className="flex  flex-col w-full h-full">
                
                <div className="flex w-full border-[1.5px] border-dashed border-zinc-700 h-[65%] hover:bg-skyIce-900 
                    justify-center pl-16 pt-28" >
                
                    <p className='font-gugi text-[22rem] tracking-wider app-title '                       
                    >
                        TRISH
                    </p>
                </div>
               
                <div className="flex w-full h-[35%] items-center border-[1.5px] border-dashed border-zinc-700" >                  
                    <div className="w-full flex flex-col ">
                        <p className='font-prosto uppercase text-[5.8rem] text-zinc-300 leading-[110px] font-[800] 
                            tracking-tight pl-32 '>
                            <RandomLetterReveal text="CREATIVE DEVELOPER" />
                        </p>

                        <div className="flex revealText">

                            <MotionText
                                icon={<FaAsterisk style={{ color: '#6b21a8', fontSize: '20px', marginTop: '4px' }}
                                    className='rotating-icon'
                                />}
                                text={"Crafting Designs that Speak in Pixels."}
                            />
                        </div>
                        
                        {/* <p className='text-2xl font-syne app-title font-[300] tracking-[.26rem] uppercase revealText pl-2'>
                            
                        </p> */}
                    </div>                        
                </div>
                    
            </div>
            
            
            {/* Right Column */}
            <div className="flex flex-col w-full h-full">
                {/* Row 1 - 65% Height */}
                <div className="flex flex-col justify-between w-full h-[65%] hover:bg-skyIce-900 pt-24 pl-12 pr-8
                    border-b-[1px] border-dashed border-zinc-700" >

                    <button className="flex justify-end items-end text-emerald-500 text-4xl"
                        onClick={handleClick}
                    >                       
                        {isClicked ?  <BsMoon/> : <BsSun/>}
                    </button>


                    <div className="flex flex-col">
                        <h3 className='font-syne text-3xl text-purple-400 text-opacity-80 mb-2 tracking-widest'>
                            <span className='text-emerald-500'>{'<'}</span>TLDR
                            <span className='text-emerald-500'>{'/>'}</span>
                        </h3>
                        
                        
                        <p className='font-syne text-[1.38rem] text-zinc-500 font-[100] pb-24 tracking-wide'>
                            Hi, I'm Trish Ramos, a web designer specializing in frontend development. 
                            <br /> 
                            Based in Colombia, I build web stuff that is engaging, responsive & secure.<br />
                            Currently seeking full-time opportunities or freelance gigs to unleash creativity.<br />
                                <Link to='contact' className='text-purple-400 text-opacity-90 hover:text-purple-300 
                                    mr-4 bg-purple-300 bg-opacity-10 hover:bg-opacity-25 border-2 border-emerald-500
                                    inline-flex py-1 px-4 border-opacity-90 rounded-3xl mt-4'>
                                    Let's connect!
                                    <CgArrowTopRight
                                        style={{ fontSize: '1.5rem', fontWeight: '100', margin: '3px 0 0 2px', color: '#a855f7' }}/>
                                </Link><br/>                                                  
                           </p>
                    </div>
                </div>
                
                <div className="flex w-full  h-[35%] hover:bg-skyIce-900 justify-center
                    items-center z-10" >
                    <div className="absolute w-[180px] h-[180px] bg-purple-200 bg-opacity-20 rounded-full
                        border-[2px] border-opacity-40 border-emerald-400 -z-10"></div>
                    <Logo text='SCROLL * SCROLL * SCROLL * SCROLL * ' />   

                </div>
            </div>
        </section>
    );
};

export default Hero;
