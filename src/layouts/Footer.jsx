import React, { useEffect, useState } from 'react'
import { FaCircle, FaCopyright, FaHeart } from 'react-icons/fa';
import { BsChevronUp, BsEmojiSmile } from 'react-icons/bs';
import { Link as ScrollLink } from 'react-scroll';


const Footer = () => {

    const [currentTime, setCurrentTime] = useState('');
    const date = new Date()

    const getCurrentTimeWithTimezone = () => {
        const options = {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true //AM-PM
        }

        const timeZone = 'America/Bogota';
        const formatter = new Intl.DateTimeFormat('en-US', { ...options, timeZone });
        const formattedTime = formatter.format(date);

        return formattedTime;
    }

    useEffect(() => {
        const updateTime = () => {
            setCurrentTime(getCurrentTimeWithTimezone());
        }

        updateTime();

        const intervalId = setInterval(updateTime, 1000);

        return () => clearInterval(intervalId);
    })
    

    return (
        <section id='contact' className='w-full h-screen bg-slate-950 flex flex-col'>
            {/* Content */}

             <div className="flex justify-between w-full relative">
                <div className="w-[9%] flex justify-start items-center font-ibm text-lg font-[400] text-purple-500 
                    ml-24 mb-10 relative top-36">                    
                    <span className='text-electro-300 mr-3'>{'<'}</span>
                    <h3 className='w-full tracking-widest'>say hi</h3> 
                    <span><BsEmojiSmile /></span>
                    <span className='text-electro-300 ml-3'>{'/>'}</span>                                             
                </div> 
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
            </div>  

             

            <div className="flex flex-col justify-between items-start w-full h-full mt-40">                  
                <div className="flex flex-col w-full justify-between items-center h-full relative">
                    <div className="flex justify-start gap-2">
                        <FaCircle
                            style={{ color: '#2ef938', fontSize: '1.2rem', margin: '15px 10px 0 0', zIndex: '1' }} />
                        <h1 className='font-ibm uppercase text-[3.65rem] text-purple-500 font-[500] 
                                tracking-wide leading-[3.5rem]'>
                            Eager to work together?
                        </h1>
                    </div>
                    
                    <p className='w-[52%] font-ibm text-zinc-400 font-[400] tracking-[.1rem] mt-10 ml-12
                        text-[1.05rem] relative'>
                        Cool stuff takes time & your first step is just an email away. <br/>
                        Fancy a chat about web wonders? Simply drop me a line at  
                        <span className='lowercase text-electro-300 ml-2'>hello@trish.com</span>.<br/>
                        The more specific you are, the better! I'll circle back to you within 1-3 business days,
                        loaded with fresh ideas and perhaps a pun or two.<br/>
                        Thanks for stopping by!
                    </p>

                    <p className='text-[14rem] font-[500] text-[#14062e] tracking-tighter absolute top-28
                        leading-loose'>
                        hello@trish.com
                    </p>
                
                    <div className="flex justify-start items-center mt-[8rem] gap-32 z-20">
                        <button className="flex h-full items-end justify-start font-ibm text-lg font-[400] 
                        text-electro-300 border-[1px] border-dotted border-purple-900 py-1 px-10 uppercase">                                                
                            <a href='mailto:sandy07r@gmail.com' className='w-full tracking-widest'>Send Mail</a>                                                                                                
                        </button>

                         <button className="flex h-full items-end justify-start font-ibm text-lg font-[400]  
                            text-electro-300 border-[1px] border-dotted border-purple-900 py-1 px-10 uppercase">                                              
                            <h3 className='w-full tracking-widest'>Copy Mail </h3>                                                                                                     
                        </button>
                    </div>
                </div>               
                
                <div className="flex justify-end items-end w-[9.6%] ml-24 pb-16 relative left-[99.5rem] top-[10rem]">
                    <ScrollLink to="hero"
                        smooth={true} 
                        duration={500}
                        className='w-full font-ibm text-lg font-[400] text-purple-500'>
                        <span className='text-electro-300 mr-1'>{'<'}</span>
                        back to top
                        <span className='text-electro-300 ml-1'>{'/'}</span>                         
                    </ScrollLink>  
                    <BsChevronUp style={{ color: '#2ef938', fontSize: '1.2rem', margin: '5px 15px 0 0' }} />
                    <hr className="absolute top-16 left-[120px] w-20 border-t-[1px] border-dashed border-electro-300 rotate-90"/>
                </div> 
               
                
                    <div className="w-full h-full flex flex-col mt-[8rem] pl-32">                        
                        <hr className='w-[94%] border-t-[1px] border-dotted border-purple-400 ' />
                        <div className="w-full flex justify-between">
                            <div className="w-full h-full flex font-ibm uppercase text-zinc-400 mt-5
                                tracking-wide">
                                <FaCopyright style={{margin: '.25rem .5rem 0 0', fontSize: '1rem'}}/>
                                {date.getFullYear()}
                                <span className='text-electro-300 mx-3'>Trish Ramos</span>
                                | Crafted with
                                <FaHeart style={{ color: '#2ef938', margin: '5px 10px 0 10px', opacity: '.6' }} />
                                {'by yours truly'}
                            </div>   
                        
                            <p className='w-full h-full flex font-ibm uppercase text-zinc-400 mt-5 pl-[37rem]
                                tracking-wide'>
                                Be kind, Do Good & create web wonders.
                            </p>
                        </div>
                    </div>
                </div>

                
                                 
        </section>
    )
}

export default Footer;




