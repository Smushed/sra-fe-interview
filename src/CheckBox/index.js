const CheckBox = ({ isChecked, title, clickHandler }) => (
  <div>
    <input
      onClick={() => clickHandler(title)}
      className="form-check-input"
      type="checkbox"
      checked={isChecked}
      readOnly
      id={title}
    />
    <label className="form-check-label ms-2" htmlFor={title}>
      {title}
    </label>
  </div>
);

export default CheckBox;
