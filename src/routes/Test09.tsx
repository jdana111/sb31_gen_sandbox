// Test09 (CSS Margin Collapse)
// Source: ChatGPT
import React from "react";

const Test09: React.FC = () => {
  return (
    <>
      <p>
        <b>Type 1, Sibling (Peer-Level) Margin Collapse:</b> The margins of adjacent
        elements overlap, and the larger margin takes precedence.
      </p>
      <div style={{ backgroundColor: 'lightblue' }}>
        <h1
          style={{
            padding: '30px 0',
            border: 'solid 1px blue',
            backgroundColor: '#FF2255',
          }}
        >
          Heading 1 (No explicit margins)
        </h1>
        <h1
          style={{
            margin: '20px 0 0 0',
            border: 'solid 1px blue',
            backgroundColor: 'red',
          }}
        >
          Heading 1 (No explcit padding)
        </h1>
      </div>
      <p>
        <b>Type 2, Parent-Child Margin Collapse:</b> When the parent has no
        padding/border/content, it "absorbs" the margin of the child.
      </p>
    </>
  );
};

export default Test09;
