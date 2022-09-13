import React from "react";
import CheckBox from "./CheckBox";
import InputHeader from "./InputHeader";

const App = () => {
  const clickReset = () => {};

  const completeToDo = () => {};

  const uncompleteToDo = () => {};

  const newItem = () => {};

  const updateText = () => {};

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-4">
          <InputHeader
            completedCount={0}
            resetHandler={clickReset}
            addHandler={newItem}
            inputHandler={updateText}
            inputText={""}
          />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="d-flex col-4 justify-content-center">
          <div>
            <h3>ToDo</h3>
            {[].map((item) => (
              <CheckBox
                isChecked={item.checked}
                title={item.title}
                clickHandler={completeToDo}
                key={item.title}
              />
            ))}
          </div>
        </div>
        <div className="col-4 justify-content-center">
          <h3>Completed</h3>
          {[].map((item) => (
            <CheckBox
              isChecked={item.checked}
              title={item.title}
              clickHandler={uncompleteToDo}
              key={item.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
