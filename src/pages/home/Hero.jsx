import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Hero = () => {

    const [isClicked, setIsCkicked] = useState(false);    
    const [currentTime, setCurrentTime] = useState('');
    const navigate = useNavigate();

    // Navigates to the contact page
    const handleNavigation = () => navigate('/contact');


    const handleClick = () => {
        setIsCkicked(!isClicked);
    }

    
    // Function to get the current date and time in the specified format
    const getCurrentTimeWithTimezone = () => {
        const now = new Date();
        const options = {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true, // Ensure we get AM/PM
        };
        // Bogotá is in the GMT-5 timezone. Adjust if necessary for daylight saving time elsewhere.
        const timeZone = 'America/Bogota';
        const formatter = new Intl.DateTimeFormat('en-US', { ...options, timeZone });
        // Manually constructing the label for Bogotá GMT-5. Adjust the label as needed.
        const formattedTime = formatter.format(now);
        // Optional: Calculate the GMT offset dynamically if needed for other time zones.
        // For Bogotá, we're hardcoding it as GMT-5.
        return formattedTime;
    };


    useEffect(() => {
        const updateTime = () => {
            setCurrentTime(getCurrentTimeWithTimezone());
        }
            // Update the time display immediately upon component mount
            updateTime();

            // Set interval to update every second (or any other interval you prefer)
            const intervalId = setInterval(updateTime, 1000); // 1000 milliseconds for every second

            // Cleanup interval on component unmount
            return () => clearInterval(intervalId);
        
    }, [])


    return (
        <section
            id="hero"
            className="w-full h-screen flex flex-col justify-between bg-slate-950 relative"
        >    
            
            <div className="flex justify-between w-full relative">
                <div className="flex absolute top-36 left-32">
                    <h3 className='font-ibm text-lg font-[400] text-purple-500'>
                        <span className='text-electro-200'>{'<'}</span>
                        web
                        <span className='text-electro-200'>{'/>'}</span>
                        
                    </h3>
                </div>
                <div className="flex flex-col items-end w-[20%] mt-28 pr-6 absolute left-[93.5rem] ">
                    <h3 className='font-ibm text-lg font-[400] text-purple-500'>
                        <span className='text-electro-200'>{'<'}</span>
                        timezone
                        <span className='text-electro-200'>{'/>'}</span>
                        
                    </h3>
                    <div className='w-full text-zinc-400 uppercase font-ibm font-[400] text-right'
                        id='currentTime'
                    >
                        Bogota gmt-5 <br /> <span className='tracking-wider'>{currentTime}</span>
                    </div>
                </div>
            </div>    

            <div className="flex flex-col w-full h-full ">
                <article className="flex flex-col justify-between w-full h-full ">
                    <div className="w-full flex flex-col justify-center items-start mt-32 pl-32">
                        <p className="font-ibm uppercase text-[10.5rem] text-zinc-300">
                            designer
                        </p>
                        <p className="font-ibm uppercase text-[10.5rem] text-electro-200 ml-[30rem] 
                            mt-[-7rem]">
                            & developer_
                        </p>
                    </div>
                                      
                    <div className="flex w-full justify-between pb-20" >                             
                        <div className="flex w-full flex-col pl-72 z-10">
                            <div className="flex w-[60%] ">
                                <div className="flex  flex-col px-10">
                                    <div className="flex">
                                        
                                        <h3 className='w-full font-ibm text-lg font-[400] text-purple-500 tracking-widest'>
                                            <span className='text-electro-200 mr-2'>{'['}</span>
                                            "Hello, World!"
                                            <span className='text-electro-200 ml-2'>{']'}</span>                        
                                        </h3>  
                                    </div>
                                    <p className='w-full text-zinc-400 text-[1.05rem] font-ibm font-[400] mt-2 uppercase'>
                                        I'm Trish Ramos, a web developer from Colombia.
                                        <br/>
                                        Eager to build web wonders that are engaging, responsive & secure.<br /> 
                                        Serving kind souls globally.
                                    </p>
                                </div>
                            </div>                      
                        </div>
                       
                        <div className="flex w-full h-full items-end">
                            <div className="w-full flex items-end pl-28 pt-1">                          
                                <div className="flex z-10 w-[60%] ">
                                    <div className="flex flex-col p-10">
                                        <div className="flex">
                                            <h3 className='w-full font-ibm text-lg font-[400] text-purple-500 tracking-widest'>
                                            <span className='text-electro-200 mr-2'>{'['}</span>
                                            "Hire me"
                                            <span className='text-electro-200 ml-2'>{']'}</span>                        
                                        </h3> 
                                        </div>
                                        <p className='w-full text-zinc-400 text-[1.05rem] font-ibm font-[400] mt-2 uppercase'>
                                            Aiming to uniquely uplift brands, blending design & code.<br/>
                                            Open to collabs, projects & roles.
                                            
                                            <br/>
                                            Let's create cool stuff that stand out!
                                        </p>
                                        
                                        
                                        <button className="group relative  h-[calc(36px+8px)] items-center 
                                            justify-center  py-1 pl-6 pr-20 text-[1.2rem] font-[400] text-electro-200
                                            border-[1.5px] border-dotted border-purple-400 mt-4 flex uppercase tracking-[.28rem]"
                                            onClick={handleNavigation}
                                        >
                                            <span className="z-10 pr-2">let's talk</span>
                                            <div className="absolute right-1 inline-flex h-8 w-12 items-center justify-end  
                                                bg-purple-800 transition-[width] group-hover:w-[calc(100%-8px)]">
                                                <div className="mr-3.5 flex items-center justify-center">
                                                    <svg width="15" height="15" viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-elctro-300">
                                                        <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                                                        </path>
                                                    </svg>
                                                </div>
                                            </div>                                
                                        </button>
                                        
                                    </div>                                   
                                </div>          
                                                          
                            </div>
                        </div>    
                    </div>                                            
                </article>                
                

            </div>           
                {/* <article className="w-full h-full flex justify-self-end">                    

                    <div className="flex w-full">                      
                        <Link to={'about'} smooth={true} duration={500} 
                            className='w-full font-ibm text-lg font-[400] text-purple-500'>
                            <span className='text-electro-200 mr-1'>{'<'}</span>
                             explore my work
                            <span className='text-electro-200 ml-1'>{'/'}</span>     
                            
                        <BsChevronDoubleRight style={{color: '#2ef938', fontSize: '1.2rem', margin: '0px 5px 0 0'}}/>
                        </Link>  
                    </div>      
                    
                    
                </article>    */}
        </section>
    );
};

export default Hero;
