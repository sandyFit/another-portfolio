import React, { useEffect, useState } from 'react';

const About = () => {
    const [currentTime, setCurrentTime] = useState('');

    const getCurrentTimeWithTimezone = () => {
        const now = new Date();
        const options = {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        }
        const timeZone = 'America/Bogota';
        const formatter = new Intl.DateTimeFormat('en-US', { ...options, timeZone });
        const formattedTime = formatter.format(now);
        return formattedTime;    
    }
    useEffect(() => {
        const updateTime = (() => {
            setCurrentTime(getCurrentTimeWithTimezone());
        })

        updateTime();

        const intervalId = setInterval(updateTime, 1000);

        return () => clearInterval(intervalId);
    })
    


    return ( 
        
        <section
            id="about"
            className="w-full min-h-screen flex flex-col justify-between bg-slate-950 relative "
        >               
            <div className="flex w-full relative">
                
                <div className="flex flex-col items-end w-[20%] mt-28 pr-6 fixed left-[93.5rem] ">
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

            <div className="flex flex-col justify-start items-start ">

                <div className="flex flex-col fixed top-48 left-48 gap-8">
                    <div className="flex flex-col">

                        <h2 className='w-full fontTitle text-[2.3rem] text-zinc-300 font-[500] 
                            tracking-[2px] textSlidingLeft'>
                            Designer for Passion, 
                        </h2>
                        <h2 className='w-full fontTitle text-[2.3rem] text-purple-500 font-[500] 
                            tracking-[2px] mt-[-.5rem] textSlidingRight'>
                            Developer for Fun
                        </h2>
                    </div>

                    <div className="w-[40%] flex flex-col justify-start items-start h-full relative 8">                                              
                        <div className="flex border-[4rem] border-electro-200 ">

                            <div className="flex w-[350px] h-[380px]">
                                <img src="/me-bn.png" alt="Trish Avatar"/>
                            </div>
                        </div>
                        
                    </div>
                </div>
                

                <div className="flex flex-col w-full items-end h-full mt-40 pr-8">                                                        
                    <div className="flex flex-col w-[58%] pl-28 pr-36">
                        
                        <h2 className='w-full fontTitle uppercase text-[9rem] text-zinc-300 font-[500] 
                            tracking-[2px] mt-24 '>
                            who i
                            <span className='text-purple-500 ml-16'>am</span>
                        </h2>
                                                   
                        <p className='w-full font-ibm text-zinc-400 font-[300] tracking-[.1rem] mt-3  mr-20
                            text-[1.2rem] uppercase relative'>
                            I'm a graphic designer at heart. Driven by my passion for all things digital, I embarked on a
                            self-taught journey to expand my expertise into web development, with a keen focus
                            on the artistry of frontend design.
                            <br/><br/>
                            Today, I stand as a creative developer, blending the worlds of design and code.
                            This journey has not only broadened my skill set but also solidified my commitment to build
                            digital products that are the perfect blend of meaningful aesthetics and function.
                            <br/><br/>
                            I'm currently on the lookout for full-time roles or freelance gigs that challenge my skills and
                            stoke my passion for design and development.
                            <br/><br/>
                            Away from the screen, I'm indulging in life's varied rhythms — be it engaging in gym workouts,
                            mastering the craft of baking yum yums, or channeling my quirky side through drawing.
                        </p>

                        <h2 className='w-full fontTitle uppercase text-[9rem] text-zinc-300 font-[500] 
                            tracking-[2px] mt-24 '>
                            my
                            <span className='text-purple-500 ml-24'>skills</span>
                        </h2>
                        
                    </div>
                </div>
            </div>
                          
        </section>
    );
};

export default About;
