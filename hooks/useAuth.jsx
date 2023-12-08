import { useEffect, useState } from "react";
import { getCurrentUser } from "services/apiAuth";

const useAuth = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    async function fetchCurrentUser() {
      try {
        setLoading(true);
        const user = await getCurrentUser();
        setCurrentUser(user);
        if (!currentUser) {
          setIsAuthenticated(false);
        } else {
          setIsAuthenticated(true);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchCurrentUser();
  }, []);

  return { currentUser, loading, isAuthenticated };
};

export default useAuth;
