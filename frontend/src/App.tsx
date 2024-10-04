import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { useAuth } from "./context/AuthContext";

function App() {
  const { authUser, setAuthUser, isLoading } = useAuth();

  console.log(authUser);
  return (
    <>
      <Routes>
        {/* <Router path="/login" element={<Login />} />
        <Router path="/signup" element={<Signup />} /> */}
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
