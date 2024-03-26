import React, { useState, useEffect } from 'react';


const RandomLetterReveal = ({ text }) => {
    const [revealedIndices, setRevealedIndices] = useState([]);

    useEffect(() => {
        const characters = text.split('');
        let remainingIndices = characters.map((_, index) => index); // Array of all indices

        const revealLetter = () => {
            if (remainingIndices.length === 0) {
                return;
            }

            const randomIndex = Math.floor(Math.random() * remainingIndices.length);
            const selected = remainingIndices[randomIndex];

            setRevealedIndices((current) => [...current, selected]);

            remainingIndices = remainingIndices.filter((_, index) => index !== randomIndex);
        };

        const intervalId = setInterval(revealLetter, 100); // Adjust timing as needed

        return () => clearInterval(intervalId);
        
    }, [text]); // Effect depends on 'text' prop

    return (
        <div className="letter-container">
        {text.split('').map((char, index) => (
            <span key={index} className={revealedIndices.includes(index) ? 'revealed' : 'hidden'}>
            {char}
            </span>
        ))}
        </div>
    );
};

export default RandomLetterReveal;
