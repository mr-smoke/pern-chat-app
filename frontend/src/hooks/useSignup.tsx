import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const useSignup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { setAuthUser } = useAuth();

  const signupHandler = async (
    username: string,
    password: string,
    name: string,
    gender: string,
    confirmPassword: string
  ) => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          name,
          gender,
          confirmPassword,
        }),
      });
      const data = await response.json();

      if (response.ok) {
        setAuthUser(data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, signupHandler };
};

export default useSignup;
