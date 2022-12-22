import { Box, Grid, Image, Flex, Text, Button } from "@chakra-ui/react";
import { DiApple } from "react-icons/di";

const CardPayment = () => {
  return (
    <Grid
      gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
      gap="2.5rem"
      mt="2rem"
    >
      <Box bg="white" borderRadius="10px" px="3rem" pt="3rem">
        <Flex align="center" mb="3rem">
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
          mb="1rem"
        >
          Unlimited Cashback Every time
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
          Paytm HDFC Bank Select Credit Card. A card with assured Cashback and
          incredible offers.
        </Text>
        <Image
          src="https://assetscdn1.paytm.com/images/catalog/view_item/853975/1640241561388.png"
          alt="wallet"
          w="auto"
          h="auto"
        />
      </Box>
      <Box bg="white" borderRadius="10px" px="3rem" pt="3rem">
        <Flex align="center" pb="3rem">
          <Image
            src="https://assetscdn1.paytm.com/images/catalog/view_item/853976/1640242163727.png"
            alt="wallet"
            w="196px"
            h="20px"
          />
        </Flex>
        <Text
          color="black"
          fontSize="36px"
          fontWeight="600"
          fontFamily="poppins"
          mb="1rem"
        >
          India’s Most Sincere Credit Card
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
          Paytm HDFC Bank Select Credit Card. A card with assured Cashback and
          incredible offers.
        </Text>
        <Box mt="auto">
          <Image
            src="https://assetscdn1.paytm.com/images/catalog/view_item/853976/1626079147084.png"
            alt="wallet"
            w="auto"
            h="auto"
          />
        </Box>
      </Box>
    </Grid>
  );
};

export default CardPayment;
