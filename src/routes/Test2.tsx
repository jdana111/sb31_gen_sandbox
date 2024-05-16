import { useRef } from "react";

export default function Form() {
  const inputRef = useRef<HTMLInputElement>(null);
  console.log("INITIAL inputRef.current =", inputRef.current);
  function handleClick() {
    inputRef.current!.focus();
    console.log("FUNCTION inputRef.current.value =", inputRef.current!.value);
    console.log("FUNCTION inputRef.current =", inputRef.current);
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
}
