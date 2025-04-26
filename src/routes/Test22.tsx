// Test22 (useMemo Intro)
// Source: (ChatGPT, GLD useMemo, useEffect... Review v1, https://chatgpt.com/c/680ce6d7-caa4-8009-b15d-ebbdecc7dda7)
import React, { useState, useMemo } from 'react';

const ExampleWithUseMemo: React.FC = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  const expensiveCalculation = useMemo(() => {
    console.log('Running expensive calculation...');
    return count * 2;
  }, [count]); // Recalculates only when 'count' changes

  return (
    <div>
      <p>Count: {count}</p>
      <p>Expensive Calculation Result: {expensiveCalculation}</p>
      <button onClick={() => setCount(prev => prev + 1)}>Increment Count</button>
      <button onClick={() => setOtherState(prev => !prev)}>Toggle Other State</button>
    </div>
  );
};

export default ExampleWithUseMemo;
