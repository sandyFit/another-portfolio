import React, { useEffect, useState } from 'react';
import { BsArrowUpRight, BsAsterisk} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Footer from '../../layouts/Footer';
import TimeZone from '../../components/ui/TimeZone';
import FeatureParagraph from '../../components/features/FeatureParagraph';
import TextInMotion from '../../components/ui/TextInMotion';
import ContactBtn from '../../components/ui/ContactBtn';


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
                        <h2 className='w-full font-ibm text-[2.1rem] uppercase text-zinc-300 font-[300] 
                            tracking-[2px] mt-[-.5rem] textSlidingRight'>
                            Developer for Fun
                        </h2>
                       
                    </div>

                    <div className="w-[40%] flex flex-col justify-start items-start h-full textSlidingLeft">                                              
                        <div className="flex w-[460px] h-[500px] justify-center items-center border-2 border-dotted 
                        border-zinc-900  relative bg-zinc-300">
                            
                            {/* New wrapper div for padding*/}
                            <div className="flex justify-center items-center w-full h-full p-4 bg-zinc-300">
                                <div className="flex w-[320px] h-[340px] z-20 absolute">
                                    <img src="/me-bn.png" alt="Trish Avatar"/>
                                </div>
                            </div>
                        </div>                       
                    </div>
                </div>
                

                <div className="flex flex-col w-full items-end h-full mt-72 mb-40">                                                        
                    <div className="flex flex-col w-[68%] pl-44 pr-48">
                        
                        <h2 className='w-full fontTitle uppercase text-[8rem] text-zinc-300 font-[500] 
                            tracking-[2px] mt-24'>
                            who i
                            <span className='text-salmon-400 ml-12'>am</span>
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
                                <BsArrowUpRight className='relative bottom-[2.5rem] left-[20.5rem] text-salmon-400' />
                            </Link>                       
                        </FeatureParagraph>
                        <FeatureParagraph> 
                            Away from the screen, I'm indulging in life's varied rhythms — be it                                                                
                            engaging in gym workouts, mastering the craft of baking yum yums, or          
                            channeling my quirky side through drawing.                                                         
                         </FeatureParagraph>

                                                                    
                    </div>
                </div>

                <div className="w-full flex flex-col justify-center items-center bg-salmon-400 rounded-[60px] mt-32
                    card-container">

                    <div className="flex justify-center items-center pr-12 py-28 relative">

                        <h2 className='flex items-center justify-center w-full fontTitle uppercase text-[8rem] text-zinc-300 font-[900]  
                            tracking-[-5px]'> 
                            what i 
                            <span className='text-zinc-900 ml-8'>do</span>
                        </h2>
  

                        <p className='w-full font-ibm text-[2.2rem] font-[300] text-zinc-900 tracking-wider
                             leading-tight'>
                            Transitioning from design to creative development has solidified my commitment 
                            to build digital products that are the perfect blend of meaningful aesthetics and function.
                        </p>
                        
                    </div>
                    {/* <hr className='w-full border-t-[1px] border-dotted border-zinc-900 pt-4' /> */}

                    <div className="w-full flex flex-col justify-center items-center relative">
                        <div className="card bg-zinc-300 border-2 border-dotted border-zinc-900 flex justify-start 
                            items-start relative">
                            <BsAsterisk className='rotating-icon text-3xl text-zinc-500 absolute top-20 right-[90.5rem]'/>
                            <h2 className='about-title'>
                                Web Design
                            </h2>
                            <p className='about-text'>
                                Intentional design begins with a deep comprehension of a business's purpose, followed by
                                an imaginative leap to craft a digital experience that people loves.
                            </p>

                            <div className="flex mt-9 gap-16">
                                <div className="flex bg-zinc-300 px-6 py-2 border-2 border-dotted border-zinc-900">
                                    <div className="flex text-ibm text-zinc-900 text-2xl uppercase font-[400]">
                                        <p>Responsive Design</p>
                                    </div>
                                </div>
                                <div className="flex bg-zinc-300 px-6 py-2 border-2 border-dotted border-zinc-900">
                                    <div className="flex text-ibm text-zinc-900 text-2xl uppercase font-[400]">
                                        <p>Wireframing</p>
                                    </div>
                                </div>
                                <div className="flex bg-zinc-300 px-6 py-2 border-2 border-dotted border-zinc-900">
                                    <div className="flex text-ibm text-zinc-900 text-2xl uppercase font-[400]">
                                        <p>Prototyping</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="card bg-zinc-300 border-2 border-dotted border-zinc-900 flex justify-start 
                            items-start relative">
                            <BsAsterisk className='rotating-icon text-3xl text-zinc-500 absolute top-20 right-[90.5rem]'/>
                            <h2 className='about-title'> 
                                Web Development
                            </h2>
                            
                            <p className='about-text'>
                                I craft bespoke websites that resonate with your brand identity.
                                My approach emphasizes scalability, performance, accessibility, and captivating animations,
                                ensuring a standout and memorable online presence.
                            </p>
                            
                            <div className="flex mt-9 gap-16">
                                <div className="flex bg-zinc-300 px-6 py-2 border-2 border-dotted border-zinc-900">
                                    <div className="flex text-ibm text-zinc-900 text-2xl uppercase font-[400]">
                                        <p>Frontend development</p>
                                    </div>
                                </div>
                                <div className="flex bg-zinc-300 px-6 py-2 border-2 border-dotted border-zinc-900">
                                    <div className="flex text-ibm text-zinc-900 text-2xl uppercase font-[400]">
                                        <p>On-page seo</p>
                                    </div>
                                </div>
                                <div className="flex bg-zinc-300 px-6 py-2 border-2 border-dotted border-zinc-900">
                                    <div className="flex text-ibm text-zinc-900 text-2xl uppercase font-[400]">
                                        <p>CMS integrations</p>
                                    </div>
                                </div>                               
                            </div>
                        </div>

                        <div className="card bg-zinc-300 border-2 border-dotted border-zinc-900 flex justify-start 
                            items-start relative">
                            <BsAsterisk className='rotating-icon text-3xl text-zinc-500 absolute top-20 right-[90.5rem]'/>
                            <h2 className='about-title'> 
                                Motion Design
                            </h2>
                            <p className='about-text'>
                                Transitioning from design to creative development has solidified my commitment 
                                to build digital products that are the perfect blend of meaningful aesthetics and function.
                            </p>

                            <div className="flex mt-9 gap-16">
                                <div className="flex bg-zinc-300 px-6 py-2 border-2 border-dotted border-zinc-900">
                                    <div className="flex text-ibm text-zinc-900 text-2xl uppercase font-[400]">
                                        <p>Animations</p>
                                    </div>
                                </div>
                                <div className="flex bg-zinc-300 px-6 py-2 border-2 border-dotted border-zinc-900">
                                    <div className="flex text-ibm text-zinc-900 text-2xl uppercase font-[400]">
                                        <p>micro-interactions</p>
                                    </div>
                                </div>
                                <div className="flex bg-zinc-300 px-6 py-2 border-2 border-dotted border-zinc-900">
                                    <div className="flex text-ibm text-zinc-900 text-2xl uppercase font-[400]">
                                        <p>transitions</p>
                                    </div>
                                </div>
                            </div>

                        </div>      
                        
                        <div className="card  flex justify-start items-start relative bg-transparent border-none -z-50"></div>
                        
                        <div className="w-full flex flex-col absolute top-[180rem]">
                            
                            <div className="flex justify-center items-center pr-12 py-28 relative">
                                <h2 className='flex items-center justify-center w-full fontTitle uppercase text-[8rem] text-zinc-300 font-[900]  
                                    tracking-[-5px]'> 
                                    my 
                                    <span className='text-zinc-900 ml-8'>tools</span>
                                </h2>       

                                <p className='w-full font-ibm text-[2.2rem] font-[300] text-zinc-900 tracking-wider
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

                <div className="w-full h-[calc[100vh-100px]] flex flex-col mt-32 relative">

                    <div className="w-full flex px-40">                                        
                        <h2 className='w-full fontTitle uppercase text-[8rem] text-zinc-300 font-[500] 
                            tracking-[2px] leading-[120px] mt-24'>
                            you made it here <br/>
                            <span className='text-salmon-400'>good move</span>!
                        </h2>
                    </div>

                    <div className="w-[28%] flex mt-72 mb-24 relative left-[85rem]">
                        <ContactBtn/>
                    </div>
                </div>              

                <div className="w-full flex pt-[2rem] pb-3">                        
                    <Footer/>
                </div>
            </div>
                          
        </section>
    );
};

export default About;
