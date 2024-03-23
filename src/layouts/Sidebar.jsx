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
            setActiveSection('Nice to Meet You');
            break;
        case 'projects':
            setActiveSection('Selected Works');
            break;
        case 'playground':
            setActiveSection('My Digital Chaos');
            break;
        case 'contact':
            setActiveSection("Drop Me a Line");
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
        <section className='w-[80px] h-full flex flex-col justify-between items-center border-2
            border-skyIce-950 gap-60 fixed inset-0 z-30 bg-zinc-300'>           
            <p className="text-zinc-300 text-[4rem] font-syne font-bold flex justify-center items-center w-full h-[78px] border-b-2 border-skyIce-950 bg-skyIce-950">
                <Link to="hero" className="w-full h-full flex justify-center items-center">T</Link>
            </p>
            
            <article className="flex justify-center" style={{ width: '300px' }}>
                <p className='text-skyIce-950 font-sora text-2xl tracking-wide font-[400] -rotate-90 '>
                    {activeSection}
                </p>
            </article>

            <article className='flex flex-col justify-evenly items-center w-full h-[20rem] text-zinc-300 
                 bg-skyIce-950 '>
                <FaInstagram 
                    style={{ fontSize: '2rem',  cursor: 'pointer', transition: 'opacity 0.2s' }}
                    onMouseOver={(e) => e.target.style.opacity = 0.65}
                    onMouseOut={(e) => e.target.style.opacity = 2} 
                />
                <FaLinkedin 
                    style={{ fontSize: '2rem', cursor: 'pointer', transition: 'opacity 0.3s' }}
                    onMouseOver={(e) => e.target.style.opacity = 0.65}
                    onMouseOut={(e) => e.target.style.opacity = 1}
                />
                <FaGithub
                    style={{ fontSize: '2rem', cursor: 'pointer', transition: 'opacity 0.3s' }}
                    onMouseOver={(e) => e.target.style.opacity = 0.65}
                    onMouseOut={(e) => e.target.style.opacity = 1}
                /> 
                
            </article>
            
        </section>
    )
}

export default Sidebar;
