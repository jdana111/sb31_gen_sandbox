// Test17 (Destructuring with TS)
// Source: ChatGPT

// Define the props for the Child component
interface ChildProps {
  message: string;
  count: number;
}

// Child Component
function Child({ message, count }: ChildProps) {
// function Child({ message, count }: ChildProps) {
  return (
      <div>
          <p>{message}</p>
          <p>Count: {count}</p>
      </div>
  );
}

// Parent Component
function Test17() {
  const message: string = "Hello from the Parent component!";
  const count: number = 42;

  return (
      <div>
          <h1>Parent Component</h1>
          <Child message={message} count={count} />
      </div>
  );
}

export default Test17;
