import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
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
