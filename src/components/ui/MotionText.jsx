
import React from 'react';


const MotionText = ({ icon, text}) => {
  const repetitions = Array(4).fill(null);

  return (
        <div className="w-full z-10 border-t-[1px] border-b-[1px] border-zinc-700 flex items-center py-1"
            style={{ overflow: 'hidden'}}>
            <h2 className=' motion-text font-space-prosto text-2xl  font-syne app-title font-[500] tracking-[.38rem] 
                uppercase '>
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

