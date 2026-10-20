import { HStack, Switch, Text } from "@chakra-ui/react";
import { useTheme } from "next-themes";

function ColorModeSwitch() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <HStack>
      <Switch.Root
        colorPalette="green"
        checked={resolvedTheme === "dark"}
        onCheckedChange={({ checked }) => setTheme(checked ? "dark" : "light")}
      >
        <Switch.HiddenInput />
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
      </Switch.Root>
      <Text whiteSpace="nowrap"> Dark Mode </Text>
    </HStack>
  );
}

export default ColorModeSwitch;
