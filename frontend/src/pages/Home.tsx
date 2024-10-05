import useLogout from "../hooks/useLogout";

const Home = () => {
  const { handleLogout } = useLogout();
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the home page!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
