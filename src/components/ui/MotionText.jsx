
import React from 'react';


const MotionText = ({ icon, text1, text2, text3}) => {
  const repetitions = Array(4).fill(null);

  return (
        <div className="w-full h-full z-10 flex items-center py-2 border-t-[1.5px] border-b-[1.5px] border-dashed 
            border-purple-400"
            style={{ overflow: 'hidden'}}>
            <h2 className=' motion-text font-ibm text-[3rem] font-[500] tracking-wider uppercase'>
                <div style={{ display: 'flex', whiteSpace: 'nowrap' }}>
                    {repetitions.map((_, index) => (
                        <React.Fragment key={index}>
                            <span  style={{color: '#f2f2f2'}}>
                                {icon}
                            </span>
                            <span className='text-purple-600 mx-6' >{text1}</span>
                            {/* <span  style={{color: '#f2f2f2'}}>
                                {icon}
                            </span>
                            <span className='text-emerald-400 mx-6' >{text2}</span>
                            <span  style={{color: '#f2f2f2'}}>
                                {icon}
                            </span>
                            <span className='text-emerald-400 mx-6' >{text3}</span> */}
                        </React.Fragment>
                    ))}
                </div>
            </h2>
    </div>
  )
};

export default MotionText;

