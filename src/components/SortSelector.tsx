import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
// import usePlatforms from "../hooks/usePlatforms";
import { BsChevronDown } from "react-icons/bs";
// import { Platform } from "../hooks/useGames";

// interface Props {
//   onSelectPlatform: (platform: Platform) => void;
//   selectedPlatform: Platform | null;
// }

// const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
const PlatformSelector = () => {
  //   const { data, error } = usePlatforms();

  //   if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Sort by: Relevance
      </MenuButton>
      <MenuList>
        <MenuItem>Relevance</MenuItem>
        <MenuItem>Date Added</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Release Date</MenuItem>
        <MenuItem>Popularity</MenuItem>
        <MenuItem>Average Rating</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
