'use client';
import { useEffect, useRef, useState } from 'react';

type CountdownComponent = {
  initCount?: number;
  message: string;
};

const Countdown = ({ initCount = 0, message }: CountdownComponent) => {
  const [count, setCount] = useState(initCount);
  const countRef = useRef<NodeJS.Timeout>();
  const countMessage = message.replace(/\$count/g, `${count}`);

  if (count <= 0 && countRef.current) {
    clearInterval(countRef.current);
  }

  useEffect(() => {
    if (initCount <= 0) return;
    countRef.current = setInterval(() => {
      setCount((count) => count - 1);
    }, 1000);

    return () => {
      clearInterval(countRef.current);
    };
  }, []);

  return <span>{countMessage}</span>;
};

export default Countdown;
