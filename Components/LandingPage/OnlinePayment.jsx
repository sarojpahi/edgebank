import { Box, Grid, Image, Flex, Text, Button } from "@chakra-ui/react";
import { DiApple } from "react-icons/di";

const OnlinePayment = () => {
  return (
    <Grid
      bg="white"
      p="4rem"
      gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
      gap="1rem"
      borderRadius="10px"
      mt="2rem"
    >
      <Box>
        <Flex align="center" mb="3rem">
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
        >
          Load up your Paytm Wallet for free and make payments in a jiffy at
          over 21 million stores, websites and apps.
        </Text>
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
      </Box>
      <Box>
        <Image
          src="https://assetscdn1.paytm.com/images/catalog/view_item/728701/1618577020961.png"
          alt="wallet"
          w="auto"
          h="auto"
        />
      </Box>
    </Grid>
  );
};

export default OnlinePayment;
