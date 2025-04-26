// Test21 (useEffect with console.log)
// Source: (ChatGPT, GLD useMemo, useEffect... Review v1, https://chatgpt.com/c/680ce6d7-caa4-8009-b15d-ebbdecc7dda7)
import React, { useEffect, useState } from 'react';

const ExampleComponent: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('The count value is:', count);
  }, [count]); // The effect runs whenever 'count' changes

  return (
    <div>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Increase Count
      </button>
    </div>
  );
};

export default ExampleComponent;
