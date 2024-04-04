import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// Import icons from 'react-icons' if not already done
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Sidebar = () => {
    const [activeSection, setActiveSection] = useState('Welcome 🖐');
    const location = useLocation(); // This hook returns the location object that represents the current URL.

    useEffect(() => {
        // Function to determine the active section based on the current pathname
        const determineSection = () => {
            switch (location.pathname) {
                case '/':
                    return 'Welcome';
                case '/about':
                    return 'About Me';
                case '/projects':
                    return 'My Projects';
                case '/contact':
                    return 'get in touch';
                // Add more cases as needed for your application's routes
                default:
                    return 'Welcome 🖐';
            }
        };

        setActiveSection(determineSection());
    }, [location]); // Re-run this effect if the location changes

    return (
        <section className='w-[70px] h-full flex flex-col justify-between items-center gap-48 fixed top-0 left-2 z-30 bg-transparent'>
            <article className="flex justify-center mt-96" style={{ width: '350px' }}>
                <p className='text-purple-500 font-ibm text-xl tracking-[.6rem] font-[500] -rotate-90 uppercase'>
                    {activeSection}
                </p>
            </article>

            <article className='flex flex-col justify-evenly items-center w-full h-[26%] text-zinc-300 gap-6 pb-5'>
                <FaInstagram style={{ fontSize: '1.5rem', cursor: 'pointer', transition: 'opacity 0.2s' }}
                    onMouseOver={(e) => e.target.style.opacity = 0.65}
                    onMouseOut={(e) => e.target.style.opacity = 1} />
                <FaLinkedin style={{ fontSize: '1.5rem', cursor: 'pointer', transition: 'opacity 0.3s' }}
                    onMouseOver={(e) => e.target.style.opacity = 0.65}
                    onMouseOut={(e) => e.target.style.opacity = 1} />
                <FaGithub style={{ fontSize: '1.5rem', cursor: 'pointer', transition: 'opacity 0.3s' }}
                    onMouseOver={(e) => e.target.style.opacity = 0.65}
                    onMouseOut={(e) => e.target.style.opacity = 1} />
            </article>
        </section>
    );
}

export default Sidebar;
