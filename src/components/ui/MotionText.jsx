
import React from 'react';


const MotionText = ({ icon, text}) => {
  const repetitions = Array(6).fill(null);

  return (
        <div className="w-full z-10 "
            style={{ overflow: 'hidden'}}>
            <h2 className=' motion-text font-space-grotesk text-[10rem] font-[600] tracking-[-.1rem] uppercase'>
                <div style={{ display: 'flex', whiteSpace: 'nowrap' }}>
                    {repetitions.map((_, index) => (
                        <React.Fragment key={index}>
                        <span  style={{color: '#f2f2f2'}}>
                            {icon}
                        </span>
                        <span className='text-zinc-300 mx-12' >{text}</span>
                                      
                                    
                        </React.Fragment>
                    ))}
                </div>
            </h2>
    </div>
  )
};

export default MotionText;

