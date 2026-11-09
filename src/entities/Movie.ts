export interface Movie {
  adult: boolean;
  poster_path: string | null;
  id: number;
  release_date: string;
  title: string;
  overview: string;
  vote_average: number;
}
