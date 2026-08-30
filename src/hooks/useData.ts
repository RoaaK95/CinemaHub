import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface Movie {
  id: number;
  title: string;
}

interface FetchDataResponse {
  page: number;
  results: Movie[];
}
const useData = () => {
  const [data, setData] = useState<Movie[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchDataResponse>("/discover/movie", { signal: controller.signal })
      .then((res) => setData(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    return () => controller.abort();
  }, []);

  return { data, error };
};
export default useData;
