import { useState, useEffect } from 'react';

function HackerText({ children }) {
  const [hackerText, setHackerText] = useState('');
  const [revealedChars, setRevealedChars] = useState(0);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      const newHackerText = Array.from(children)
        .map((char, i) => {
          if (i < revealedChars) {
            // if the character has already been revealed, use the original character
            return char;
          }
          if (index >= children.length + 10) {
            // if the entire original string has been revealed and removed, clear the interval
            clearInterval(interval);
            return char;
          }
          if (index >= i) {
            // gradually reveal the original character by replacing the hacker character with the original character
            return children[i];
          }
          // otherwise, use a random character
          const randomCharCode = Math.floor(Math.random() * (126 - 33 + 1) + 33);
          return String.fromCharCode(randomCharCode);
        })
        .join('');
      setHackerText(newHackerText);
      index++;
      // increment the number of revealed characters every second
      if (index % 2 === 0 && revealedChars < children.length) {
        setRevealedChars((prev) => prev + 1);
      }
    }, 20);
    // cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [children, revealedChars]);

  return <span style={{wordBreak: 'break-word'}}>{hackerText}</span>;
}

export default HackerText;
