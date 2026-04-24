import { useEffect, useState } from "react";

export function useKonamiCode(sequence: string[]) {
  const [success, setSuccess] = useState(false);
  const [input, setInput] = useState<string[]>([]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      setInput((prev) => {
        const newArray = [...prev, key];
        if (newArray.length > sequence.length) {
          newArray.shift();
        }
        
        // Check if sequences match
        const isMatch = sequence.every((val, index) => val === newArray[index]);
        if (isMatch) {
          setSuccess(true);
        }
        
        return newArray;
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [sequence]);

  // Reset function
  const reset = () => {
    setSuccess(false);
    setInput([]);
  };

  return { success, reset };
}
