import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T,>(
  endpoint: string,
  requestConfig: AxiosRequestConfig = {},
  deps: any[] = []
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const { params: requestParams, ...requestOptions } = requestConfig;

    const path = endpoint.replace(/^\/+/, "");

    setError("");
    setLoading(true);

    apiClient
      .get<FetchResponse<T>>("/", {
        ...requestOptions,
        signal: controller.signal,
        params: {
          ...(requestParams ?? {}),
          path,
        },
      })
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((err: unknown) => {
        if (err instanceof CanceledError) {
          return;
        }

        setError(
          err instanceof Error
            ? err.message
            : "An unexpected error occurred."
        );
        setLoading(false);
      });

    return () => controller.abort();
  }, deps);

  return { data, error, isLoading };
};

export default useData;
