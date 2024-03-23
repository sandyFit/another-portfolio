import React from 'react'

const TextInMotion = ({icon, text}) => {
    
    const repetitions = Array(10).fill(null);

    return (
        <div className="text-slider-container font-syne text-2xl z-10" style={{ overflow: 'hidden' }}>
        <h2 className='text-center motion-text font-regular tracking-wider'>
            <div 
                    className='bg-skyIce bg-opacity-60 h-24 grid place-items-center border-2 border-t-lime-300 
                    border-b-neutral-300'
                >
                    <div style={{ display: 'flex', whiteSpace: 'nowrap' }}>

                        {repetitions.map((_, index) => (
                            <React.Fragment key={index}>
                            <span style={{ color: '#bef264', margin: '0 5rem', fontSize: '3rem' }}>
                                {icon}
                            </span>
                                
                            <span className=' font-inter font-semibold '
                                style={{ margin: '0 1rem', color: '#bef264', fontSize: '3rem' }}>
                                {text}
                            </span>
                            
                            
                            </React.Fragment>
                        ))}
                    </div>
            </div>
        </h2>
        </div>
    );
    
}

export default TextInMotion;
