// Test11.tsx (Block vs Inline Elements)
// Source: ChatGPT
import React from 'react';

const Test11: React.FC = () => {
  return (
    <div style={{ padding: '20px', border: '1px solid black' }}>
      {/* Block element */}
      <div
        style={{
          display: 'block',
          backgroundColor: 'lightblue',
          padding: '10px',
          margin: '10px',
          border: '2px solid blue',
          width: '200px',
        }}
      >
        This is a block element (display: block)
      </div>

      {/* Inline element */}
      <div
        style={{
          display: 'inline',
          backgroundColor: 'lightcoral',
          padding: '10px',
          margin: '10px',
          border: '2px solid red',
          width: '200px', // This will be ignored for inline elements
        }}
      >
        This is an inline element (display: inline)
      </div>
    </div>
  );
};

export default Test11;
