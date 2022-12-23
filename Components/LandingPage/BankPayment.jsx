import { Box, Grid, Image, Flex, Text, Button } from "@chakra-ui/react";
import { DiApple } from "react-icons/di";

const BankPayment = () => {
  return (
    <Grid
      bg="white"
      p={{ base: "1rem", lg: "6rem" }}
      gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
      gap="4rem"
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
            src="https://assetscdn1.paytm.com/images/catalog/view/307191/1613622537678.png"
            alt="wallet"
            w="183px"
            h="77px"
          />
        </Flex>
        <Text
          color="black"
          fontSize="36px"
          fontWeight="600"
          fontFamily="poppins"
          textAlign={{ base: "center", lg: "unset" }}
        >
          Want it?
        </Text>
        <Text
          color="black"
          fontSize="36px"
          fontWeight="600"
          fontFamily="poppins"
          mb="1rem"
          textAlign={{ base: "center", lg: "unset" }}
        >
          No more waiting for it.
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
          With Paytm Postpaid, your wishlist doesn't have to be on the waitlist.
          Shop for the things you want today and pay for them next month.
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
          src="https://assetscdn1.paytm.com/images/catalog/view_item/850764/1626077030984.png"
          alt="wallet"
          w={{ base: "100%", md: "100%", lg: "auto" }}
          h={{ base: "100%", md: "100%", lg: "auto" }}
        />
      </Box>
    </Grid>
  );
};

export default BankPayment;
