import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError, type AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  total_pages?: number;
  results?: T[];
  genres?: T[];
}

interface DataResponse<T> {
  data: T[];
  error: string;
  totalPages: number;
  endpoint: string;
  requestConfig?: AxiosRequestConfig;
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig) => {
  const [response, setResponse] = useState<DataResponse<T> | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchResponse<T>>(endpoint, {
        ...requestConfig,
        signal: controller.signal,
      })
      .then((res) => {
        setResponse({
          data: res.data.results ?? res.data.genres ?? [],
          error: "",
          totalPages: res.data.total_pages ?? 1,
          endpoint,
          requestConfig,
        });
      })
      .catch((err: unknown) => {
        if (err instanceof CanceledError) return;

        setResponse({
          data: [],
          error: err instanceof Error ? err.message : String(err),
          totalPages: 0,
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
    totalPages: isCurrentResponse ? response.totalPages : 0,
  };
};

export default useData;
