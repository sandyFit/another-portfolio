import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TimeZone from '../../components/ui/TimeZone';
import { BsArrowRight } from 'react-icons/bs';
import RandomLetterReveal from '../../components/ui/RandomLetterReveal';
import AnimatedTextWord from '../../components/features/AnimatedTextWord';
import AnimatedTextCharacter from '../../components/features/AnimatedTextCharacter';


const Hero = () => {

    const [isClicked, setIsCkicked] = useState(false);    
    const navigate = useNavigate();

    // Navigates to the contact page
    const handleNavigation = () => navigate('/contact');


    const handleClick = () => {
        setIsCkicked(!isClicked);
    }

    const GlitchText = ({ text }) => {
        const chars = text.split("").map((char, index) => (
            <span key={index} className="glitch">{char}</span>
        ));
        
        return <div>{chars}</div>;
    };

        
    return (
         <section
            id="hero"
            className="w-full h-screen flex flex-col justify-between bg-plum-600 relative">               
               <div className="flex w-full relative">               
                    <div className="flex flex-col items-end w-[20%] mt-28 absolute left-[95rem] ">
                        <TimeZone/>
                    </div>
                </div> 

            <div className="flex flex-col w-full h-full ">
                <article className="flex flex-col justify-between w-full h-full ">                    
                    <div className="w-full flex flex-col justify-center items-center h-full relative mt-20
                         overflow-hidden">
                        <div className="flex justify-center items-center">
                            
                            <div className="flex flex-col justify-start font-ibm uppercase text-[12rem] 
                                text-zinc-400 font-[400] tracking-[2px] mt-6">                               
                                <h3 className='w-full flex textSlidingLeft '>                            
                                    designer                     
                                </h3>
                                <h3 className='w-full flex mt-[-8rem] text-electro-200 textSlidingRight ml-[20rem]'>
                                    & developer_ 
                                </h3>
                            </div>  
                        </div>                                                                                                     
                    </div>
                                      
                    <div className="flex w-full justyfy-between items-end pb-4 mt-20" >       
                        <div className="flex justify-evenly items-end space-x-56">
                            <div className='w-[55%] font-ibm text-[2rem] font-[400] uppercase text-zinc-400  tracking-widest 
                                leading-[40px] glitch pl-5'>
                                Building Digital Wonders that are Engaging, Responsive & Secure.
                            </div>
                            <p className='w-[45%] font-ibm text-[2rem] font-[400] uppercase text-zinc-400
                                tracking-widest leading-[40px] pl-5'>
                                Based in Colombia, Open to Collabs, Gigs & Roles.
                            </p>
                        </div>    
                                               

                        <div className="w-full flex items-end ">                          
                            <div className="flex z-10 w-full justify-end items-end">                                                                                                    
                                <div className="flex w-full ml-60 justify-center items-center">
                                   <button className='button relative' onClick={handleNavigation}>
                                        <div className="textContainer">
                                            <span className="text firstText">Reach out</span>
                                            <span className="text secondText">Reach out</span>
                                        </div>
                                        
                                        <span className="group inline-flex  items-center justify-center 
                                        overflow-hidden rounded-full  font-medium text-neutral-200
                                            absolute left-[28rem] top-0">
                                            <div className="translate-x-0 transition group-hover:translate-x-[300%]">
                                                <svg width="25" height="25" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-40 w-40 text-purple-600">
                                                    <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                            </div>
                                            <div className="absolute -translate-x-[300%] transition group-hover:translate-x-0">
                                                <svg width="25" height="25" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-40 w-40 text-zinc-400">
                                                    <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                                                    </path>
                                                </svg>
                                            </div>
                                        </span>
                                    </button>
   
                                </div>                                  
                            </div>                                                                 
                        </div>                            
                    </div>                                            
                </article>                
                
                
            </div>           
        </section>
    );
};

export default Hero;
