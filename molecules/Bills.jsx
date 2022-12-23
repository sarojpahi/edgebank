import { Box, Text, Flex, Image } from "@chakra-ui/react";
import SubHeading from "./SubHeading";

const Bills = ({ data, heading1, gap }) => {
  return (
    <Box w="83%" m="auto" pt="4rem" pb="5rem">
      <Box>
        <SubHeading SubHeading={heading1} />
        <Flex
          gap={gap}
          flexDirection={{ base: "column", lg: "unset" }}
          justifyContent={{ base: "center", lg: "unset" }}
        >
          {data.map(({ src, title, description, heading }) => {
            return (
              <Flex
                py=".8rem"
                pl=".8rem"
                pr="1rem"
                direction={"column"}
                justifyContent={{ base: "center", lg: "center" }}
              >
                <Box>
                  <Flex justifyContent={{ base: "center", lg: "unset" }}>
                    <Image
                      src={src}
                      alt={title}
                      w={{ base: "70px", md: "150px", lg: "64px" }}
                      h={{ base: "70px", md: "150px", lg: "64px" }}
                    />
                  </Flex>
                  <Flex
                    mt="1rem"
                    direction={"column"}
                    justifyContent={{ base: "center", lg: "unset" }}
                  >
                    <Text
                      fontSize={{ md: "23px", lg: "17px" }}
                      fontWeight="500"
                      fontFamily="poppins"
                      color="white"
                      textAlign={{ base: "center", lg: "unset" }}
                    >
                      {title}
                    </Text>
                    <Text
                      fontSize={{ md: "22px", lg: "17px" }}
                      fontWeight="500"
                      fontFamily="poppins"
                      color="white"
                      textAlign={{ base: "center", lg: "unset" }}
                    >
                      {heading}
                    </Text>
                    <Text
                      fontSize={{ md: "22px", lg: "15px" }}
                      fontWeight="500"
                      fontFamily="poppins"
                      color="white"
                      textAlign={{ base: "center", lg: "unset" }}
                    >
                      {description}
                    </Text>
                  </Flex>
                </Box>
              </Flex>
            );
          })}
        </Flex>
      </Box>
    </Box>
  );
};

export default Bills;
