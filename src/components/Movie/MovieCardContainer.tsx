import { Box } from "@chakra-ui/react";
import { type ReactNode } from "react";

interface Props {
  childern: ReactNode;
}
const MovieCardContainer = ({ childern }: Props) => {
  return (
    <Box
      transition="transform 0.2s, box-shadow 0.2s"
      _hover={{
        transform: "scale(1.03)",
      }}
      borderRadius={10}
      overflow="hidden"
    >
      {childern}
    </Box>
  );
};

export default MovieCardContainer;
