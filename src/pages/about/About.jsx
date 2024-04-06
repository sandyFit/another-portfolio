import React, { useEffect, useState } from 'react';
import { BsArrowUpRight} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Footer from '../../layouts/Footer';
import TimeZone from '../../components/ui/TimeZone';

const About = () => {
    
    const [isSticky, setIsSticky] = useState(false);

    const handleScroll = () => {
        const currentScrollPosition = window.scrollY;
        const stickyThreshold = 2500;

        setIsSticky(currentScrollPosition < stickyThreshold)
    }

    useEffect(() => {
        handleScroll();

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return (        
        <section
            id="about"
            className="w-full min-h-screen flex flex-col justify-between bg-plum-600 relative ">        
            
            <div className="flex w-full relative">               
                <div className="flex flex-col items-end w-[20%] mt-28 fixed left-[95rem] ">
                    <TimeZone/>
                </div>
            </div> 
           
            <div className="flex flex-col justify-start items-start relative">

                <div className={`flex flex-col ${isSticky ? 'fixed' : 'absolute'} top-36 left-28 gap-8`}>
                    <div className="flex flex-col ">

                        <h2 className='w-full font-ibm text-[2.1rem] uppercase text-zinc-300 font-[300] 
                            tracking-[2px] textSlidingLeft'>
                            Designer for Passion
                        </h2>
                        <h2 className='w-full font-ibm text-[2.1rem] uppercase text-purple-500 font-[300] 
                            tracking-[2px] mt-[-.5rem] textSlidingRight'>
                            Developer for Fun
                        </h2>
                       
                    </div>

                    <div className="w-[40%] flex flex-col justify-start items-start h-full ">                                              
                        <div className="flex border-[4rem] border-electro-200 ">

                            <div className="flex w-[320px] h-[340px]">
                                <img src="/me-bn.png" alt="Trish Avatar"/>
                            </div>
                        </div>
                        
                    </div>
                </div>
                

                <div className="flex flex-col w-full items-end h-full mt-56 ">                                                        
                    <div className="flex flex-col w-[68%] pl-44 pr-40">
                        
                        <h2 className='w-full fontTitle uppercase text-[11rem] text-zinc-300 font-[500] 
                            tracking-[2px] mt-24'>
                            who i
                            <span className='text-purple-500 ml-16'>am</span>
                        </h2>
                                                   
                        <div className='w-full font-ibm text-zinc-400 font-[300] tracking-wider mr-20 mt-[-1rem]
                            text-[2.8rem] leading-[60px]'>       

                            I'm a graphic designer at heart. Driven by my fascination for all                            
                            things digital, I embarked on a self-taught journey to expand my                                
                            expertise into web development, with a keen focus on the artistry of frontend design.                                          
                            <br /><br />
                            
                            Today, I stand as a creative developer, blending the worlds of                              
                            design and code.<br/><br/>
                            This journey has not only broadened my skill set but also solidified my commitment to
                            build digital products that are the perfect blend of meaningful aesthetics and function.
                            <br /><br />
                                                        
                            I'm currently on the lookout for  full-time roles or
                            freelance gigs that challenge my skills and stoke my passion for design and development.
                            Fell free to reach out here
                            <Link to={'/contact'}>
                                <BsArrowUpRight className='relative bottom-[3.5rem] left-[15rem] text-electro-300' />
                            </Link>                       
                            
                            Away from the screen, I'm indulging in life's varied rhythms — be it                                                                
                            engaging in gym workouts, mastering the craft of baking yum yums, or          
                            channeling my quirky side through drawing.                                                         
                            
                        </div>

                        

                        <h2 className='w-full fontTitle uppercase text-[11rem] text-zinc-300 font-[500] 
                            tracking-[-5px] mt-24 '>
                            my
                            <span className='text-purple-500 ml-24'>skills</span>
                        </h2>
                        
                    </div>
                </div>

                <div className="w-full h-full flex flex-col pt-[5.8rem]">                        
                    <Footer/>
                </div>
            </div>
                          
        </section>
    );
};

export default About;
