import { Box, Grid, Image, Button, rightIcon, Flex } from "@chakra-ui/react";
import Bills from "../../molecules/Bills";

const data = [
  {
    src: "https://assetscdn1.paytm.com/images/catalog/view_item/733299/1626251017535.png",
    title: "Recharge",
    heading: "Prepaid",
    description: "Mobile  >",
  },
  {
    src: "https://assetscdn1.paytm.com/images/catalog/view_item/733308/1626251043534.png",
    title: "Pay",
    heading: "Electricity",
    description: "Bill  >",
  },
  {
    src: "https://assetscdn1.paytm.com/images/catalog/view_item/733311/1626251101045.png",
    title: "Recharge",
    heading: "DTH",
    description: "Connection  >",
  },
  {
    src: "https://assetscdn1.paytm.com/images/catalog/view_item/733307/1626251127863.png",
    title: "Book",
    heading: "Gas",
    description: "Cyclinder  >",
  },
  {
    src: "https://assetscdn1.paytm.com/images/catalog/view_item/733304/1627454209116.png",
    title: "Pay",
    heading: "Credit",
    description: "Card Bill  >",
  },
  {
    src: "https://assetscdn1.paytm.com/images/catalog/view_item/757701/1626268580682.png",
    title: "All",
    heading: "Payment",
    description: "Services  >",
  },
];

const data1 = [
  {
    src: "https://assetscdn1.paytm.com/images/catalog/view_item/733295/1626259710574.png",
    title: "Movie",
    description: "Tickets  >",
  },
  {
    src: "https://assetscdn1.paytm.com/images/catalog/view_item/733296/1626259884425.png",
    title: "Flight",
    description: "Tickets  >",
  },
  {
    src: "https://assetscdn1.paytm.com/images/catalog/view_item/729997/1626260495975.png",
    title: "Bus",
    description: "Tickets  >",
  },
  {
    src: "https://assetscdn1.paytm.com/images/catalog/view_item/729998/1666185237748.png",
    title: "Buy",
    description: "Insurance  >",
  },
  {
    src: "https://assetscdn1.paytm.com/images/catalog/view_item/729999/1626259968563.png",
    title: "International",
    description: "Flights  >",
  },
  {
    src: "https://assetscdn1.paytm.com/images/catalog/view_item/730001/1626450848003.png",
    title: "Invest",
    description: "In Stocks  >",
  },
  {
    src: "https://assetscdn1.paytm.com/images/catalog/view_item/729996/1626260477699.png",
    title: "Train",
    description: "Tickets  >",
  },
];
const BillAndRecharge = () => {
  return (
    <Box>
      <Box bg="#00baf2" h="auto">
        <Bills
          data={data}
          heading1="Recharge & Pay Bills on Paytm."
          gap="5.5rem"
        />
      </Box>
      <Flex bg="#0f4a8a" h="auto">
        <Bills
          data={data1}
          heading1="Recharge & Pay Bills on Paytm."
          gap="5rem"
        />
      </Flex>
    </Box>
  );
};

export default BillAndRecharge;
