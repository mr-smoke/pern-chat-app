import { useState } from "react";
import useSignup from "../hooks/useSignup";
import { FaFemale, FaMale } from "react-icons/fa";

const Login = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
    name: "",
    confirmPassword: "",
    gender: "",
  });

  const { isLoading, signupHandler } = useSignup();

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    signupHandler(
      form.username,
      form.password,
      form.name,
      form.gender,
      form.confirmPassword
    );
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border rounded-xl flex flex-col gap-3 py-16 p-8 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 text-white xl:w-1/4">
        <h1 className="text-3xl text-center">
          Signup <span className="text-slate-700 font-bold">ChatMania</span>
        </h1>
        <form className="flex flex-col gap-3" onSubmit={submitHandler}>
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name</label>
            <input
              className="border rounded-lg p-3 text-black"
              type="text"
              id="name"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="username">Username</label>
            <input
              className="border rounded-lg p-3 text-black"
              type="text"
              id="username"
              onChange={(e) => setForm({ ...form, username: e.target.value })}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password">Password</label>
            <input
              className="border rounded-lg p-3 text-black"
              type="password"
              id="password"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              className="border rounded-lg p-3 text-black"
              type="password"
              id="confirmPassword"
              onChange={(e) =>
                setForm({ ...form, confirmPassword: e.target.value })
              }
            />
          </div>
          <div className="flex gap-3 justify-center">
            <div className="flex gap-1">
              <input
                className="hidden peer"
                type="radio"
                id="male"
                value="male"
                name="gender"
                onClick={(e) => setForm({ ...form, gender: e.target.value })}
              />
              <label
                htmlFor="male"
                className="border rounded-lg p-3 cursor-pointer peer-checked:bg-blue-500 peer-checked:text-white flex items-center"
              >
                <FaMale size={20} />
              </label>
            </div>
            <div className="flex gap-1">
              <input
                className="hidden peer"
                type="radio"
                id="female"
                value="female"
                name="gender"
                onClick={(e) => setForm({ ...form, gender: e.target.value })}
              />
              <label
                htmlFor="female"
                className="border rounded-lg p-3 cursor-pointer peer-checked:bg-blue-500 peer-checked:text-white flex items-center"
              >
                <FaFemale size={20} />
              </label>
            </div>
          </div>
          <p>
            Already have an account?{" "}
            <a href="/login" className="text-blue-500">
              Login
            </a>
          </p>
          <div className="flex justify-center">
            <button
              className="border rounded-xl py-3 px-5 w-max hover:opacity-70"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Signup"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
