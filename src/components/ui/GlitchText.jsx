import React, { useEffect, useState } from 'react';

const randomCharacters = "!¬~&®#|°¿@µÆØß1237890»™€░▒║╬φΦ≤Σε≡±█▄ß.".split('');

const GlitchText = ({ text, revealSpeed = 300 }) => {
  const [revealedText, setRevealedText] = useState(Array(text.length).fill(' '));

  useEffect(() => {
    const timers = text.split('').map((char, index) => {
      const isSpace = char === ' ';
      let timer = setTimeout(() => {
        setRevealedText((prevText) => {
          const newText = [...prevText];
          newText[index] = char;
          return newText;
        });
      }, index * revealSpeed * (isSpace ? 0.1 : 1)); // Speed up for spaces

      if (!isSpace) {
        // Before revealing the actual character, we show random characters
        let interval = setInterval(() => {
          setRevealedText((prevText) => {
            const newText = [...prevText];
            const randomChar = randomCharacters[Math.floor(Math.random() * randomCharacters.length)];
            newText[index] = randomChar;
            return newText;
          });
        }, revealSpeed / 10); // Update random character at a fraction of the revealSpeed

        // Clear the interval right before revealing the actual character
        setTimeout(() => clearInterval(interval), (index * revealSpeed * 0.9));
      }

      return timer;
    });

    return () => timers.forEach(timer => clearTimeout(timer));
  }, [text, revealSpeed]);

  return (
    <p>
      {revealedText.join('')}
    </p>
  );
};

export default GlitchText;
