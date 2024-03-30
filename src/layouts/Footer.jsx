import React from 'react'
import { FaCircle, FaCopyright, FaHeart } from 'react-icons/fa';
import { BsChevronUp, BsEmojiSmile } from 'react-icons/bs';
import { Link as ScrollLink } from 'react-scroll';


const Footer = () => {

    const date = new Date()
    

    return (
        <section id='contact' className='w-full h-screen bg-skyIce-950 flex flex-col'>
            {/* Content */}

            <div className="w-[10%] flex justify-start items-center font-ibm text-lg font-[400] text-purple-500 
                ml-24 mb-10 relative top-36">                    
                <span className='text-electro-300 mr-3'>{'['}</span>
                <h3 className='w-full tracking-widest'>// Say Hi</h3> 
                <span><BsEmojiSmile /></span>
                <span className='text-electro-300 ml-3'>{']'}</span>                                             
            </div>  

            <div className="flex flex-col justify-between items-start w-full h-full mt-48">                  
                <div className="flex flex-col w-full justify-between h-full pl-56">
                    <div className="flex justify-start gap-2">
                        <FaCircle
                            style={{ color: '#2ef938', fontSize: '1.2rem', margin: '15px 10px 0 0', zIndex: '1' }} />
                        <h1 className='font-ibm uppercase text-[3.65rem] text-purple-500 font-[500] 
                                tracking-wide leading-[3.5rem]'>
                            Eager to work <br/>together?
                        </h1>
                    </div>
                    
                    <p className='w-[32%] font-ibm text-zinc-400 font-[400] tracking-[.1rem] mt-10 ml-12
                        uppercase'>
                        Your message is the first step towards something great.<br/>
                        Let's chat—reach out now. Just drop me a line at 
                        <span className='lowercase text-electro-300 ml-2'>hello@trishramos.com</span>
                    </p>
                
                    <div className="flex justify-start items-center">
                        <button className='flex justify-start mt-1 ml-12'>
                            <div className="group relative inline-flex h-[calc(34px+8px)] items-center 
                                justify-center pl-4 pr-20 text-[1.2rem] font-[400] text-electro-300
                                border-[1.5px] border-dotted border-purple-400 mt-6 tracking-[.18rem]"
                                smooth={true} 
                                duration={500}
                            >
                                <a href="mailto:sandy07r@gmail.com"  className="z-10 pr-2 uppercase">send mail</a>
                                <div className="absolute right-1 inline-flex h-8 w-12 items-center justify-end  
                                    bg-purple-800 transition-[width] group-hover:w-[calc(100%-8px)]">
                                    <div className="mr-3.5 flex items-center justify-center">
                                        <svg width="10" height="10" viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-elctro-300">
                                            <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                                            </path>
                                        </svg>
                                    </div>
                                </div>                                
                            </div>
                        </button>

                         <div className="flex h-full items-end justify-start font-ibm text-lg font-[400] text-purple-500 
                            ml-12 ">                    
                            <span className='text-electro-300 mr-5'>{'['}</span>
                            <h3 className='w-full tracking-widest'>// Copy Mail </h3> 
                            
                            <span className='text-electro-300 ml-5'>{']'}</span>                                             
                        </div>
                    </div>
                </div>               
                
                <div className="flex justify-end items-end w-[9.6%] ml-24 pb-16 relative left-[99.5rem] top-[11.5rem]">
                    <ScrollLink to="hero"
                        smooth={true} 
                        duration={500}
                        className='w-full font-ibm text-lg font-[400] text-purple-500'>
                        <span className='text-electro-300 mr-1'>{'<'}</span>
                        back to top
                        <span className='text-electro-300 ml-1'>{'/'}</span>                         
                    </ScrollLink>  
                    <BsChevronUp style={{ color: '#2ef938', fontSize: '1.2rem', margin: '5px 15px 0 0' }} />
                    <hr className="absolute top-16 left-[120px] w-20 border-t-[1px] border-dashed border-electro-300 rotate-90"/>
                </div> 
               
                <div className="w-full h-full flex flex-col mt-[9.4rem] pl-32">                        
                    <hr className='w-[94%] border-t-[1px] border-dotted border-purple-400 ' />
                     <div className="w-full flex justify-between">
                        <div className="w-full h-full flex font-ibm uppercase text-zinc-400 mt-5
                            tracking-wide">
                            <FaCopyright style={{margin: '.25rem .5rem 0 0', fontSize: '1rem'}}/>
                            {date.getFullYear()}
                            <span className='text-electro-300 mx-3'>Trish Ramos</span>
                            | Crafted with
                            <FaHeart style={{ color: '#2ef938', margin: '5px 10px 0 10px', opacity: '.6' }} />
                            {'by yours truly'}
                        </div>                                            
                    </div>
                </div>

            </div>                      
        </section>
    )
}

export default Footer;




