import { Box, Text, Flex, Image } from "@chakra-ui/react";
import SubHeading from "./SubHeading";

const Bills = ({ data, heading1, gap }) => {
  return (
    <Box w="83%" m="auto" pt="4rem" pb="5rem">
      <Box>
        <SubHeading SubHeading={heading1} />
        <Flex gap={gap}>
          {data.map(({ src, title, description, heading }) => {
            return (
              <Box py=".8rem" pl=".8rem" pr="1rem">
                <Box>
                  <Image src={src} alt={title} w="64px" h="64px" />
                </Box>
                <Box mt="1rem">
                  <Text
                    fontSize="17px"
                    fontWeight="500"
                    fontFamily="poppins"
                    color="white"
                  >
                    {title}
                  </Text>
                  <Text
                    fontSize="17px"
                    fontWeight="500"
                    fontFamily="poppins"
                    color="white"
                  >
                    {heading}
                  </Text>
                  <Text
                    fontSize="15px"
                    fontWeight="500"
                    fontFamily="poppins"
                    color="white"
                  >
                    {description}
                  </Text>
                </Box>
              </Box>
            );
          })}
        </Flex>
      </Box>
    </Box>
  );
};

export default Bills;
