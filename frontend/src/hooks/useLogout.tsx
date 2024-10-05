import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const useLogout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { setAuthUser } = useAuth();

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
      });
      const data = await response.json();

      if (response.ok) {
        setAuthUser(null);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, handleLogout };
};

export default useLogout;
