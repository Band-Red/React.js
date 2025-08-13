import { useState } from "react";
import "./styleFormOhterField.css";

// Other element Form Filed with State
export default function FormOhterField() {
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    age: "",
    isStudent: false,
    Country: "",
    gender: "",
    generalInfo: "",
  });

  function handleCheckBoxChanged(event) {
    setFormInput({ ...formInput, isStudent: event.target.checked });
  }

  return (
    <>
      <h3 className={"titleForm"}>Chalenge: Form related with Other Field </h3>

      <br />

      <form
        id={"formSignIn"}
        onSubmit={(event) => {
          event.preventDefault();
          // console.log(formInput.name, formInput.email);
        }}
      >
        <h5 className={"partInformation"}>Form Information</h5>
        <br />
        <label>
          Name:
          <input
            value={formInput.name}
            onChange={(event) => {
              setFormInput({ ...formInput, name: event.target.value });
            }}
            type="text"
            placeholder="Enter your name"
          />
        </label>
        <label>
          Email:
          <input
            value={formInput.email}
            onChange={(event) => {
              setFormInput({ ...formInput, email: event.target.value });
            }}
            type="text"
            placeholder="Enter your email"
          />
        </label>
        <label>
          Age:
          <input
            value={formInput.age}
            onChange={(event) => {
              setFormInput({ ...formInput, age: event.target.value });
            }}
            type="text"
            placeholder="Enter your age"
          />
        </label>
        <hr />
        <h5 className={"partInformation"}>Additional Information</h5>
        <br />
        <label> Are you Student?</label>
        <input
          type="checkbox"
          checked={formInput.isStudent}
          onChange={handleCheckBoxChanged}
        />
        <hr />
        <h5 className={"partInformation"}>Choose Country</h5>
        <br />
        <select
          value={formInput.Country}
          onChange={(event) => {
            setFormInput({ ...formInput, Country: event.target.value });
          }}
        >
          <option value={"USA"}>USA</option>
          <option value={"KSA"}>KSA</option>
          <option value={"Australia"}>Australia</option>
        </select>

        <hr />

        <h5 className={"partInformation"}>Gender</h5>

        <input
          value="Male"
          type="radio"
          name="gender"
          checked={formInput.gender == "Male"}
          onChange={(event) => {
            setFormInput({ ...formInput, gender: event.target.value });
          }}
        />{" "}
        Male
        <input
          value="Female"
          type="radio"
          name="gender"
          checked={formInput.gender == "Female"}
          onChange={(event) => {
            setFormInput({ ...formInput, gender: event.target.value });
          }}
        />{" "}
        Female
        <hr />
        <h5 className={"partInformation"}>General Information</h5>
        <br />
        <textarea
          value={formInput.generalInfo}
          placeholder="Enter your text"
          onChangeCapture={(event) => {
            setFormInput({ ...formInput, generalInfo: event.target.value });
          }}
        />
        {/* {formInput.generalInfo}
        </textarea> */}
        <hr />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
