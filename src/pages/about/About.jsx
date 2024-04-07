import React, { useEffect, useState } from 'react';
import { BsArrowUpRight, BsAsterisk} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Footer from '../../layouts/Footer';
import TimeZone from '../../components/ui/TimeZone';
import FeatureParagraph from '../../components/features/FeatureParagraph';
import MotionText from '../../components/ui/MotionText';
import TextInMotion from '../../components/ui/TextInMotion';


const About = () => {

    const [isFixed, setIsFixed] = useState(false);

    const handleScroll = () => {
        const currentScrollPosition = window.scrollY;
        const stickyThreshold = 2000;

        setIsFixed(currentScrollPosition < stickyThreshold);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    })

    return (        
        <section
            id="about"
            className="w-full min-h-screen flex flex-col justify-between bg-plum-600 relative text-ibm">        
            
            <div className="flex w-full relative">               
                <div className="flex flex-col items-end w-[20%] mt-28 fixed left-[95rem] ">
                    <TimeZone/>
                </div>
            </div> 
           
            <div className="flex flex-col justify-start items-start relative">

                <div 
                    className={`flex flex-col fixed top-56 left-28 gap-8 ${isFixed ? 'fixed' : 'absolute'}`}>
                    <div className="flex flex-col z-50">

                        <h2 className='w-full font-ibm text-[2.1rem] uppercase text-zinc-300 font-[300] 
                            tracking-[2px] textSlidingLeft'>
                            Designer for Passion
                        </h2>
                        <h2 className='w-full font-ibm text-[2.1rem] uppercase text-purple-500 font-[300] 
                            tracking-[2px] mt-[-.5rem] textSlidingRight'>
                            Developer for Fun
                        </h2>
                       
                    </div>

                    <div className="w-[40%] flex flex-col justify-start items-start h-full textSiliding Left">                                              
                        <div className="flex border-[4rem] border-electro-200 ">

                            <div className="flex w-[320px] h-[340px]">
                                <img src="/me-bn.png" alt="Trish Avatar"/>
                            </div>
                        </div>
                        
                    </div>
                </div>
                

                <div className="flex flex-col w-full items-end h-full mt-72 mb-40">                                                        
                    <div className="flex flex-col w-[68%] pl-44 pr-48">
                        
                        <h2 className='w-full fontTitle uppercase text-[10rem] text-zinc-300 font-[500] 
                            tracking-[2px] mt-24'>
                            who i
                            <span className='text-purple-500 ml-16'>am</span>
                        </h2>
                                                   
                        <FeatureParagraph>       
                            I'm a graphic designer at heart. Driven by my fascination for all                            
                            things digital, I embarked on a self-taught journey to expand my                                
                            expertise into web development, with a keen focus on the artistry of frontend design.                                          
                            <br /><br />
                        </FeatureParagraph>
                        <FeatureParagraph>   
                            Today, I stand as a creative developer, blending the worlds of                              
                            design and code.<br/><br/>
                        </FeatureParagraph>   
                        <FeatureParagraph>       
                            I'm currently on the lookout for  full-time roles or
                            freelance gigs that challenge my skills and stoke my passion for design and development.
                            Fell free to reach out here
                            <Link to={'/contact'}>
                                <BsArrowUpRight className='relative bottom-[2.5rem] left-[20.5rem] text-electro-300' />
                            </Link>                       
                        </FeatureParagraph>
                        <FeatureParagraph> 
                            Away from the screen, I'm indulging in life's varied rhythms — be it                                                                
                            engaging in gym workouts, mastering the craft of baking yum yums, or          
                            channeling my quirky side through drawing.                                                         
                         </FeatureParagraph>

                                                                    
                    </div>
                </div>

                <div className="w-full flex flex-col bg-zinc-400 rounded-[100px] card-container">
                    <h2 className='w-full fontTitle uppercase text-[11rem] text-plomo-600 font-[500]  
                                tracking-[-5px] mt-36 text-center'>
                                what i 
                                <span className='text-purple-700 ml-24'>do</span>
                            </h2>  

                    <div className="w-full flex relative  ">
                        <div className="w-full flex rotate-[4deg] ">
                            <MotionText
                                icon={<BsAsterisk className='rotating-icon'/>}
                                text1={'web design'}
                                text2={'web development'}
                                text3={'motion'}
                            />
                        </div>
                        <div className="w-full flex -rotate-[4deg] absolute bottom-0">
                            <TextInMotion
                                icon={<BsAsterisk className='rotating-icon'/>}
                                text1={'HTML'}
                                text2={'CSS'}
                                text3={'JAVASCRIPT'}
                                text4={'react'}
                                text5={'node js'}
                                text6= {'webflow'}
                            />
                        </div>
                    </div>

                    <div className="w-full flex flex-col justify-center items-center mt-36 px-56">
                        <FeatureParagraph>
                            Transitioning from design to creative development has not only broadened my skill set but also solidified my commitment 
                            to build digital products that are the perfect blend of meaningful aesthetics and function.
                        </FeatureParagraph>
                        <div className="flex justify-start items-start mt-20">
                            <h2 className='text-6xl text-purple-600 font-[400] uppercase '>
                                My core tools
                            </h2>
                        </div>
                    </div>

                    <div className="w-full flex flex-col justify-center items-center">
                        <div className="card">
                            <h2>Web Design</h2>

                        </div>
                        <div className="card">
                            <h2>Web Development</h2>

                        </div>
                        <div className="card">
                            <h2>Motion Design</h2>

                        </div>

                    </div>
                </div>

                <div className="w-full h-full flex justify-center bg-plomo-600">                                        
                    <h2 className='w-full fontTitle uppercase text-[11rem] text-zinc-300 font-[500]  
                        tracking-[-5px] mt-36 text-center'>
                        What they say about me
                    </h2>
                </div>

                <div className="w-full h-full flex flex-col pt-[5.8rem]">                        
                    <Footer/>
                </div>
            </div>
                          
        </section>
    );
};

export default About;
