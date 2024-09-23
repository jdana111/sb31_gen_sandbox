// Test11.tsx (Block vs Inline Elements)
// Source: ChatGPT
import React from "react";

const Test11: React.FC = () => {
  return (
    <>
      <span>some text...</span>
      <p
        style={{
          display: "inline",
          backgroundColor: "lightcoral",
          padding: "10px",
          margin: "10px",
          border: "2px solid red",
          width: "200px", // This will be ignored for inline elements
        }}
      >
        This is an inline element (display: inline)
      </p>
      <span>some more text...</span>
    </>
  );
};

export default Test11;
