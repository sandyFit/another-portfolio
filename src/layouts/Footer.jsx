import React from 'react'
import { FaCopyright } from 'react-icons/fa';

const Footer = () => {

    const date = new Date();

    return (
        <section id='contact' className='w-full h-[100px] bg-zinc-900 flex flex-col absolute bottom-3'>           
            <hr className='w-full border-t-2 border-dotted border-zinc-300 pt-4' />
            <div className="w-full flex justify-between">
                <div className="w-[32%] h-full flex font-ibm text-3xl uppercase text-zinc-400 pl-6
                    tracking-wide">
                    <FaCopyright style={{margin: '.4rem .8rem 0 0', fontSize: '1.5rem'}}/>
                    {date.getFullYear()} <br/><br/>
                    <span className='text-salmon-400 ml-3'>Trish Ramos</span>
                    <span >Crafted by yours truly</span>
                    {/* <FaHeart style={{ color: '#2ef938', margin: '5px 10px 0 10px', opacity: '.6' }} /> */}
                    
                </div>                    
            
                <p className='w-[30%] h-full flex font-ibm text-3xl uppercase text-zinc-400 pl-[12.5rem]
                    tracking-wide'>
                    Be kind, Do Good & create with passion
                </p>
            </div>                              
        </section>
    )
}

export default Footer;




