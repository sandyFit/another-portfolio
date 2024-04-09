import React from 'react'
import { FaCopyright } from 'react-icons/fa';

const Footer = () => {

    const date = new Date();

    return (
        <section id='contact' className='w-full h-[100px]  flex flex-col absolute bottom-3'>           
            <hr className='w-full border-t-[3px] border-dotted border-zinc-900 pt-4' />
            <div className="w-full flex justify-between">
                <div className="w-[32%] h-full flex font-ibm text-3xl uppercase text-zinc-800 font-[500] pl-8
                    tracking-wide">
                    <FaCopyright style={{margin: '.4rem .8rem 0 0', fontSize: '1.5rem'}}/>
                    {date.getFullYear()} <br/><br/>
                    <span className='text-zinc-300 font-[500] ml-3'>Trish Ramos</span>
                    <span className='text-zinc-800 font-[500]'>Crafted by yours truly</span>
                    {/* <FaHeart style={{ color: '#2ef938', margin: '5px 10px 0 10px', opacity: '.6' }} /> */}
                    
                </div>                    
            
                <p className='w-[30%] h-full flex font-ibm text-3xl uppercase text-zinc-300 font-[500] pl-[11.8rem]
                    tracking-wide'>
                    Be kind, Do Good & create with passion
                </p>
            </div>                              
        </section>
    )
}

export default Footer;




