import React from 'react';
import AboutMotion from '../../components/ui/AboutMotion';
import MotionText from '../../components/ui/MotionText';

const About = () => {
    

    return ( 
        
        <section name='about' className='w-full pt-20 min-h-full z-10'>
           
            <div id='about' className="grid grid-cols-1 gap-20 ">

                {/* Who I Am */}
                <article className='z-30 w-11/12 ml-36 px-12 grid grid-cols-1'>
                    <div className="grid grid-cols-1 w-full">
                        <h2 className='font-syne text-skyIce-300 uppercase z-10 text-[7.5rem] font-[750] tracking-[-.2rem]'>
                            Who I am
                        </h2>
                        <div className="w-full grid grid-cols-2 border-[1px] border-zinc-300 py-20">
                            <p className="font-syne text-3xl text-zinc-300 ml-16 mt-8 z-20">
                                
                                Thanks for visisting. 😊 Feel free to call me Trish, just like my friends do.
                                I'm a aesthetics focused graphic designer based in Colombia.<br /><br />
                                Driven by my passion for all things digital, I embarked on a self-taught journey to expand 
                                my expertise into web development, directingz-30 w-11/12 ml-36 px-12  my attention primarily towards frontend solutions.
                                <br /><br />
                                This journey has deepened my commitment to build digital products that are the perfect blend of
                                meaningful aesthetics and function.<br /><br />

                                Away from the screen, I'm indulging in life's varied rhythms—be it striking a balance with gym
                                sessions, mastering the craft of baking cookies, or channeling my quirky side through the world
                                of doodles.<br/><br/>

                                I'm currently looking for new opportunities to challenge myself within a creative agency or through
                                freelance projects, aiming to both apply and enhance my programming and design skills.
                                
                            </p>
                            <div className="flex">
                                <img src="" alt=""/>
                            </div>
                        </div>
                    </div>
                </article>

                {/* What I Do */}
                <article className="z-30 w-11/12 ml-36 px-12 grid grid-cols-1 mt-[6rem] mb-24 ">
                    <h2 className='font-syne text-skyIce-300 uppercase z-10 text-[7.5rem] font-[750] flex justify-self-end
                        tracking-[-.2rem] pb-12 pr-36'>
                            What I do
                        </h2>
                    <div className="w-full grid grid-cols-2 border-[1px] border-zinc-300 py-20">

                        <div className="grid">

                        <p className="font-syne text-3xl text-zinc-300 ml-16 mt-8 z-20">
                                . <br /><br />
                                My portfolio showcases a diverse range of projects, including:
                            </p>I build cool digital things through design & Code
                            <ul className="font-syne text-3xl text-zinc-300 mt-8 decoration-slice pl-6">
                                <li className='list-disc'>UX Design</li>
                                <li className='list-disc'>Web Development</li>
                                <li className='list-disc'>UI Animations</li>
                                <li className='list-disc'>Icon Illustrations</li>
                            </ul>

                            <p className="font-syne text-3xl text-zinc-300 mt-8">
                                Being confortable with code empowers me to swiftly prototype
                                and validate user experiences, ensuring that each project is not only beautiful
                                but also functional.
                                <br /><br />
                                I can help you with:<br /><br />
                            </p>   
                        </div>
                        <div className="z-10">
                            <AboutMotion text={' ~ I BUILD COOL DIGITAL THINGS THROUGH DESIGN & CODE'}/>
                        </div>
                    </div>

                </article>
            </div>
        </section>
    );
};

export default About;
