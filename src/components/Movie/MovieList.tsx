import useMovies from "@/hooks/useMovies";
import { getImageUrl } from "@/services/image-url";
import { Image, Text } from "@chakra-ui/react";

const MovieList = () => {
  const { data, error } = useMovies();
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {data.map((movie) => (
          <li key={movie.id}>
            <Text>{movie.adult}</Text>
            <Text>{movie.title}</Text>
            <Text>{movie.vote_average}</Text>
            <Image src={getImageUrl(movie.poster_path)} />
            <Date>{movie.release_date}</Date>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MovieList;
