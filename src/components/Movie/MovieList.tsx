import useData from "@/hooks/useData";
import { Text } from "@chakra-ui/react";

const MovieList = () => {
  const { data, error } = useData();
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {data.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </>
  );
};

export default MovieList;
