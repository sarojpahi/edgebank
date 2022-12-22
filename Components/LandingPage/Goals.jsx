import { Box, Grid, Image, Flex, Text, Button } from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";
import Heading from "../../molecules/Heading";

const Goals = () => {
  return (
    <Box bg="white" position="relative">
      <Box
        backgroundImage="url(`https://pwebassets.paytm.com/commonwebassets/commonweb/images/home/gray-spike.png`)"
        bgRepeat="no-repeat"
        position="absolute"
        objectFit="cover"
        w="100%"
        h="50rem"
      />
      <Box w="70%" m="auto" py="5rem">
        <Grid
          gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
          //   gap="4rem"
          borderRadius="10px"
          mt="4rem"
        >
          <Box ml="auto">
            <Image
              src="https://assetscdn1.paytm.com/images/catalog/view_item/728826/1626076427497.png"
              alt="wallet"
              w="auto"
              h="499px"
            />
          </Box>
          <Box>
            <Flex align="center" mb="4rem">
              <Image
                src="https://assetscdn1.paytm.com/images/catalog/view/307193/1617696576778.png"
                alt="wallet"
                w="212px"
                h="34px"
              />
            </Flex>
            <Text
              color="black"
              fontSize="36px"
              fontWeight="600"
              fontFamily="poppins"
              maxWidth="400px"
              mb="1rem"
            >
              India's most sincere bank.
            </Text>
            <Text
              color="black"
              fontSize="19px"
              fontWeight="500"
              lineHeight="26px"
              fontFamily="poppins"
              mb="2rem"
              maxWidth="480px"
            >
              Pay anyone, everywhere. Make contactless & secure payments
              in-stores or online using Paytm Wallet or Directly from your Bank
              Account. Plus, send & receive money from anyone.
            </Text>
            <Button
              px="1.5rem"
              py="1.5rem"
              borderRadius="40px"
              bg="#002970"
              color="white"
              _hover={{
                border: "1px solid black",
                color: "black",
                bg: "white",
              }}
              rightIcon={<IoIosArrowForward fontSize="17px" />}
            >
              Learn More
            </Button>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default Goals;
