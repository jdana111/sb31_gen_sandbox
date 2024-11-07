// Test15 (Promises, Classic Construct)
// Source: ChatGPT

import { useEffect, useState } from 'react';

const Test15 = () => {
  // State to store fetched data
  const [data, setData] = useState(null);

  // Function to simulate data fetching
  const fetchData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { name: "Alice", age: 25 };
        resolve(data);
      }, 2000);
    });
  };

  // useEffect to fetch data when component mounts
  useEffect(() => {
    fetchData().then((result) => {
      setData(result); // Set the fetched data in state
    });
  }, []);

  return (
    <div>
      <h1>Promises, Classic Construct</h1>
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

export default Test15;
