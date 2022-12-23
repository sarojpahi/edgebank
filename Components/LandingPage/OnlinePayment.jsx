import { Box, Grid, Image, Flex, Text, Button } from "@chakra-ui/react";
import { DiApple } from "react-icons/di";

const OnlinePayment = () => {
  return (
    <Grid
      bg="white"
      p={{ base: "1rem", lg: "4rem" }}
      gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
      gap={{ base: "3rem", md: "3rem", lg: "1rem" }}
      borderRadius="10px"
      mt="2rem"
    >
      <Box>
        <Flex
          align="center"
          mb="3rem"
          justify={{ base: "center", lg: "unset" }}
        >
          <Image
            src="https://assetscdn1.paytm.com/images/catalog/view/307185/1617861564011.png"
            alt="wallet"
            w="80px"
            h="80px"
          />
          <Text
            color="black"
            fontWeight="600"
            fontSize="15px"
            maxWidth="5rem"
            fontFamily="poppins"
            pl="1rem"
          >
            Paytm Wallet
          </Text>
        </Flex>
        <Text
          color="black"
          fontSize="36px"
          fontWeight="600"
          fontFamily="poppins"
          mb="1rem"
          maxWidth="400px"
          textAlign={{ base: "center", lg: "unset" }}
        >
          The Fastest Way to Pay In-store & Online.
        </Text>
        <Text
          color="black"
          fontSize="16px"
          fontWeight="500"
          lineHeight="26px"
          fontFamily="poppins"
          mb="2rem"
          maxWidth="480px"
          textAlign={{ base: "center", lg: "unset" }}
        >
          Load up your Paytm Wallet for free and make payments in a jiffy at
          over 21 million stores, websites and apps.
        </Text>
        <Flex justify={{ base: "center", lg: "unset" }}>
          <Button
            px="1.5rem"
            py=".3rem"
            borderRadius="40px"
            bg="black"
            color="white"
            _hover={{
              border: "1px solid black",
              color: "black",
              bg: "white",
            }}
            rightIcon={<DiApple fontSize="20px" />}
          >
            Download the App
          </Button>
        </Flex>
      </Box>
      <Box>
        <Image
          src="https://assetscdn1.paytm.com/images/catalog/view_item/728701/1618577020961.png"
          alt="wallet"
          w={{ base: "100%", md: "100%", lg: "auto" }}
          h={{ base: "100%", md: "100%", lg: "auto" }}
        />
      </Box>
    </Grid>
  );
};

export default OnlinePayment;
