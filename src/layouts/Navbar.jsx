import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {


    return (                      
        <nav className='flex items-center w-[96%] max-w-full h-[50px] fixed top-6 left-8 bg-slate-700 z-50 bg-opacity-50
            hover:text-zinc-900 border-[.5px] border-dotted border-purple-400'> 
            <div className="flex w-full justify-between items-center mx-8">
                <div className="flex w-[30%] items-center">
                    <div className="flex w-2 h-4 bg-purple-600 mr-3"></div>
                    <p className='text-electro-200 font-ibm text-lg font-[300] uppercase tracking-widest'>
                        <Link to="/" >trish ramos</Link>
                    </p>
                </div>

                <div className="relative w-[30%]">
                    <div className='flex w-full justify-between center items-center'>           
                        <ul className='w-full flex justify-between items-center bg-transparent'> 
                            {['about', 'projects', 'resume', 'contact'].map((item, index) => (
                                <li className='text-electro-200 font-ibm text-[1rem] font-[300] 
                                px-2 uppercase tracking-widest flipOnHover'
                                    key={index}
                                    
                                >
                                    <Link to={item}>
                                        {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
                                    </Link>
                                </li>
                            ))}

                            

                        </ul>          
                    </div>
                </div>  
                
                
            </div>
        </nav>
        
    )
}

export default Navbar;

