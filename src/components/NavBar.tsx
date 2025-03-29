import { HStack, Image, Text, Spacer } from "@chakra-ui/react";
import logo from "../assets/Chocolate Manor Logo transparent.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image
        src={logo}
        width="100px"
        height="auto"
      />
      <Text color="white">Welcome, Dear Stranger.</Text>
      <Spacer />
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
