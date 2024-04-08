import React from 'react'

const Background = () => {
    return (
        <section className="w-full h-screen flex flex-col justify-between bg-zinc-900 relative"> 
            <svg className="w-full h-full curtain" xmlns="http://www.w3.org/2000/svg" version="1.1"
                xmlnsXlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs"
                viewBox="0 0 800 800" preserveAspectRatio="xMidYMid slice">
                <filter id='noiseFilter'>
                    <feTurbulence 
                    type='fractalNoise' 
                    baseFrequency='0.65' 
                    numOctaves='3' 
                    stitchTiles='stitch'/>
                </filter>
                
                <rect width='100%' height='100%' filter='url(#noiseFilter)'/>
            </svg>
        </section>
    )
}

export default Background