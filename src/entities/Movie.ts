import type { ProductionCompanies } from "./ProductionCompanies";
import type { Genre } from "./Genre";

export interface Movie {
  adult: boolean;
  poster_path: string | null;
  id: number;
  genres: Genre[];
  production_companies: ProductionCompanies[];
  release_date: string;
  title: string;
  overview: string;
  vote_average: number;
  runtime: number;
}
