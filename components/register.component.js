import Link from "next/link";
import React, { useState } from "react";
import Required from "./required.component";
import toast from "react-hot-toast";

const Register = ({ setToggle }) => {
  const [avatar, setAvatar] = useState("");

  function handleRegistration(event) {
    event.preventDefault();

    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;
    const contactNumber = event.target.phone.value;
    const userInfo = {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      avatar,
      contactNumber,
    };

    const postNewUser = async () => {
      const request = await fetch(`http://localhost:5000/signup`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify(userInfo),
      });
      const response = await request.json();
      if (response.acknowledgement) {
        return toast.success("user sign up successfully.");
      }
    };
    postNewUser();

    event.target.reset();
  }

  // post user avatar
  function handleUserAvatar(event) {
    const formData = new FormData();
    formData.append("avatar", event.target.files[0]);

    const postUserAvatar = async () => {
      const request = await fetch(`http://localhost:5000/avatar/`, {
        method: "POST",
        body: formData,
      });
      const response = await request.json();
      console.log(response);
      setAvatar(response.data);
      if (response.acknowledgement) {
        return toast.success("avatar uploaded successfully.");
      }
    };
    postUserAvatar();
  }

  return (
    <form onSubmit={handleRegistration}>
      <div className="form-control">
        <label className="label">
          <span className="label-text">
            Full name <Required>*</Required>
          </span>
        </label>
        <input
          type="text"
          name="firstName"
          placeholder="Enter your first name"
          className="input input-bordered mb-1"
          required
        />
        <input
          type="text"
          name="lastName"
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
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">
            Confirm password <Required>*</Required>
          </span>
        </label>
        <input
          type="password"
          name="confirmPassword"
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
          name="avatar"
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
          onChange={handleUserAvatar}
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
          name="phone"
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
        <button className="btn btn-primary" type="submit">
          Register
        </button>
      </div>
    </form>
  );
};
export default Register;
