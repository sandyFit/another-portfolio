import React, { useEffect, useState } from 'react'
import { FaCopyright, FaHeart } from 'react-icons/fa';
import {  BsCheck, BsEmojiSmile, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import TimeZone from '../../components/ui/TimeZone';
import MotionText from '../../components/ui/MotionText';

const Contact = () => {

    const [isClicked, setIsClicked] = useState(false);
    const [showCopiedText, setShowCopiedText] = useState(false);

    const date = new Date();

    const colorSwitch = () => {
    const lightedText = document.querySelector('#emailAddress');
    // Remove the class to reset the animation
    lightedText.classList.remove('revealText');
    // Force reflow/repaint
    void lightedText.offsetWidth;
    // Add the class again to start the animation
    lightedText.classList.add('revealText');
}

    const handleColorClick = () => {
        const emailAddress = 'hello@trishramos.com';
        
        navigator.clipboard.writeText(emailAddress).then(() => {
            console.log('Email address copied to clipboard!');
            setShowCopiedText(true); // Show "Copied" text
            setTimeout(() => {
                setShowCopiedText(false); // Hide "Copied" text after 4 seconds to match the fade animation
            }, 1200); // Adjust the timing based on your animation
        }).catch(err => {
            console.error('Failed to copy email address to clipboard:', err);
        });

        setIsClicked(true);
        colorSwitch();
    };
  

    return (
        <section id='contact' className='w-full h-screen bg-plomo-600 flex flex-col relative'>
            {/* Content */}

            <div className="flex w-full relative">               
                <div className="flex flex-col items-end w-[20%] mt-28 absolute left-[95rem] ">
                    <TimeZone/>
                </div>
            </div>              

            <div className="flex flex-col  w-full h-full pt-48">        
                
                <div className="flex flex-col w-full h-full relative justify-center  pl-8">
                    <h1 className='w-full fontTitle uppercase text-[11rem] text-zinc-400 font-[500] 
                        tracking-[2px] flex '>
                        Let's talk!
                    </h1>
                    
                    <p className='w-[55%] font-ibm text-zinc-400 font-[400] tracking-[.1rem] mt-[-2rem]
                        text-2xl uppercase relative'>
                        For work inquiries, gigs & full-time roles, feel free to reach me out at
                        <span id='emailAddress' className='lowercase text-electro-200 opacity-40 ml-2'>
                            hello@trishramos.com
                        </span>.<br />                       
                        Let's explore opportunities to collaborate & create web wonders together. <br/>                    
                        Thanks for stopping by.
                    </p>
            
                    <div className="flex mt-[2.5rem] w-full">
                        <div className="w-full flex items-center gap-6 z-20">
                            <button className="flex h-full items-end justify-start font-ibm text-lg font-[400] 
                                text-electro-200 border-[1px] border-dotted border-purple-400 px-12 py-2 uppercase">                                                
                                <a href='mailto:sandy07r@gmail.com' className='flex tracking-widest'>Send Mail</a>                                                                                                
                            </button>

                            <button className="flex h-full items-end justify-start font-ibm text-lg font-[400]  
                                text-electro-200 border-[1px] border-dotted border-purple-400 px-12 py-2 uppercase"
                                onClick={handleColorClick}>                                              
                                <h3 className='flex tracking-widest'>Copy Mail </h3>                                                                                                     
                            </button>

                            {showCopiedText && (
                                <h3 className={`flex font-ibm text-lg font-[400] text-purple-500 tracking-widest gap-1 ${showCopiedText ? 'copiedTextVisible' : 'copiedTextHidden'}`}>
                                    Copied <BsCheck style={{fontSize: '2rem', color: '#2ef938'}}/>
                                </h3>
                            )}

                        </div>
                    </div>

                    <article className='flex flex-col justify-evenly items-center h-[26%] text-zinc-300 
                        gap-6 absolute left-[112.8rem]'>
                        
                        <div className="flex p-8 border-2 border-dotted boreder-zinc-300">
                            <BsInstagram style={{ fontSize: '2rem', cursor: 'pointer', transition: 'opacity 0.2s' }}
                                onMouseOver={(e) => e.target.style.opacity = 0.65}
                                onMouseOut={(e) => e.target.style.opacity = 1} />
                        </div>

                        <div className="flex p-8 border-2 border-dotted boreder-zinc-300">
                            <BsLinkedin style={{ fontSize: '2rem', cursor: 'pointer', transition: 'opacity 0.3s' }}
                                onMouseOver={(e) => e.target.style.opacity = 0.65}
                                onMouseOut={(e) => e.target.style.opacity = 1} />
                        </div>

                        <div className="flex p-8 border-2 border-dotted boreder-zinc-300">
                            <BsGithub style={{ fontSize: '2rem', cursor: 'pointer', transition: 'opacity 0.3s' }}
                                onMouseOver={(e) => e.target.style.opacity = 0.65}
                                onMouseOut={(e) => e.target.style.opacity = 1} />
                        </div>
                    </article>
                </div>
                                 
                   
                                                 
                <div className="w-full h-full flex flex-col pt-[11rem]">                        
                    <hr className='w-full border-t-[1px] border-dotted border-purple-400 ' />
                    <div className="w-full flex justify-between">
                        <div className="w-full h-full flex font-ibm uppercase text-zinc-400 mt-5 px-4
                            tracking-wide">
                            <FaCopyright style={{margin: '.25rem .5rem 0 0', fontSize: '1rem'}}/>
                            {date.getFullYear()}
                            <span className='text-electro-200 mx-3'>Trish Ramos</span>
                            | Crafted with
                            <FaHeart style={{ color: '#2ef938', margin: '5px 10px 0 10px', opacity: '.6' }} />
                            {'by yours truly'}
                        </div>   
                    
                        <p className='w-full h-full flex font-ibm uppercase text-zinc-400 mt-5 pl-[51rem]
                            tracking-wide'>
                            Be kind, Do Good & create with passion.
                        </p>
                    </div>
                </div>
            </div> 
                    
        </section>
    )
}

export default Contact