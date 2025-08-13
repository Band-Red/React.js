import { useState } from "react";

export default function MyInput() {
  const [InputValue, setInputValue] = useState("");

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <>
      <h3 className={"titleForm"}>Chalenge: input with Manage State </h3>

      <label>
        Name:
        <input
          value={InputValue}
          type="text"
          placeholder="Enter your name"
          onChange={handleInputChange}
        />
      </label>
    </>
  );
}
