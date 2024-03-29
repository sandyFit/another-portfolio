import React from 'react'

const HeroSection = () => {
    return (
        <section id="hero" className="w-full h-screen flex flex-col justify-between bg-skyIce-950 relative overflow-hidden">
            <div className="flex flex-col items-end w-[20%] mt-10 pr-6 absolute right-10">
                <h3 className='font-ibm text-lg font-[400] text-purple-500'>
                    <span className='text-electro-300'>{'<'}</span>
                    timezone
                    <span className='text-electro-300'>{'/>'}</span>
                </h3>
                <p className='w-full text-zinc-500 uppercase font-ibm font-[400] text-lg text-right'>
                    Bogota: {getCurrentTimeWithTimezone()}
                </p>
            </div>

            <div className="flex flex-col w-full h-full mt-10 overflow-auto">
                {/* Simplified for brevity - Ensure your actual content scales or wraps as needed */}
            </div>

            <div className="flex justify-center items-center pb-4">
                <BsChevronDoubleDown style={{ color: '#2ef938', fontSize: '1.2rem'}} />
                <h3 className='font-ibm text-lg font-[400] text-purple-500 ml-2'>
                    <span className='text-electro-300'>{'['}</span>
                    scroll to explore
                    <span className='text-electro-300'>{']'}</span>
                </h3>
            </div>

            <button className="absolute right-10 bottom-10 text-3xl text-electro-300" onClick={handleClick}>
                {isClicked ? <BsMoon /> : <BsSun />}
            </button>
        </section>
    );
};

export default HeroSection;