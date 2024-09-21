// Test09 (CSS Margin Collapse)
// Source: ChatGPT
import React from "react";

const SandboxComponent: React.FC = () => {
  return (
    <div style={{ backgroundColor: 'lightblue', padding: '10px' }}>
      <h1 style={{
        margin: '50px',
        padding: '30px 0',
        border: 'solid 1px blue',
        backgroundColor: '#FF2255',
      }}>
        Heading 1
      </h1>
      <h2 style={{
        margin: '20px 0 0 0',
        border: 'solid 1px blue',
        backgroundColor: 'red',
      }}>
        Heading 2
      </h2>
    </div>
  );
};


export default SandboxComponent;
