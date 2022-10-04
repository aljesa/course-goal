import { useState } from "react";
import Button from "../../UI/Button/Button";
import "./CourseInput.css";

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
      <div className={`form-control ${!isValid ? "invalid" : ""}`}>
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
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
}
export default CourseInput;
