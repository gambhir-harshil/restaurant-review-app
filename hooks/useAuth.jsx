import { useEffect, useState } from "react";
import { getCurrentUser } from "services/apiAuth";

const useAuth = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCurrentUser() {
      try {
        setLoading(true);
        const user = await getCurrentUser();
        setCurrentUser(user);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchCurrentUser();
  }, []);

  return {
    currentUser,
    loading,
    isAuthenticated: currentUser?.role === "authenticated",
  };
};

export default useAuth;
