import { useEffect, useState } from "react";
import { getRestaurantById } from "services/apiRestaurants";

const useData = (options) => {
  const { api, id } = options;
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = id ? await api(id) : await api();
        setData(res);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [api, id]);
  return {
    data,
    loading,
    error,
  };
};

export default useData;
