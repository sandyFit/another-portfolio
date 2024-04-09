import React, { useEffect, useState } from 'react';
import { BsArrowUp, BsArrowUpRight, BsAsterisk} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Footer from '../../layouts/Footer';
import TimeZone from '../../components/ui/TimeZone';
import FeatureParagraph from '../../components/features/FeatureParagraph';
import TextInMotion from '../../components/ui/TextInMotion';
import ContactBtn from '../../components/ui/ContactBtn';
import { Link as ScrollLink } from 'react-scroll';


const About = () => {

    const [isFixed, setIsFixed] = useState(false);

    const handleScroll = () => {
        const currentScrollPosition = window.scrollY;
        const stickyThreshold = 1600;

        setIsFixed(currentScrollPosition < stickyThreshold);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    })

    return (        
        <section
            id="about"
            className="w-full min-h-screen flex flex-col justify-between relative  text-ibm">        
            
            <div className="flex w-full relative">               
                <div className="flex flex-col items-end w-[20%] mt-28 absolute left-[93.5rem] ">
                    <TimeZone/>
                </div>
            </div> 
           
            <div className="flex flex-col justify-start items-start relative">
                <div 
                    className={`flex flex-col fixed top-56 left-28 gap-8 ${isFixed ? 'fixed' : 'absolute'}`}>
                    <div className="flex flex-col z-50">

                        <h2 className='w-full font-ibm text-[2.1rem] uppercase text-zinc-800 font-[500] 
                            tracking-[2px] textSlidingLeft'>
                            Designer for Passion
                        </h2>
                        <h2 className='w-full font-ibm text-[2.1rem] uppercase text-zinc-300 font-[500] 
                            tracking-[2px] mt-[-.5rem] textSlidingRight'>
                            Developer for Fun
                        </h2>
                       
                    </div>

                    <div className="w-[40%] flex flex-col justify-start items-start h-full textSlidingLeft">                                              
                        <div className="flex w-[460px] h-[500px] justify-center items-center relative custom-bg">
                            <div className="flex w-[320px] h-[340px] z-20 absolute">
                                <img src="/me-bn.png" alt="Trish Avatar"/>
                            </div>                       
                        </div>                       
                    </div>
                </div>
                

                <div className="flex flex-col w-full items-end h-full mt-72 mb-40">                                                        
                    <div className="flex flex-col w-[68%] pl-44 pr-48">
                        
                        <h2 className='w-full font-ibm uppercase text-[10rem] text-zinc-300 font-[500] 
                            tracking-[2px] mt-24'>
                            who i
                            <span className='text-zinc-900 ml-12'>am_</span>
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
                            Fell free to <span className='font-[600] text-zinc-900'> reach out</span> here
                            <Link to={'/contact'}>
                                <BsArrowUpRight className='relative bottom-[2.5rem] left-[20.5rem] text-zinc-900' />
                            </Link>                       
                        </FeatureParagraph>
                        <FeatureParagraph> 
                            Away from the screen, I'm indulging in life's varied rhythms — be it                                                                
                            engaging in gym workouts, mastering the craft of baking yum yums, or          
                            channeling my quirky side through drawing.                                                         
                         </FeatureParagraph>

                                                                    
                    </div>
                </div>

                <div className="w-[90%] flex flex-col justify-start items-center bg-zinc-900 rounded-[40px]
                    mt-32 mx-auto card-container">

                    <div className="flex justify-start items-center pr-16 pt-48 relative">

                        <h2 className='flex items-center justify-start w-full font-ibm uppercase text-[9rem] text-zinc-200 
                            font-[400] tracking-[-5px] ml-16'> 
                            what i 
                            <span className='text-orangi-400 ml-24'>do</span>
                        </h2>
  

                        <p className='w-full font-ibm text-[2.2rem] font-[300] text-zinc-400 tracking-wider
                             leading-tight ml-8'>
                            Transitioning from design to creative development has solidified my commitment 
                            to build digital products that are the perfect blend of meaningful aesthetics and function.<br/>
                            Check out my <span className='text-orangi-400'>work</span> here 
                            <Link to={'/projects'}>
                                <BsArrowUpRight className='relative bottom-[2.5rem] left-[32rem] text-orangi-400' />
                            </Link>
                        </p>
                        
                    </div>

                    <div className="w-full flex flex-col justify-center items-center relative">
                        <div className="card bg-zinc-900 flex justify-start border-t-[1px] border-dotted border-zinc-300
                            items-start relative">

                            <BsAsterisk className='rotating-icon text-3xl text-zinc-300 absolute top-[4.4rem] left-12'/>
                            <h2 className='about-title text-zinc-300 z-10'> 
                                web 
                                <span className='about-title text-orangi-400 ml-8'>design</span>
                            </h2>
                            

                            <div className="flex gap-32 relative">

                                <p className='about-text'>
                                    Intentional design begins with a deep understanding of a business's purpose, followed by
                                    a creative leap that enables me to design digital experiences that people loves.
                                </p>

                                <div className="flex text-[25rem] text-zinc-800 font-[700] absolute top-3 left-[75rem]">
                                    01</div>

                                <ul className="w-[60%] flex flex-col gap-6 mt-16 z-20">                                   
                                    <li className="services-list">
                                        — Responsive Design
                                    </li>
                                                               
                                    <li className="services-list">
                                        — Wireframing
                                    </li>
                                                                
                                    <li className="services-list">
                                        — Prototyping
                                    </li>
                                    
                                </ul>
                            </div>

                        </div>
                    <div className="w-full flex flex-col justify-center items-center relative z-20">
                        
                        <div className="card bg-zinc-900 flex justify-start border-t-[1px] border-dotted border-zinc-300
                            items-start relative">

                            <BsAsterisk className='rotating-icon text-3xl text-zinc-300 absolute top-[4.4rem] left-12'/>
                            <h2 className='about-title text-zinc-300'> 
                                web 
                                <span className='about-title text-orangi-400 ml-8'>development</span>
                            </h2>
                            

                            <div className="flex gap-32 relative">

                                <p className='about-text'>
                                    I craft bespoke websites that resonate with your brand identity.
                                    My approach emphasizes scalability, performance, accessibility, and captivating animations,
                                    ensuring a standout and memorable online presence.
                                </p>

                                <div className="flex text-[25rem] text-zinc-800 bg-opacity-60 font-[700] absolute top-3 left-[75rem]">
                                    02</div>

                                <ul className="w-[60%] flex flex-col gap-6 mt-16 z-20">                                   
                                    <li className="services-list">
                                        — Frontend Development
                                    </li>                        
                                                                
                                    <li className="services-list">
                                        — CMS integrations
                                        </li>
                                        
                                        <li className="services-list">
                                        — on-page SEO
                                    </li>
                                    
                                </ul>
                            </div>
                        
                        </div>

                        <div className="card bg-zinc-900 flex justify-start border-t-[1px] border-dotted border-zinc-300
                            items-start relative z-30">

                            <BsAsterisk className='rotating-icon text-3xl text-zinc-300 absolute top-[4.4rem] left-12'/>
                            <h2 className='about-title text-zinc-300'> 
                                motion 
                                <span className='about-title text-orangi-400 ml-8'>design</span>
                            </h2>
                            

                            <div className="flex gap-32 relative">
                                <p className='about-text'>
                                    I craft bespoke websites that resonate with your brand identity.
                                    My approach emphasizes scalability, performance, accessibility, and captivating animations,
                                    ensuring a standout and memorable online presence.
                                </p>

                                <div className="flex text-[25rem] text-zinc-800 bg-opacity-60 font-[700] absolute top-3 left-[75rem]">
                                    03</div>

                                <ul className="w-[60%] flex flex-col gap-6 mt-16 z-20">                                   
                                    <li className="services-list">
                                        — Animations
                                    </li>
                                                               
                                    <li className="services-list">
                                        — micro-interactions
                                    </li>
                                                                
                                    <li className="services-list">
                                        — transitions
                                    </li>
                                    
                                </ul>
                            </div>

                        </div>
                        
                        <div className="card  flex justify-start items-start relative  border-none -z-20 pb-20"></div>
                       </div> 
                        
                        
                        <div className="w-full flex flex-col absolute top-[210rem] bg-zinc-900 z-50">
                            <hr className="flex border-t-[1px] border-dotted border-zinc-300" />
                            <div className="flex justify-center items-center pr-12 py-48 relative">
                                <h2 className='flex items-center justify-start w-full font-ibm uppercase text-[10rem] text-zinc-300 
                                    font-[400] tracking-[-5px] ml-16'> 
                                    my 
                                    <span className='text-orangi-400 ml-16'>tools</span>
                                </h2>      

                                <p className='w-full font-ibm text-[2.2rem] font-[300] text-zinc-400 tracking-wider
                                    leading-tight'>
                                    There are many tools that can be used for design, animation and web development, 
                                    but I have my favorites that help me craft the best digital experiences. 
                                    Tools may come and go, and I'm always keen to explore new innovations. :)
                                </p>                               
                            </div>

                            <TextInMotion
                                icon={<BsAsterisk className='rotating-icon'/>}
                                text1={'javascript'}
                                text2={'React'}
                                text3={'after effects'}
                                text4={'webgl'}
                                text5={'node js'}
                                text6={'webflow'}
                                text7={'figma'}
                            />
                        </div>
                    </div>
                </div>

                <div className="w-full h-[calc[100vh-100px]] flex flex-col mt-12 relative">

                    <div className="w-full flex pl-24">                                        
                        <h2 className='w-full font-ibm uppercase text-[8rem] text-zinc-300 font-[500] 
                            tracking-[2px] leading-[120px] mt-24'>
                            you made it here <br/>
                            <span className='text-zinc-900'>good move!</span>
                        </h2>
                    </div>

                    <ScrollLink
                        to={'about'}
                        smooth={true}
                        duration={600}
                        className="w-[5%] flex border-[3px] border-dotted border-zinc-900 p-6 
                        absolute top-72 left-[110rem] ">
                       <BsArrowUp style={{color: '#d4d4d8', fontSize: '3rem',}}/>
                    </ScrollLink>

                    <div className="w-[28%] flex mt-64 pb-24  relative  left-[84rem]">
                        {/* <p className='w-full font-ibm font-[400] text-zinc-300 text-[5rem] uppercase mr-[2rem]'>
                            feel free to
                        </p> */}
                        <ContactBtn />
                    </div>
                </div>              

                <div className="w-full flex pt-[2rem]">                        
                    <Footer/>
                </div>
            </div>
                          
        </section>
    );
};

export default About;
