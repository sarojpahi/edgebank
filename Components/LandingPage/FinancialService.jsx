import { Box, Grid, Image, Flex, Text, Button } from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";
import Heading from "../../molecules/Heading";

const FinancialService = () => {
  return (
    <Box bg="white">
      <Box
        w={{ base: "95%", md: "90%", lg: "70%" }}
        m="auto"
        py={{ base: "2rem", md: "3rem", lg: "5rem" }}
      >
        <Heading heading="Financial Services by Paytm" />
        <Grid
          gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
          //   gap="4rem"
          borderRadius="10px"
          mt="4rem"
        >
          <Box>
            <Flex
              align="center"
              mb="4rem"
              justify={{ base: "center", lg: "unset" }}
            >
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
              textAlign={{ base: "center", lg: "unset" }}
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
              textAlign={{ base: "center", lg: "unset" }}
            >
              Pay anyone, everywhere. Make contactless & secure payments
              in-stores or online using Paytm Wallet or Directly from your Bank
              Account. Plus, send & receive money from anyone.
            </Text>
            <Flex
              justify={{ base: "center", lg: "unset" }}
              mt={{ base: "3rem", lg: "unset" }}
            >
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
            </Flex>
          </Box>
          <Box ml="auto" mt={{ base: "3rem", lg: "unset" }}>
            <Image
              src="https://assetscdn1.paytm.com/images/catalog/view_item/728826/1626076427497.png"
              alt="wallet"
              w={{ base: "", lg: "auto" }}
              h={{ base: "", lg: "499px" }}
            />
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default FinancialService;
