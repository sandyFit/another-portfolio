import React, { useEffect, useState } from 'react';
import TimeZone from '../../components/ui/TimeZone';
import ContactBtn from '../../components/ui/ContactBtn';
import GlitchText from '../../components/ui/GlitchText';


const Hero = () => {

    const [isClicked, setIsCkicked] = useState(false);    

    const handleClick = () => {
        setIsCkicked(!isClicked);
    }


        
    return (
         <section
            id="hero"
            className="w-full h-screen flex flex-col justify-between relative">               
               <div className="flex w-full relative">               
                    <div className="flex flex-col items-end w-[20%] mt-28 absolute left-[93.5rem] ">
                        <TimeZone/>
                    </div>
                </div> 

            <div className="flex flex-col w-full h-full ">
                <article className="flex flex-col justify-between w-full h-full ">                    
                    <div className="w-full flex flex-col justify-center items-center h-full relative mt-20
                         overflow-hidden">
                        <div className="flex justify-center items-center">
                            
                            <div className="flex flex-col justify-start font-ibm uppercase text-[12rem] 
                                text-zinc-300 font-[400] tracking-[2px] mt-6">                               
                                <h3 className='w-full flex absolute bottom-64 left-32 textSlidingLeft'>                            
                                    designer                     
                                </h3>
                                <h3 className='w-full flex mt-20 text-zinc-900 font-[500]  ml-[20rem]'>
                                    <span className='mr-20'>&</span> 
                                     <GlitchText text={'developer_'}
                                    typingSpeed={160}
                                /> 
                                </h3>
                            </div>  
                        </div>                                                                                                     
                    </div>
                                      
                    <div className="flex w-full justyfy-between items-end pb-6 mt-20" >       
                        <div className="flex justify-evenly items-end ml-3 space-x-56">
                            <div className='w-[55%] font-ibm text-[2rem] font-[500] uppercase text-zinc-300  tracking-widest 
                                leading-[40px] glitch pl-10'>
                                Building Digital Wonders that are Engaging, Responsive & Secure.
                               
                            </div>
                            <p className='w-[45%] font-ibm text-[2rem] font-[500] uppercase text-zinc-300
                                tracking-widest leading-[40px] pl-5'>
                                Based in Colombia, Open to Collabs, Gigs & Roles.
                            </p>
                        </div>    
                                               

                        <div className="w-full flex items-end ">                          
                            <div className="flex z-10 w-full justify-end items-end">                                                                                                    
                                <div className="flex w-full ml-[13rem] justify-center items-center">
                                   <ContactBtn/>  
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
