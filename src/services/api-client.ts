import axios from "axios";

export interface FetchResponse<T> {
  total_pages?: number;
  results?: T[];
  genres?: T[];
}

const apiClient = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_READ_ACCESS_TOKEN}`,
    "Content-Type": "application/json",
  },
});

export default apiClient;
