import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Heading = ({ heading, maxWidth }) => {
  return (
    <Text
      color="black"
      fontSize={{ base: "45px", sm: "45px", md: "", lg: "54px" }}
      fontWeight="700"
      lineHeight="-10px"
      fontFamily=""
      textAlign={{ base: "center", sm: "center", md: "center", lg: "left" }}
      maxWidth={{ lg: maxWidth }}
    >
      {heading}
    </Text>
  );
};

export default Heading;
