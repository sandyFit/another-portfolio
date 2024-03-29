import React from "react";


// React component for circular and correctly oriented text
const Logo = ({ text }) => {
    return (
        <svg viewBox="0 0 120 120" width="120" height="120" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g>
                {/* Ensure the path defines a circle that fits within the viewBox */}
                <path id="circlePath" fill="none" stroke="none"
                      d="M60,10 a50,50 0 1,0 0,100 a50,50 0 1,0 0,-100" />

                <text fontSize="12" fontWeight="400" fontFamily="Syne"
                      fill="#D4D4D8" style={{ letterSpacing: '1.5px' }}>
                    <textPath xlinkHref="#circlePath" startOffset="50%" textAnchor="middle" dominantBaseline="hanging">
                        {text }
                    </textPath>
                </text>
                
                {/* Adjust the center of rotation to match the center of the SVG */}
                <animateTransform
                    attributeName="transform"
                    attributeType="XML"
                    type="rotate"
                    from="0 60 60"  // Center of the SVG viewBox
                    to="360 60 60"  // Full rotation around the same center
                    dur="15s"
                    repeatCount="indefinite"/>
            </g>

            <svg x="30" y="30" width="60" height="60" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.8536 6.14645C11.6583 5.95118 11.3417 5.95118 11.1464 6.14645L8 9.29289V0.5C8 0.223858 7.77614 0 7.5 0C7.22386 0 7 0.223858 7 0.5V9.29289L3.85355 6.14645C3.65829 5.95118 3.34171 5.95118 3.14645 6.14645C2.95118 6.34171 2.95118 6.65829 3.14645 6.85355L7.14645 10.8536C7.34171 11.0488 7.65829 11.0488 7.85355 10.8536L11.8536 6.85355C12.0488 6.65829 12.0488 6.34171 11.8536 6.14645Z" fill="#d4d4d8b3"></path>
            </svg>
        </svg>
    );
};

export default Logo;
