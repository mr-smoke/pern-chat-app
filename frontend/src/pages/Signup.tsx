import { useState } from "react";
import useSignup from "../hooks/useSignup";

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
      <div className="border w-96 flex flex-col items-center gap-5 p-3">
        <h1 className="text-3xl">Signup Page</h1>
        <form className="flex flex-col gap-3" onSubmit={submitHandler}>
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name</label>
            <input
              className="border rounded-lg p-3"
              type="text"
              id="name"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="username">Username</label>
            <input
              className="border rounded-lg p-3"
              type="text"
              id="username"
              onChange={(e) => setForm({ ...form, username: e.target.value })}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password">Password</label>
            <input
              className="border rounded-lg p-3"
              type="password"
              id="password"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              className="border rounded-lg p-3"
              type="password"
              id="confirmPassword"
              onChange={(e) =>
                setForm({ ...form, confirmPassword: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="gender">Gender</label>
            <input
              type="radio"
              id="male"
              value="male"
              name="gender"
              onClick={(e) => setForm({ ...form, gender: e.target.value })}
            />
            <input
              type="radio"
              id="female"
              value="female"
              name="gender"
              onClick={(e) => setForm({ ...form, gender: e.target.value })}
            />
          </div>
          <button className="border rounded-xl p-3" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
