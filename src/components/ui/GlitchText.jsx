import React, { useEffect, useState } from 'react';

const randomChars = "`!¬~&®#|°^?*¿@µÆØß1234567890»±¥™€░▒▓║╬╣φ≈⌡Φ≤Σε≡±█▄ß";

const GlitchText = ({ text, revealTime = 300 }) => {
  const [displayedText, setDisplayedText] = useState(
    new Array(text.length).fill(' ').map(() => randomChars[Math.floor(Math.random() * randomChars.length)])
  );

  useEffect(() => {
    const timer = revealTime / text.length;
    let index = 0;

    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((current) => {
          const newText = [...current];
          newText[index] = text[index];
          return newText;
        });
        index++;
      } else {
        clearInterval(interval);
      }
    }, timer);

    return () => clearInterval(interval);
  }, [text, revealTime]);

  return <p>{displayedText}</p>;
};

export default GlitchText;
