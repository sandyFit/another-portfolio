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
            className="w-full h-screen flex flex-col justify-between bg-slate-950 relative "
        >               
            <div className="flex justify-between w-full relative">
                <div className="flex absolute top-36 left-32">
                    <h3 className='font-ibm text-lg font-[400] text-purple-500'>
                        <span className='text-electro-300'>{'<'}</span>
                        creative
                        <span className='text-electro-300'>{'/>'}</span>
                        
                    </h3>
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

            <div className="flex w-full justify-center items-center h-full px-36">                  
                <div className="w-1/2 flex flex-col justify-center items-start h-full relative pl-48 pt-40">
                   <div className=" flex justify-start gap-2">
                        
                        <h1 className='w-full font-ibm uppercase text-[2.5rem] text-purple-500 font-[500] 
                                tracking-widest flex'>
                            {/* <span><BsEmojiSmile style={{fontSize: '2.6rem', margin:'22px 20px 0 0'}}/></span> */}
                            I'm a designer
                        </h1>
                    </div>  
                    <div className="flex border-[4rem] border-electro-200 mt-6">

                        <div className="flex w-[300px] h-[300px]">
                            <img src="/me-bn.png" alt="Trish Avatar"/>
                        </div>
                    </div>
                    
                </div>

                <div className="flex w-1/2 ">
                    <p className='w-full font-ibm text-zinc-400 font-[400] tracking-[.1rem] mt-36 px-20 mr-20
                        text-[1.05rem] relative'>
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
                        Away from the screen, I'm indulging in life's varied rhythms—be it engaging in gym workouts,
                        mastering the craft of baking yum yums, or channeling my quirky side through drawing.
                    </p>
                </div>
            </div>
           

                
        </section>
    );
};

export default About;
