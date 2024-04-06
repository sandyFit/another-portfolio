import React, {useState } from 'react'
import { BsArrowUpRight, BsCheck, BsEmojiSmile, BsEmojiWink, BsEnvelope, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import TimeZone from '../../components/ui/TimeZone';
import Footer from '../../layouts/Footer';

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

            <div className="flex flex-col w-full h-full justify-center items-center mt-48 overflow-hidden">        
                 
                <div className="flex ">
                    <h1 className='w-full text-center font-ibm uppercase text-[2.8rem] text-zinc-500 font-[400] 
                        tracking-[2px] flex gap-6'>
                        <span className='textSlidingLeft'>Caught Your Eye?</span> 
                        <span><BsEmojiWink style={{ fontSize: '2rem', marginTop: '1.1rem' }}/></span> —
                        <span className='textSlidingRight'>feel free to reach out</span>
                    </h1>
                </div>

                <div className="flex mt-16 ml-72">
                    <a  href='mailto:sandy07r@gmail.com'
                        className="w-[30%] flex text-ibm uppercase tracking-wider flex-col ml-28 relative">
                        <span className=' text-[5rem] text-purple-500'><BsEnvelope /></span>
                        <h3 className='text-8xl text-zinc-300 font-[500]'>drop an email</h3>
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

                <button className="flex flex-col justify-center items-center"
                    onClick={handleColorClick}>
                    <p id='emailAddress'
                        className=' w-full text-center lowercase text-ibm text-4xl text-zinc-500 font-[300] 
                        tracking-widest mt-20'>
                        hello@trishramos.com
                    </p>
                    {showCopiedText && (
                        <h3 className={`flex font-ibm text-lg font-[400] text-purple-500 tracking-widest gap-1 
                            absolute
                            ${showCopiedText ? 'copiedTextVisible' : 'copiedTextHidden'}`}>
                            Copied <BsCheck style={{fontSize: '2rem', color: '#2ef938'}}/>
                        </h3>
                    )}
                </button>
                                                 
                <div className="w-full h-full flex flex-col pt-[5.8rem]">                        
                    <Footer/>
                </div>
            </div> 
                    
        </section>
    )
}

export default Contact