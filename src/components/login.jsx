import { useRef } from "react";
// import {  } from "yup";
function Login() {
  const email = useRef();

  return (
    <div className="p-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email">Email adress</label>
          <input ref={email} type="email" className="form-control" id="email" aria-describedby="notshow" />
          <div id="notshow" className="form-text" style={{ color: "white" }}>
            we will never show your Email to anyone!
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="pass">Password</label>
          <input type="password" className="form-control" id="pass" />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(email.current.value);
  }
}
export default Login;