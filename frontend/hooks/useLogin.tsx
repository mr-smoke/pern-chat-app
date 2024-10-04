import { useAuth } from "../context/AuthContext";

const useLogin = () => {
    const [login, setLogin] = useState(false);
    const { authUser, setAuthUser } = useAuth();

