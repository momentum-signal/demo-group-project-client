import Link from "next/link";
import React from "react";
import Required from "./required.component";
import toast from "react-hot-toast";

const Login = ({ setToggle }) => {
  function handleLogin(event) {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    const userInfo = { email, password };

    const postExistingUser = async () => {
      const request = await fetch(`http://localhost:5000/signin`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify(userInfo),
      });
      const response = await request.json();
      if (response.acknowledgement) {
        localStorage.setItem("accessToken", response.data.token);
        return toast.success("user sign in successfully.");
      }
    };
    postExistingUser();

    event.target.reset();
  }

  return (
    <form onSubmit={handleLogin}>
      <div className="form-control">
        <label className="label">
          <span className="label-text">
            Email <Required>*</Required>
          </span>
        </label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">
            Password <Required>*</Required>
          </span>
        </label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          className="input input-bordered"
          required
        />
        <label className="label flex justify-between">
          <Link href="/">
            <a
              className="label-text-alt link link-hover underline"
              onClick={() => setToggle("reset")}
            >
              Forgot password?
            </a>
          </Link>
          <Link href="/">
            <a
              className="label-text-alt link link-hover underline"
              onClick={() => setToggle("register")}
            >
              <Required>#</Required> Create an account?
            </a>
          </Link>
        </label>
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </div>
    </form>
  );
};
export default Login;
