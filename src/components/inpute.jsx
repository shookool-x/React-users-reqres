function Input({ type, describe, handleChange, value }) {
  return (
    <>
      <label htmlFor="email">{describe}</label>
      <input onChange={handleChange} value={value} className="form-control" name={type} id={type} aria-describedby="notshow" />
    </>
  );


}

export default Input;