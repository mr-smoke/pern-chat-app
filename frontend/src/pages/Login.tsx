import { useState } from "react";
import useLogin from "../hooks/useLogin";
import Loading from "../components/Loading";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { isLoading, loginHandler } = useLogin();

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    loginHandler(form.email, form.password);
  };

  return (
    <main className="flex items-center justify-center h-screen">
      <div className="border rounded-xl flex flex-col gap-3 py-16 p-8 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 text-white xl:w-1/4">
        <h1 className="text-3xl text-center">
          Login <span className="text-slate-700 font-bold">ChatMania</span>
        </h1>
        <form className="flex flex-col gap-4" onSubmit={submitHandler}>
          <div className="flex flex-col gap-1">
            <label htmlFor="username">Username</label>
            <input
              className="border rounded-lg p-3 text-black"
              type="text"
              id="username"
              maxLength={20}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
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
          <p>
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-500">
              Signup
            </a>
          </p>
          <div className="flex justify-center">
            <button
              className="border rounded-xl py-3 px-5 w-max hover:opacity-70"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? <Loading /> : "Login"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
