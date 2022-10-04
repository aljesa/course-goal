import { useState } from "react";
import styled from "styled-components";
import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }
  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #004678;
  }

  &.invalid input {
    border-color: red;
    background-color: #d3002d17;
  }
`;

function CourseInput(props) {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl className={!isValid && "invalid"}>
        <label>Course Goal</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
          // style={{
          //   borderColor: !isValid ? "red" : "black",
          //   background: !isValid ? "#d3002d17" : "transparent",
          // }}
        />
        {!isValid && (
          <p className="error" style={{ color: "red" }}>
            The input should not be empty
          </p>
        )}
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
}
export default CourseInput;
