import Link from "next/link";
import React from "react";
import Required from "./required.component";

const Register = ({ setToggle }) => {
  return (
    <form>
      <div className="form-control">
        <label className="label">
          <span className="label-text">
            Full name <Required>*</Required>
          </span>
        </label>
        <input
          type="text"
          placeholder="Enter your first name"
          className="input input-bordered mb-1"
          required
        />
        <input
          type="text"
          placeholder="Enter your last name"
          className="input input-bordered mt-1"
          required
        />
      </div>
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
        <label className="label">
          <span className="label-text">
            Password <Required>*</Required>
          </span>
        </label>
        <input
          type="password"
          placeholder="Enter your password"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">
            Confirm password <Required>*</Required>
          </span>
        </label>
        <input
          type="password"
          placeholder="Re-Enter your password"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">
            Avatar <Required>*</Required>
          </span>
        </label>
        <input
          type="file"
          className="text-sm text-grey-500
            file:mr-5 file:py-2 file:px-6
            file:rounded-full file:border-0
            file:text-sm file:font-medium
            file:bg-blue-50 file:text-blue-700
            hover:file:cursor-pointer hover:file:bg-amber-50
            hover:file:text-amber-700
            shadow-sm pb-2 rounded-lg
          "
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">
            Contact number <Required>*</Required>
          </span>
        </label>
        <input
          type="number"
          placeholder="Enter your phone number"
          className="input input-bordered"
          required
        />
        <label className="label flex justify-between mt-2">
          <Link href="/">
            <a
              className="label-text-alt link link-hover underline"
              onClick={() => setToggle("login")}
            >
              <Required>#</Required> Already have an account?
            </a>
          </Link>
        </label>
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary">Register</button>
      </div>
    </form>
  );
};
export default Register;
