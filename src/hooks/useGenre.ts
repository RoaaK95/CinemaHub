import useGenres from "./useGenres";

const useGenre = (id?: number) => {
  const { data } = useGenres();
  return data?.genres?.find((genre) => genre.id === id);
};

export default useGenre;
