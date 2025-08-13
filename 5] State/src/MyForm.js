import "./StyleMyForm.css";
import { useState } from "react";

// Form State Object
export default function MyForm() {
  // const [nameInput, setNameInput] = useState("");
  // const [emailInput, setEmailInput] = useState("");

  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    age: "",
  });

  return (
    <>

      <h3 className={"titleForm"}>Chalenge: Form input related with Object State </h3>

      <br />

      <form
        id={"form"}
        onSubmit={(event) => {
          event.preventDefault();
          // console.log(formInput.name, formInput.email);
        }}
      >
        <label>
          Name:
          <input
            value={formInput.name}
            onChange={(event) => {
              setFormInput({
                ...formInput,
                name: event.target.value,
              });
            }}
            type="text"
            placeholder="Enter your name"
          />
        </label>

        <label>
          Email:
          <input
            value={formInput.email}
            onChange={(e) => {
              setFormInput({ ...formInput, email: e.target.value });
            }}
            type="text"
            placeholder="Enter your email"
          />
        </label>

        <label>
          Age:
          <input
            value={formInput.age}
            onChange={(e) => {
              setFormInput({ ...formInput, age: e.target.value });
            }}
            type="text"
            placeholder="Enter your age"
          />
        </label>

        <hr />

        <button type="submit">Submit</button>
      </form>

      <br />
    </>
  );
}
