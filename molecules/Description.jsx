import { Text } from "@chakra-ui/react";
import React from "react";

const Description = ({ description, maxWidth }) => {
  return (
    <Text
      color="black"
      fontSize="19px"
      fontWeight="500"
      lineHeight="25px"
      fontFamily="poppins"
      textAlign={{ base: "center", lg: "left" }}
      maxWidth={{ lg: maxWidth }}
    >
      {description}
    </Text>
  );
};

export default Description;
