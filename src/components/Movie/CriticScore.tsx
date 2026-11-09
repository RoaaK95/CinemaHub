import { Badge, type BadgeProps } from "@chakra-ui/react";

interface Props extends BadgeProps {
  score: number;
}

const CriticScore = ({ score, ...props }: Props) => {
  const colorPalette = score >= 7.5 ? "green" : score >= 6 ? "yellow" : "red";
  if (score === 0) {
    return (
      <Badge colorPalette="gray" variant="subtle" {...props}>
        N/A
      </Badge>
    );
  }
  return (
    <Badge
      colorPalette={colorPalette}
      variant="subtle"
      fontSize="sm"
      fontWeight="bold"
      px={2}
      py={1}
      borderRadius="md"
      {...props}
    >
      {score.toFixed(1)}
    </Badge>
  );
};

export default CriticScore;
