import useData from "./useData";

export interface Movie {
  adult: boolean;
  poster_path: string;
  id: number;
  release_date: Date;
  title: string;
  vote_average: number;
}

const useMovies = () => useData<Movie>("/discover/movie");
export default useMovies;
