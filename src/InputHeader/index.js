const InputHeader = ({
  completedCount,
  addHandler,
  resetHandler,
  inputHandler,
  inputText,
}) => (
  <h2 className="mt-3 mb-3">
    <div className="row justify-content-center">
      Completed Tasks: {completedCount}
    </div>
    <div className="row justify-content-center mt-2">
      <div className="col-12 input-group justify-content-center">
        <input
          type="text"
          className="form-contol"
          placeholder="New ToDo Item"
          onChange={inputHandler}
          value={inputText}
        />
      </div>
      <div className="col-3">
        <button className="btn btn-info" onClick={() => addHandler()}>
          Add ToDo
        </button>
      </div>
      <div className="col-3">
        <button className="btn btn-warning" onClick={() => resetHandler()}>
          Reset
        </button>
      </div>
    </div>
  </h2>
);

export default InputHeader;
