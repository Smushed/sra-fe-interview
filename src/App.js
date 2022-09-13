import CheckBox from "./CheckBox";
import TotalCount from "./TotalCount";

const App = () => {
  return (
    <div>
      <header className="App-header"></header>
      <div className="row justify-content-center">
        <div className="col-4">
          <TotalCount completedCount={10} />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="d-flex col-4 justify-content-center">
          <div>
            <h3>ToDo</h3>
            <CheckBox isChecked={false} title={"thisworks"} />
          </div>
        </div>
        <div className="col-4 justify-content-center">
          <h3>Completed</h3>
        </div>
      </div>
    </div>
  );
};

export default App;
