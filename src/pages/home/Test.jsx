import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import {CgArrowTopRight } from "react-icons/cg";
import Logo from '../../components/ui/Logo';
import { BsSun, BsMoon, BsChevronBarDown, BsChevronCompactDown, BsChevronDown } from "react-icons/bs";
import { FaCircle, FaMoon } from "react-icons/fa";
import { BsChevronDoubleDown } from "react-icons/bs";


const Test = () => {

    const [isClicked, setIsCkicked] = useState(false);    
    const [currentTime, setCurrentTime] = useState('');

    const handleClick = () => {
        setIsCkicked(!isClicked);
    }

    
    // Function to get the current date and time in the specified format
    const getCurrentTimeWithTimezone = () => {
        const now = new Date();
        const options = {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true, // Ensure we get AM/PM
        };
        // Bogotá is in the GMT-5 timezone. Adjust if necessary for daylight saving time elsewhere.
        const timeZone = 'America/Bogota';
        const formatter = new Intl.DateTimeFormat('en-US', { ...options, timeZone });
        // Manually constructing the label for Bogotá GMT-5. Adjust the label as needed.
        const formattedTime = formatter.format(now);
        // Optional: Calculate the GMT offset dynamically if needed for other time zones.
        // For Bogotá, we're hardcoding it as GMT-5.
        return formattedTime;
    };


    useEffect(() => {
        const updateTime = () => {
            setCurrentTime(getCurrentTimeWithTimezone());
        }
            // Update the time display immediately upon component mount
            updateTime();

            // Set interval to update every second (or any other interval you prefer)
            const intervalId = setInterval(updateTime, 1000); // 1000 milliseconds for every second

            // Cleanup interval on component unmount
            return () => clearInterval(intervalId);
        
    }, [])


    return (
        <section
            id="hero"
            className="w-full h-screen flex flex-col justify-between bg-slate-950 relative "
        >          
            <div className="flex flex-col items-end w-[20%] mt-28 pr-6 absolute left-[93.5rem] ">
                <h3 className='font-ibm text-lg font-[400] text-purple-500'>
                    <span className='text-electro-300'>{'<'}</span>
                    timezone
                    <span className='text-electro-300'>{'/>'}</span>
                    
                </h3>
                <div className='w-full text-zinc-400 uppercase font-ibm font-[400] text-right'
                    id='currentTime'
                >
                    Bogota gmt-5 <br /> <span className='tracking-wider'>{currentTime}</span>
                </div>
            </div>

            <div className="flex flex-col w-full h-full ">
                <article className="flex flex-col justify-between w-full h-full ">
                    <div className="w-full flex flex-col justify-center items-start mt-32 pl-32">
                        <p className="font-ibm uppercase text-[11rem] text-zinc-300 font-[400] ">
                            _designer
                        </p>
                        <p className="font-ibm uppercase text-[11rem] text-electro-300 font-[400] ml-[24rem] 
                            mt-[-7rem]">
                            & developer_
                        </p>
                    </div>
                                                                                     

                    <div className="flex w-full justify-center pl-96 z-10">
                        <div className="flex  w-[58%] flex-col justify-start  px-10">
                            <div className="flex">                                   
                                <h3 className='w-full font-ibm text-lg font-[400] text-purple-500 tracking-widest'>
                                    <span className='text-electro-300 mr-2'>{'['}</span>
                                    Hello, World!
                                    <span className='text-electro-300 ml-2'>{']'}</span>                        
                                </h3>  
                            </div>
                            <p className='w-full text-zinc-400 uppercase font-ibm font-[400] mt-2'>
                                I'm Trish Ramos, a creative developer based in Colombia.

                                I build web stuff that is engaging, responsive & secure. <br/>
                                Currently on the look for roles or gigs where I can seamlessly bridge design & code.
                                <br/>
                                Let's create something cool!
                            </p>

                            <div className="flex uppercase tracking-[.28rem]">
                                    <Link to='contact' className="group relative inline-flex h-[calc(36px+8px)] items-center 
                                        justify-center  py-1 pl-6 pr-20 text-[1.2rem] font-[400] text-electro-300
                                        border-[1.5px] border-dotted border-purple-400 mt-4"
                                        smooth={true} 
                                        duration={500}
                                    >
                                        <span className="z-10 pr-2">contact me</span>
                                        <div className="absolute right-1 inline-flex h-8 w-12 items-center justify-end  
                                            bg-purple-800 transition-[width] group-hover:w-[calc(100%-8px)]">
                                            <div className="mr-3.5 flex items-center justify-center">
                                                <svg width="15" height="15" viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-elctro-300">
                                                    <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                            </div>
                                        </div>                                
                                    </Link>
                                </div>
                        </div>
                    </div>                                                                                                                        
                </article>                
            
                <article className="w-full h-full flex justify-between items-center relative mt-12">
                    <div className="flex w-full ml-24">
                        <hr className="absolute left-[4.1rem] top-4 w-20 border-t-[1px] border-dashed 
                            border-electro-300 rotate-90"/>
                        <BsChevronDown style={{color: '#2ef938', fontSize: '1.2rem', margin: '5px 5px 0 0'}}/>
                        <h3 className='w-full font-ibm text-lg font-[400] text-purple-500'>
                            {/* <span className='text-electro-300 mr-1'>{'<'}</span> */}
                            scroll to explore
                            <span className='text-electro-300 ml-1'>{'/>'}</span>                        
                        </h3>  
                    </div>      
                    
                    <button className="w-full flex text-3xl text-electro-300 mr-6"
                        onClick={handleClick}
                    >
                        {isClicked ? (
                            <div className="flex justify-end items-end w-full relative ">
                                    <div className='w-[23%] font-ibm text-lg font-[400] text-purple-500
                                        flex justify-center'>
                                        
                                        <span className='text-electro-300 mr-2'>{'<'}</span>
                                        <BsMoon style={{margin: '5px 5px 0 2px', fontSize: '18px', color: 'd4d4d8'}}/>
                                        shade on
                                    <span className='text-electro-300 ml-1'>{'/>'}</span>                         
                                </div>                                 
                            </div> 
                        ) : (
                            <div className="flex justify-end items-end w-full relative">
                                    <div className='w-[23%] font-ibm text-lg font-[400] text-purple-500
                                        flex justify-center'>
                                        
                                        <span className='text-electro-300 mr-2'>{'<'}</span>
                                        <BsSun style={{margin: '5px 5px 0 2px', fontSize: '18px', color: 'd4d4d8'}}/>
                                    shine on
                                    <span className='text-electro-300 ml-1'>{'/>'}</span>                         
                                </div>                                 
                            </div> 
                        )}
                    </button> 
                </article>   

            </div>           
        </section>
    );
};

export default Test;
