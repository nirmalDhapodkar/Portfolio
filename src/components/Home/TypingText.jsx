import { useEffect, useState, useRef } from 'react';

const TypingText = () => {
  const words = useRef(['StormValet', 'Nirmal Dhapodkar']);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(80);
  const [, setPause] = useState(false); // NEW state for delay

  useEffect(() => {
    const currentWord = words.current[currentWordIndex];

    const handleTyping = () => {
        if (isDeleting) {
        setDisplayText(prev => prev.slice(0, -1));
        setTypingSpeed(80);
      } else {
        setDisplayText(prev => currentWord.slice(0, prev.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && displayText === currentWord) {
        // Pause before deleting
        setPause(true);
        setTimeout(() => setPause(false), 1000); // 1 second delay
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === '') {
        // Pause before typing next word
        setPause(true);
        setTimeout(() => {
          setPause(false);
          setIsDeleting(false);
          setCurrentWordIndex(prev => (prev + 1) % words.current.length);
        }, 500); // 0.5 second delay
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [displayText, isDeleting, currentWordIndex, typingSpeed]);

  return (
    <span className="text-[#00E087] font-mono">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypingText;
