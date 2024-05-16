import { useRef } from "react";

export default function Form() {
  const inputRef = useRef<HTMLInputElement>(null);
  function handleClick() {
    inputRef.current!.focus();
    console.log("inputRef.current =", inputRef.current);
    console.log("inputRef.current.value =", inputRef.current!.value);
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
}
