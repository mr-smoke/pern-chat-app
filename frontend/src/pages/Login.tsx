import { useState } from "react";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { loginHandler } = useLogin();

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    loginHandler(form.email, form.password);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border w-96 flex flex-col items-center gap-5 p-3">
        <h1 className="text-3xl">Login Page</h1>
        <form className="flex flex-col gap-3" onSubmit={submitHandler}>
          <div className="flex flex-col gap-1">
            <label htmlFor="username">Username</label>
            <input
              className="border rounded-lg p-3"
              type="text"
              id="username"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
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
          <button className="border rounded-xl p-3" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
