import useMovieQueryStore from "@/store";
import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const setSearchText = useMovieQueryStore((s) => s.setSearchText);
  const ref = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  return (
    <form
      style={{ width: "100%", flex: 1, minWidth: 0 }}
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          setSearchText(ref.current?.value);
          navigate("/");
        }
      }}
    >
      <InputGroup startElement={<BsSearch />}>
        <Input
          ref={ref}
          width="full"
          borderRadius={20}
          placeholder="Search movies..."
          variant="subtle"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
