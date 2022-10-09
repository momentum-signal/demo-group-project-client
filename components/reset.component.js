import Link from "next/link";
import React from "react";
import Required from "./required.component";

const Reset = ({ setToggle }) => {
  return (
    <form>
      <div className="form-control">
        <label className="label">
          <span className="label-text">
            Email <Required>*</Required>
          </span>
        </label>
        <input
          type="email"
          placeholder="Enter your email"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label flex justify-between">
          <Link href="/">
            <a
              className="label-text-alt link link-hover underline"
              onClick={() => setToggle("register")}
            >
              <Required>#</Required> Wanna log in?
            </a>
          </Link>
        </label>
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary">Reset</button>
      </div>
    </form>
  );
};
export default Reset;
