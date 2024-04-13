import { Input, Stack, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

const SearchBar = ({ callback }) => {
  const handleSearch = (e) => {
    callback(e.target.value);
  };
  return (
    <>
      <Stack margin={"5px"} w={"500px"} style={{ borderRadius: "20px" }}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Search2Icon />
          </InputLeftElement>
          <Input
            type="text"
            className="shadow"
            style={{
              border: "none",

              background: "rgb(238, 242, 246)",
            }}
            placeholder="search here"
            onChange={handleSearch}
          />
        </InputGroup>
      </Stack>
    </>
  );
};

export default SearchBar;
