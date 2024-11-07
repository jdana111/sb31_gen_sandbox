// Test16 (Promises, Example 2)
// Source: ChatGPT

import React, { useEffect, useState } from 'react';

const Test16 = () => {
  const [data, setData] = useState(null);

  // Update fetchData to use async/await
  const fetchData = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { name: "Alice", age: 25 };
        resolve(data);
      }, 2000);
    });
  };

  useEffect(() => {
    // Define an async function inside useEffect to use await
    const fetchAndSetData = async () => {
      const result = await fetchData();
      setData(result); // Set the fetched data in state
    };

    fetchAndSetData();
  }, []);

  return (
    <div>
      <h1>Promises, async / await Construct</h1>
      {data ? (
        <div>
          <p>Name: {data.name}</p>
          <p>Age: {data.age}</p>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default Test16;
