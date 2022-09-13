const CheckBox = ({ isChecked, title }) => (
  <>
    <input
      className="form-check-input"
      type="checkbox"
      checked={isChecked}
      readOnly
      id={title}
    />
    <label class="form-check-label ms-2" htmlFor={title}>
      {title}
    </label>
  </>
);

export default CheckBox;
