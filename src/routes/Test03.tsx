// Test03 (useCallback Basics)
// Source = https://react.dev/reference/react/useCallback
import React, { useState, useCallback } from 'react';

function Test03() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <Child onClick={increment} />
    </div>
  );
}

const Child = React.memo(({ onClick }) => {
  console.log('Child component rendered');
  return <button onClick={onClick}>Increment from Child</button>;
});

export default Test03;
