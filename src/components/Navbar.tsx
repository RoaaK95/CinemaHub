import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
    </HStack>
  );
};

export default Navbar;
