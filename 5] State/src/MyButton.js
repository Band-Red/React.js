import { useState } from "react";

// let name = "Ahmad";

export default function MyButton() {
    console.log("Rendered");

    // First Way
    /*const state = useState("Ahmed");
    const value = state[0];
    const setValue = state[1];*/

    // Second Way
    const [name, setName] = useState("Ahmed")

    // Button Click Handler
    function buttonClicked() {
        name === "Yarob" ? setName("Ahmad") : setName("Yarob");
    }

  return (
    <>
    
      <h3 className={"titleForm"}>Chalenge: Button related with State </h3>

      <br />
      <button onClick={buttonClicked}>Click Me</button>
      <h1>{name}</h1>
    </>
  );
}


