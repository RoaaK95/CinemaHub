import { Button, Flex, Text } from "@chakra-ui/react";

interface Props {
  currentPage: number;
  totalPages: number;
  isLoading: boolean;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  isLoading,
  onPageChange,
}: Props) => {
  if (totalPages <= 1) return null;

  return (
    <Flex justifyContent="center" alignItems="center" gap={4} padding={4}>
      <Button
        variant="outline"
        disabled={isLoading || currentPage <= 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </Button>

      <Text>
        Page {currentPage} of {totalPages}
      </Text>

      <Button
        variant="outline"
        disabled={isLoading || currentPage >= totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </Button>
    </Flex>
  );
};

export default Pagination;
