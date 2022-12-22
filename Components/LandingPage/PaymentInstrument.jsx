import { Box, Grid, Image, Flex, Text, Button } from "@chakra-ui/react";
import Heading from "../../molecules/Heading";
import { DiApple } from "react-icons/di";
import OnlinePayment from "./OnlinePayment";
import BankPayment from "./BankPayment";
import CardPayment from "./CardPayment";
import PostPaid from "./PostPaid";

const PaymentInstrument = () => {
  return (
    <Box w="70%" m="auto" py="6rem">
      <Heading heading="Paytm Payment Instruments" />
      <OnlinePayment />
      <PostPaid />
      <BankPayment />
      <CardPayment />
    </Box>
  );
};

export default PaymentInstrument;
