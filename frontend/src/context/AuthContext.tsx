import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

type AuthUser = {
  id: string;
  username: string;
  name: string;
  profilePic: string;
  gender: string;
};

const AuthContext = createContext<{
  authUser: AuthUser | null;
  setAuthUser: Dispatch<SetStateAction<AuthUser | null>>;
  isLoading: boolean;
}>({
  authUser: null,
  setAuthUser: () => null,
  isLoading: true,
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [authUser, setAuthUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAuthUser = async () => {
      try {
        const response = await fetch("/api/auth/getAuth");
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

    fetchAuthUser();
  }, []);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
