import React from 'react'

const TransitionTest = () => {
    return (
        <section className="w-full h-screen flex flex-col justify-between bg-slate-950 relative"> 
            <svg className="curtain" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">

                <defs>
                    <linearGradient id="horizon-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{ stopColor: "rgb(255,255,0)", stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: "rgb(255,0,0)", stopOpacity: 1 }} />
                    </linearGradient>
                    <clipPath id="curtainClipPath">
                        <rect id="rect1" width="800" height="100"></rect>
                        <rect id="rect2" width="800" height="100" y="100"></rect>
                        <rect id="rect3" width="800" height="100" y="200"></rect>
                    </clipPath>
                </defs>

                <rect width="800" height="800" fill="url(#hhhorizon-grad)" clip-path="url(#curtainClipPath)"></rect>
            </svg>

        </section>
    )
}

export default TransitionTest;
