import React from 'react';


const Hero = () => {
    return (
        <section id='hero' className="w-full min-h-screen grid grid-cols-[70%_30%] bg-skyIce-950 border-[1px] 
            border-zinc-700">
            {/* Left Column */}
            <div className="flex  flex-col w-full h-full">
                
                <div className="flex w-full border-[1px] border-zinc-800 h-[65%] hover:bg-skyIce-900 pl-36" >
                
                    <p></p>
                </div>

                
                <div className="flex w-full h-[35%] justify-start items-center hover:bg-skyIce-900  pl-36" >
                
                    <p className='font-prosto font-[950] text-salmon-400 text-8xl tracking-tight uppercase 
                        leading-[85px] '>
                        creative <br/>developer
                    </p>
                </div>
            </div>
            
            {/* Right Column */}
            <div className="flex flex-col w-full h-full">
                {/* Row 1 - 65% Height */}
                <div className="flex w-full h-[65%] hover:bg-skyIce-900" >
                {/* Content for Right Column, Row 1 */}
                    <p className='font-spaceGrotesk text-2xl text-zinc-500 mt-96 px-12'>
                        Hi, I'm Trish Ramos. A frontend developer and web designer driven to craft cool
                        digital experiences that resonate and engage.
                    </p>
                </div>
                
                <div className="flex w-full border-[1px] border-zinc-800 h-[35%] hover:bg-skyIce-900 justify-center
                    items-center" >

                    <button className='bg-skyIce-200 bg-opacity-20 py-5 px-16 text-zinc-300 uppercase font-prosto 
                        text-4xl font-[700] rounded-[40px]'>
                        projects
                    </button>

                    <button class="group relative inline-flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-skyIce-200 bg-opacity-20">
                        <div class="transition duration-300 group-hover:rotate-[360deg]">
                            <svg width="60" height="60" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-zinc-400">
                                <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor"></path>
                            </svg>
                        </div>
                    </button>

                </div>
            </div>
        </section>
    );
};

export default Hero;
