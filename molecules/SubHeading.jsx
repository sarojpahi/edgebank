import { Box, Text } from "@chakra-ui/layout";

const SubHeading = ({ SubHeading }) => {
  return (
    <Text
      color="white"
      fontSize="36px"
      fontWeight="600"
      fontFamily="poppins"
      mb="1rem"
      textAlign={{ md: "center", lg: "unset" }}
    >
      {SubHeading}
    </Text>
  );
};

export default SubHeading;
