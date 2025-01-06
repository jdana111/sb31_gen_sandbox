// Test18 (TypeScript Sandbox)
// Rando comment - Keep this.

// Sandbox A – `?:` Operator and `| undefined` are not equivalent.
interface House {
  sqft: number;
  yard?: {
    sqft: number;
  };
}
// INSTRUCTIONS: In line 6, change `?:` to `:`, and add `| undefined` to line 8. 
// This will produce an error at the `const home` declaration in line 22.

function printYardSize(house: House) {
  const yardSize = house.yard?.sqft;
  if (yardSize === undefined) {
    return "No yard";
  } else {
    return `Yard is ${yardSize} sqft`;
  }
}

const home: House = {
  sqft: 500,
};

// Sandbox B – VSCode "Staging Line" feature.
// Rando comment - Keep this.

// Sandbox C – Create another test here.

function Test18() {
  return (
    <>
      <h1>Sandbox Test A</h1>
      <p>{printYardSize(home)}</p>
      <h1>Sandbox Test B</h1>
      <p>Unused</p>
      <h1>Sandbox Test C</h1>
      <p>Unused</p>
    </>
  );
}

export default Test18;
