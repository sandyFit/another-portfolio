import React from 'react'

const TextInMotion = ({icon, text1, text2, text3, text4, text5, text6}) => {
    
    const repetitions = Array(6).fill(null);

  return (
      <div className="w-full h-full z-10 flex items-center bg-slate-800 py-1 border-t-2 border-b-2
            border-dotted border-zinc-300"
            style={{ overflow: 'hidden'}}>
            <h2 className=' motion-text font-ibm text-[2rem] font-[500] tracking-wider uppercase'>
                <div style={{ display: 'flex', whiteSpace: 'nowrap' }}>
                    {repetitions.map((_, index) => (
                        <React.Fragment key={index}>
                            <span className='mx-20 text-electro-200 text-[1.8rem] mt-2'>
                                {icon}
                            </span>
                            <span className='text-zinc-400' >{text1}</span>
                            <span className='mx-20 text-electro-200  text-[1.8rem] mt-2'>
                                {icon}
                            </span>
                            <span className='text-zinc-400' >{text2}</span>
                            <span className='mx-20 text-electro-200  text-[1.8rem] mt-2'>
                                {icon}
                            </span>
                            <span className='text-zinc-400' >{text3}</span>
                            <span className='mx-20 text-electro-200  text-[1.8rem] mt-2'>
                                {icon}
                            </span>
                            <span className='text-zinc-400' >{text4}</span>
                            <span className='mx-20 text-electro-200  text-[1.8rem] mt-2'>
                                {icon}
                            </span>
                            <span className='text-zinc-400' >{text5}</span>
                            <span className='mx-20 text-electro-200  text-[1.8rem] mt-2'>
                                {icon}
                            </span>
                            <span className='text-zinc-400' >{text6}</span>

                        </React.Fragment>
                    ))}
                </div>
            </h2>
    </div>
  )
    
}

export default TextInMotion;
