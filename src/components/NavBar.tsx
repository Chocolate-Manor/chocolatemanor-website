import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Chocolate Manor Logo transparent.webp";

const NavBar = () => {
  return (
    <HStack>
      <Image
        src={logo}
        width="100px"
        height="auto"
      />
    </HStack>
  );
};

export default NavBar;
