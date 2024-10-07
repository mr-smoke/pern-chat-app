import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { useAuth } from "./context/AuthContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Toaster } from "react-hot-toast";

function App() {
  const { authUser, isLoading } = useAuth();

  if (isLoading) return null;

  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={authUser ? <Navigate to={"/"} /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to={"/"} /> : <Signup />}
        />
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to={"/login"} />}
        />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
