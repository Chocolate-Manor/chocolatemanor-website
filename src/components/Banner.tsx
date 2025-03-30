import { Box, Text } from "@chakra-ui/react";

const Banner = () => {
  return (
    <Box
      bg="#eb4034"
      p={4}
      textAlign="center"
      width="100%"
    >
      <Text fontSize="lg">
        Contact a developer:{" "}
        <a href="mailto:haocheng.yang@chocolatemanor.org">
          haocheng.yang@chocolatemanor.org
        </a>
      </Text>
    </Box>
  );
};

export default Banner;
