import { Button, Text, Box } from "@chakra-ui/react";
import { useState } from "react";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 200;

  if (!children) return null;

  if (children.length <= limit) {
    return <Text lineHeight="tall">{children}</Text>;
  }

  const summary = expanded
    ? children
    : children.substring(0, limit).trimEnd() + "...";

  return (
    <Box>
      <Text lineHeight="tall" color="fg.muted">
        {summary}
      </Text>

      <Button
        variant="outline"
        colorPalette="yellow"
        size="xs"
        mt={3}
        px={3}
        borderRadius="full"
        fontWeight="semibold"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
      >
        {expanded ? "Show less" : "Read more"}
        {expanded ? <LuChevronUp /> : <LuChevronDown />}
      </Button>
    </Box>
  );
};

export default ExpandableText;
