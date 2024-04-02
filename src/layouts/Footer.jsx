import React, { useEffect, useState } from 'react'
import { FaCircle, FaCopyright, FaHeart } from 'react-icons/fa';
import { BsCheck, BsCheckCircle, BsChevronUp, BsEmojiSmile } from 'react-icons/bs';
import { Link as ScrollLink } from 'react-scroll';


const Footer = () => {

    const [currentTime, setCurrentTime] = useState('');
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
        <section id='contact' className='w-full h-screen bg-slate-950 flex flex-col relative'>
            {/* Content */}

            <div className="flex justify-between w-full relative">
                <div className=" flex justify-start items-center font-ibm text-lg font-[400] text-purple-500 
                    ml-24 mb-10 relative top-36 left-8">                    
                    <span className='text-electro-200 mr-1'>{'<'}</span>
                    <h3 className='w-full tracking-widest'>good move</h3> 
                    <span className='text-electro-200'>{'/>'}</span>                                             
                </div> 
                <div className="flex flex-col items-end w-[20%] mt-28 pr-6 absolute left-[93.5rem] ">
                    <h3 className='font-ibm text-lg font-[400] text-purple-500'>
                        <span className='text-electro-200'>{'<'}</span>
                        timezone
                        <span className='text-electro-200'>{'/>'}</span>
                        
                    </h3>
                    <div className='w-full text-zinc-400 uppercase font-ibm font-[400] text-right'
                        id='currentTime'
                    >
                        Bogota gmt-5 <br /> <span className='tracking-wider'>{currentTime}</span>
                    </div>
                </div>
            </div>  

             

             <div className="flex flex-col w-full h-full ">                  
                <div className="flex flex-col w-full h-full relative pl-48 pt-40">
                   <div className="w-full flex justify-start gap-2">
                        
                        <h1 className='w-full font-ibm uppercase text-[2.5rem] text-purple-500 font-[500] 
                                tracking-widest flex'>
                            <span><BsEmojiSmile style={{fontSize: '2rem', margin:'16 px 20px 0 0'}}/></span>
                            You made it here — Let's talk!
                        </h1>
                    </div>  
                    
                    <p className='w-[55%] font-ibm text-zinc-400 font-[400] tracking-[.1rem] mt-4 
                        text-[1.05rem] relative'>
                        For work inquiries, gigs & full-time roles, feel free to reach me out at
                        <span className='lowercase text-electro-200 ml-2'>hello@trishramos.com</span>.<br/>                       
                        Let's explore opportunities to collaborate and create web wonders together. <br/>                    
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
                </div>             
                <ScrollLink to="hero"
                    smooth={true}
                    duration={500}
                >   
                    <div className="flex justify-end items-end w-[10%] h-full pl-[12rem]  relative left-[102rem] 
                        bottom-[5rem]">
                        <button className='w-full font-ibm text-lg font-[400] text-purple-500 rotate-90 '>                                                     
                            {/* <span className='text-electro-200 mr-1'>{'<'}</span> */}
                            <span className='w-full '>top</span>                                      
                            <span className='text-electro-200 ml-1'>{'/>'}</span>                                                 
                        </button>
                        <div className="absolute bottom-16 left-[150px] w-20 ">
                            <BsChevronUp style={{ color: '#2ef938', fontSize: '1.2rem', margin: '0 0 40px 30px' }} />
                            <hr className="border-t-[1px] border-dashed border-electro-200 rotate-90"/>
                        </div>
                    </div> 
               </ScrollLink>  
                
                <div className="w-full h-full flex flex-col mt-[20rem] pl-32">                        
                    <hr className='w-[96%] border-t-[1px] border-dotted border-purple-400 ' />
                    <div className="w-full flex justify-between">
                        <div className="w-full h-full flex font-ibm uppercase text-zinc-400 mt-5
                            tracking-wide">
                            <FaCopyright style={{margin: '.25rem .5rem 0 0', fontSize: '1rem'}}/>
                            {date.getFullYear()}
                            <span className='text-electro-200 mx-3'>Trish Ramos</span>
                            | Crafted with
                            <FaHeart style={{ color: '#2ef938', margin: '5px 10px 0 10px', opacity: '.6' }} />
                            {'by yours truly'}
                        </div>   
                    
                        <p className='w-full h-full flex font-ibm uppercase text-zinc-400 mt-5 pl-[38rem]
                            tracking-wide'>
                            Be kind, Do Good & create with passion.
                        </p>
                    </div>
                </div>
            </div> 

            <p id='emailAddress' className='text-[11.1rem] font-[500] text-electro-200 opacity-5 tracking-tight 
            absolute top-[37rem] left-28 '>
                hello@trishramos.com
            </p> 
                                 
        </section>
    )
}

export default Footer;




