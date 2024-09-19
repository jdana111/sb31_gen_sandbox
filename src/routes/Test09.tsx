// Test09 (CSS Margin Collapse)
// Source: ChatGPT
import React from 'react';

const SandboxComponent: React.FC = () => {
  return (
    <div>
      <p>
        In this example the h1 element has a bottom margin of 50px and the h2 element has a top margin of 20px.
        So, the vertical margin between h1 and h2 should have been 70px (50px + 20px). 
        However, due to margin collapse, the actual margin ends up being 50px.
      </p>

      <h1 style={{
        margin: '0 0 50px 0',
        padding: '30px 0',
        border: 'solid 1px blue',
        backgroundColor: 'yellow'
      }}>
        Heading 1
      </h1>

      <h2 style={{
        margin: '20px 0 0 0',
        border: 'solid 1px blue',
        backgroundColor: 'red'
      }}>
        Heading 2
      </h2>
    </div>
  );
};

export default SandboxComponent;
