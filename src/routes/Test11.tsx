// Test11.tsx (Block vs Inline Elements)
// Source: ChatGPT
import React from "react";

const Test11: React.FC = () => {
  return (
    <>
      <div
        style={{
          display: "block",
          backgroundColor: "lightblue",
          padding: "20px 0 20px 10px",
          border: "2px solid blue",
        }}
      >
        <div
          style={{
            display: "inline",
            backgroundColor: "lightcoral",
            padding: "10px",
            border: "2px solid red",
          }}
        >
          Child 1
        </div>
        <div
          style={{
            display: "inline",
            backgroundColor: "lightcoral",
            padding: "10px",
            margin: "10px",
            border: "2px solid red",
          }}
        >
          Child 2
        </div>
      </div>
    </>
  );
};

export default Test11;
