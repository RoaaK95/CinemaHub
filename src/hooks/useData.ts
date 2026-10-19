// hooks/useData.ts (Conceptual fix for handling TMDB genres vs movies)
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError, type AxiosRequestConfig } from "axios";

interface FetchResponse<T> {
  count?: number;
  results?: T[];
  genres?: T[];
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig) => {
  const [response, setResponse] = useState<{
    data: T[];
    error: string;
    endpoint: string;
    requestConfig?: AxiosRequestConfig;
  } | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchResponse<T>>(endpoint, {
        ...requestConfig,
        signal: controller.signal,
      })
      .then((res) => {
        const fetchedData = res.data.results ?? res.data.genres ?? [];
        setResponse({
          data: fetchedData,
          error: "",
          endpoint,
          requestConfig,
        });
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setResponse({
          data: [],
          error: err instanceof Error ? err.message : String(err),
          endpoint,
          requestConfig,
        });
      });

    return () => controller.abort();
  }, [endpoint, requestConfig]);

  const isCurrentResponse =
    response?.endpoint === endpoint && response.requestConfig === requestConfig;

  return {
    data: isCurrentResponse ? response.data : [],
    error: isCurrentResponse ? response.error : "",
    isLoading: !isCurrentResponse,
  };
};

export default useData;
