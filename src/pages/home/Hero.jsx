import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TimeZone from '../../components/ui/TimeZone';
import { BsArrowRight } from 'react-icons/bs';


const Hero = () => {

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
                                <h3 className='w-full flex mt-[-8rem] text-electro-300 textSlidingRight ml-[20rem]'>
                                    & developer_ 
                                </h3>
                            </div>  
                        </div>                                                                                                     
                    </div>
                                      
                    <div className="flex w-full justyfy-between items-end pb-4 mt-20" >       
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
                                               

                        <div className="w-full flex items-end ">                          
                            <div className="flex z-10 w-fulljustify-end items-end">                                                                                                    
                                <div className="flex w-full ml-60 textSlidingLeft">
                                    <button className='font-ibm text-7xl font-[400] uppercase text-purple-600'
                                        onClick={handleNavigation}
                                    >
                                        <span>reach out</span> 
                                        <BsArrowRight style={{ margin: '-70px 15px 0 500px' }} />
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
