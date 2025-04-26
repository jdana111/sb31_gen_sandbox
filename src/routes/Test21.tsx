
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
