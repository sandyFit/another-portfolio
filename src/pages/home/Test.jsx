import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import { BsArrowRight } from "react-icons/bs";
import "transition-style";
import RandomLetterReveal from '../../components/ui/RandomLetterReveal';
import TimeZone from '../../components/ui/TimeZone';



const Test = () => {

    const [isClicked, setIsCkicked] = useState(false);    
    const navigate = useNavigate();

    // Navigates to the contact page
    const handleNavigation = () => navigate('/contact');

    const handleClick = () => {
        setIsCkicked(!isClicked);
    }

    return (
         <section
            id="hero"
            className="w-full h-screen flex flex-col justify-between bg-slate-950 relative">               
               <div className="flex w-full relative">               
                    <div className="flex flex-col items-end w-[20%] mt-28 absolute left-[95rem] ">
                        <TimeZone/>
                    </div>
                </div> 

            <div className="flex flex-col w-full h-full ">
                <article className="flex flex-col justify-between w-full h-full ">
                    
                    <div className="w-full flex flex-col justify-center items-center h-full relative pl-10 mt-20
                         overflow-hidden">
                        <div className="flex justify-center items-center">
                            <h2 className='font-ibm uppercase text-[22rem] text-zinc-400 font-[400] 
                                        tracking-[-12px] textSlidingLeft'>WEB</h2>
                            <div className="flex flex-col justify-start font-ibm uppercase text-[10.2rem] ml-6
                                text-purple-500 font-[600] tracking-[9px] mt-6">                               
                                <h3 className='w-full flex textSlidingRight'>                            
                                    designer                     
                                </h3>
                                <h3 className='w-full flex mt-[-7rem] text-electro-200 textSlidingRight'>
                                    developer 
                                </h3>
                            </div>  
                        </div>   
                        
                        
                                                        
                    </div>
                                      
                    <div className="flex w-full justyfy-between pb-4 mt-20" >       

                        <div className="flex justify-evenly items-end space-x-56">
                            <div className='w-[55%] font-ibm text-[2rem] font-[400] uppercase text-zinc-400  tracking-widest 
                                leading-[40px]  pl-5'>
                                Building Digital Wonders that are Engaging, Responsive & Secure.
                            </div>
                            <p className='w-[45%] font-ibm text-[2rem] font-[400] uppercase text-zinc-400
                                tracking-widest leading-[40px] pl-5'>
                                Based in Colombia, Open to Collabs, Gigs & Roles.
                            </p>
                        </div>    
                                               

                        <div className="w-full flex items-end pl-20 pb-6">                          
                            <div className="flex z-10 w-[100%] justify-end items-end">
                                <div className="flex flex-col ">
                                                                        
                                    <div className="flex items-end ">
                                        <div className="flex w-full justify-start items-start textSlidingLeft">
                                        <button className='font-ibm text-7xl font-[400] uppercase text-electro-200'
                                            onClick={handleNavigation}
                                        >
                                            Let's Talk
                                            <BsArrowRight style={{ margin: '-60px 15px 0 560px' }} />
                                        </button>
                                    </div>
                                        
                                    </div>
                                </div>                                   
                            </div>                                                                 
                        </div>                            
                    </div>                                            
                </article>                
                
                
            </div>           
        </section>
    );
};

export default Test;
