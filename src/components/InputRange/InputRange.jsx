export const InputRange = ({ type, handleChange, name, title }) => {
  return (
    <label>
      <div>
        {title}: {type} GB
      </div>
      <input
        onChange={e => {
          handleChange(e.target.value);
        }}
        value={type}
        type="range"
        min="0"
        max="1000"
        step="1"
        name={name}
      />
    </label>
  );
};
