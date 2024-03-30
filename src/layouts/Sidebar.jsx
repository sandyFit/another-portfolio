import React, { useEffect, useState } from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Sidebar = () => {

    const [activeSection, setActiveSection] = useState('Welcome')

    const handleScroll = () => {
    const sections = ['hero', 'about', 'projects', 'playground', 'contact'];
    const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
            const rect = element.getBoundingClientRect();
            // Change to use a threshold for better detection
            return rect.top < window.innerHeight * 0.5 && rect.bottom > window.innerHeight * 0.5;
        }
        return false;
    });
        
    switch (currentSection) {
        case 'hero':
            setActiveSection('Welcome');
            break;
        case 'about':
            setActiveSection('who i am');
            break;
        case 'projects':
            setActiveSection('my projects');
            break;
        case 'playground':
            setActiveSection('My Chaos');
            break;
        case 'contact':
            setActiveSection("contact me");
            break;
        default:
            setActiveSection('Welcome 🖐');
    }
}


    useEffect(() => {
        handleScroll(); // Initial check in case the page isn't at the top when loaded
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <section className='w-[70px] h-full flex flex-col justify-between items-center gap-48 fixed top-0 left-2 z-30 
            bg-transparent'>           
            {/* <p className="text-zinc-300 text-[3.2rem] font-gugi font-bold flex justify-center items-center w-full 
                h-[80px]  bg-skyIce-950">
                <Link to="hero" className="w-full h-full flex justify-center items-center">T</Link>
            </p> */}
            
            <article className="flex justify-center mt-96" style={{ width: '300px' }}>
                <p className='text-purple-500 font-ibm text-xl tracking-[.6rem] font-[500] -rotate-90 uppercase'>
                    {activeSection}
                </p>
            </article>

            <article className='flex flex-col justify-evenly items-center w-full h-[26%] text-zinc-300 gap-6 pb-5'>
                <FaInstagram 
                    style={{ fontSize: '1.5rem',  cursor: 'pointer', transition: 'opacity 0.2s' }}
                    onMouseOver={(e) => e.target.style.opacity = 0.65}
                    onMouseOut={(e) => e.target.style.opacity = 2} 
                />
                <FaLinkedin 
                    style={{ fontSize: '1.5rem', cursor: 'pointer', transition: 'opacity 0.3s' }}
                    onMouseOver={(e) => e.target.style.opacity = 0.65}
                    onMouseOut={(e) => e.target.style.opacity = 1}
                />
                <FaGithub
                    style={{ fontSize: '1.5rem', cursor: 'pointer', transition: 'opacity 0.3s' }}
                    onMouseOver={(e) => e.target.style.opacity = 0.65}
                    onMouseOut={(e) => e.target.style.opacity = 1}
                /> 
                
            </article>
            
        </section>
    )
}

export default Sidebar;
