import React from 'react'

const TransitionBg = () => {
    return (
        <section className="w-full h-screen flex flex-col justify-between bg-slate-950 relative"> 
            <svg className="w-full h-full curtain" xmlns="http://www.w3.org/2000/svg" version="1.1"
                xmlnsXlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs"
                viewBox="0 0 800 800" preserveAspectRatio="xMidYMid slice">
                <defs>
                    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%"
                        id="hhhorizon-grad">
                        <stop stopColor="hsl(123, 94%, 65%)" stopOpacity="1" offset="25%">
                        </stop>
                        <stop stopColor="hsl(271, 91%, 65%)" stopOpacity="1" offset="100%">
                        </stop>
                    </linearGradient>
                    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="hhhorizon-grad2">
                        <stop stopColor="hsl(271, 91%, 65%)" stopOpacity="1" offset="0%"></stop>
                        <stop stopColor="hsl(123, 94%, 65%)" stopOpacity="1" offset="75%"></stop>
                    </linearGradient>
                    <clipPath id="SvgjsClipPath1057">
                        <rect width="800" height="29" x="0" y="0"></rect><rect width="800" height="28" x="0" y="29"></rect>
                        <rect width="800" height="27" x="0" y="57"></rect><rect width="800" height="26" x="0" y="86"></rect>
                        <rect width="800" height="25" x="0" y="114"></rect><rect width="800" height="24" x="0" y="143"></rect>
                        <rect width="800" height="23" x="0" y="171"></rect><rect width="800" height="22" x="0" y="200"></rect>
                        <rect width="800" height="21" x="0" y="229"></rect><rect width="800" height="20" x="0" y="257"></rect>
                        <rect width="800" height="19" x="0" y="286"></rect><rect width="800" height="18" x="0" y="314"></rect>
                        <rect width="800" height="17" x="0" y="343"></rect><rect width="800" height="16" x="0" y="371"></rect>
                        <rect width="800" height="15" x="0" y="400"></rect><rect width="800" height="14" x="0" y="429"></rect>
                        <rect width="800" height="13" x="0" y="457"></rect><rect width="800" height="12" x="0" y="486"></rect>
                        <rect width="800" height="11" x="0" y="514"></rect><rect width="800" height="10" x="0" y="543"></rect>
                        <rect width="800" height="9" x="0" y="571"></rect><rect width="800" height="8" x="0" y="600"></rect>
                        <rect width="800" height="7" x="0" y="629"></rect><rect width="800" height="6" x="0" y="657"></rect>
                        
                        <rect width="800" height="5" x="0" y="686"></rect><rect width="800" height="4" x="0" y="714"></rect>
                        <rect width="800" height="3" x="0" y="743"></rect><rect width="800" height="2" x="0" y="771"></rect>
                        <rect width="800" height="1" x="0" y="800"></rect>
                    </clipPath>
                    <clipPath>
                        <rect width="800" height="1" x="0" y="29"></rect><rect width="800" height="2" x="0" y="58"> </rect>
                        <rect width="800" height="3" x="0" y="87"></rect><rect width="800" height="4" x="0" y="116"> </rect>
                        <rect width="800" height="5" x="0" y="145"></rect><rect width="800" height="6" x="0" y="174"> </rect>
                        <rect width="800" height="7" x="0" y="203"></rect><rect width="800" height="8" x="0" y="232"> </rect>
                        <rect width="800" height="9" x="0" y="261"></rect><rect width="800" height="10" x="0" y="290"> </rect>
                        <rect width="800" height="11" x="0" y="319"></rect><rect width="800" height="12" x="0" y="348"> </rect>
                        <rect width="800" height="13" x="0" y="377"></rect><rect width="800" height="14" x="0" y="406"> </rect>
                        <rect width="800" height="15" x="0" y="435"></rect><rect width="800" height="16" x="0" y="464"> </rect>
                        <rect width="800" height="17" x="0" y="493"></rect><rect width="800" height="18" x="0" y="522"> </rect>
                        <rect width="800" height="19" x="0" y="551"></rect><rect width="800" height="20" x="0" y="580"> </rect>
                        <rect width="800" height="21" x="0" y="609"></rect><rect width="800" height="22" x="0" y="638"> </rect>
                        <rect width="800" height="23" x="0" y="667"></rect><rect width="800" height="24" x="0" y="696"> </rect>
                        <rect width="800" height="25" x="0" y="725"></rect><rect width="800" height="26" x="0" y="754"> </rect>
                        <rect width="800" height="27" x="0" y="783"></rect><rect width="800" height="28" x="0" y="812"> </rect>
                    </clipPath>
                </defs>
                <rect width="800" height="800" fill="url(#hhhorizon-grad)" clipPath="url(&quot;#SvgjsClipPath1057&quot;)"></rect>
                <circle r="400" cx="400" cy="0" fill="url(#hhhorizon-grad)" clipPath="url(&quot;#SvgjsClipPath1057&quot;)"></circle>
                <circle r="400" cx="400" cy="800" fill="url(#hhhorizon-grad)" clipPath="url(&quot;#SvgjsClipPath1057&quot;)"></circle>
            </svg>
        </section>
    )
}

export default TransitionBg