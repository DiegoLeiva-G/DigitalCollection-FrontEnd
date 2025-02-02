import { useEffect, useState } from 'react';

export const useDebounce = <T>(value: T, givenDelay?: number): T => {
  const delay = givenDelay || 250;
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};
