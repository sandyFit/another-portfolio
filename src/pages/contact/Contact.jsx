import React, { useEffect, useState } from 'react'
import { FaCopyright, FaHeart } from 'react-icons/fa';
import {  BsArrowDownRight, BsArrowUpRight, BsCheck, BsEmojiSmile, BsEnvelope, BsGithub, BsInstagram, BsLinkedin, BsMailbox } from 'react-icons/bs';
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

            <div className="flex flex-col w-full h-full justify-center items-center mt-48">        
                 <div className="flex w-full ">
                    <MotionText
                        icon={<BsEmojiSmile />}
                        text1={'you made it here — good move!'}
                        text2={"feel free to reach out"}
                    />
                </div>

                {/* <p className='font-ibm text-2xl text-zinc-400 uppercase font-[400]'>
                    For work inquiries, gigs & full-time roles, feel free to reach out at
                    <span className='lowercase text-electro-200 ml-2'>hello@trishramos.com</span>.
                </p>   */}
                <div className="flex mt-28 ml-72">
                    <a  href='mailto:sandy07r@gmail.com'
                        className="w-[25%] flex text-ibm uppercase tracking-wider
                        relative right-56">
                        <span className='absolute text-[5rem] text-purple-500'><BsEnvelope />
                        <h3 className='text-8xl text-zinc-300 font-[500]'>send email</h3></span>
                        <span className='absolute left-[19rem] top-48 text-[5rem] text-electro-300'>
                            <BsArrowUpRight />
                        </span>
                    </a>

                    <div className="w-[25%] flex text-ibm text-8xl font-[500] text-zinc-300 uppercase tracking-wide pt-20
                        relative">
                        <article className='flex justify-evenly items-center h-[26%] text-purple-600 
                        gap-8 relative left-[16.38rem] -top-16'>
                        
                            <div className="flex ">
                                <BsInstagram style={{ fontSize: '4rem', cursor: 'pointer', transition: 'opacity 0.2s' }}
                                    onMouseOver={(e) => e.target.style.opacity = 0.65}
                                    onMouseOut={(e) => e.target.style.opacity = 1} />
                            </div>

                            <div className="flex ">
                                <BsLinkedin style={{ fontSize: '4rem', cursor: 'pointer', transition: 'opacity 0.3s' }}
                                    onMouseOver={(e) => e.target.style.opacity = 0.65}
                                    onMouseOut={(e) => e.target.style.opacity = 1} />
                            </div>

                            <div className="flex ">
                                <BsGithub style={{ fontSize: '4rem', cursor: 'pointer', transition: 'opacity 0.3s' }}
                                    onMouseOver={(e) => e.target.style.opacity = 0.65}
                                    onMouseOut={(e) => e.target.style.opacity = 1} />
                            </div>
                    </article>

                        <div className="flex relative">
                            <h3>follow trish</h3>
                            <span className='text-[5rem] font-[600] absolute bottom-0 left-72 text-electro-300'>
                                <BsArrowUpRight /></span>
                        </div>
                    </div>
                </div>

               
                                                 
                <div className="w-full h-full flex flex-col pt-[12.3rem]">                        
                    {/* <hr className='w-full border-t-2 border-dotted border-zinc-300 pt-4' /> */}
                    <div className="w-full flex justify-between">
                        <div className="w-[40%] h-full flex font-ibm text-3xl uppercase text-zinc-400 pl-6
                            tracking-wide">
                            <FaCopyright style={{margin: '.4rem .8rem 0 0', fontSize: '1.5rem'}}/>
                            {date.getFullYear()} <br/><br/>
                            <span className='text-electro-200 ml-3 mr-[-60px]'>Trish Ramos</span>
                            <span >Crafted by yours truly</span>
                            {/* <FaHeart style={{ color: '#2ef938', margin: '5px 10px 0 10px', opacity: '.6' }} /> */}
                            
                        </div>   

                        <span className=' w-[30%] lowercase text-ibm text-4xl text-electro-200 tracking-widest ml-40'>
                            hello@trishramos.com
                        </span>.
                    
                        <p className='w-[30%] h-full flex font-ibm text-3xl uppercase text-zinc-400  pl-[10rem]
                            tracking-wide'>
                            Be kind, Do Good & create with passion
                        </p>
                    </div>
                </div>
            </div> 
                    
        </section>
    )
}

export default Contact