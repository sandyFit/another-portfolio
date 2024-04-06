import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavbarLink from '../components/ui/NavbarLink';

const Navbar = () => {  
    const location = useLocation();

    useEffect(() => {
        // This logs the current path whenever the location changes
        const path = location.pathname.replace('/', ''); // Remove the leading slash
        console.log("Current path:", path); // Debugging
    }, [location]);

    return (                      
        <nav className='flex items-center w-[99.5%] max-w-full h-[50px] left-1 fixed top-6 py-7 bg-plomo-600 z-50 
            bg-opacity-90 border-2 border-dotted border-zinc-300'> 
            <div className="flex w-full justify-between items-center">
                <div className="flex w-[14%] items-center bg-purple-700 justify-end pr-10 py-2">
                    <div className="flex w-2 h-4 bg-electro-300 mr-3"></div>
                    <p className='text-zinc-300 font-ibm text-[1.5rem] font-[500] uppercase tracking-widest'>
                        <Link to="/">trish ramos</Link>
                    </p>
                </div>

                <div className="relative w-[41%]">
                    <div className='flex w-full justify-between center items-center'>           
                        <ul className='w-full flex justify-between items-center bg-transparent'>
                            {['about', 'projects', 'resume', 'contact'].map((item, index) => (
                                <li className='text-zinc-400 font-ibm text-[2.3rem] font-[300] 
                                        px-2 uppercase tracking-widest' key={index}>
                                    <NavbarLink to={`/${item}`}>
                                        {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
                                    </NavbarLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>  
            </div>
        </nav>      
    );
}

export default Navbar;
