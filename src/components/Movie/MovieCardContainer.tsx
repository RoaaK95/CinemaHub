import { Box } from "@chakra-ui/react";
import React, { type ReactNode } from "react";

interface Props {
  childern: ReactNode;
}
const MovieCardContainer = ({ childern }: Props) => {
  return (
    <Box borderRadius={10} overflow="hidden">
      {childern}
    </Box>
  );
};

export default MovieCardContainer;
