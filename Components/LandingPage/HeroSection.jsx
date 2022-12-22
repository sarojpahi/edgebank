import { Box, Grid, Image, rightIcon, Flex } from "@chakra-ui/react";
import Description from "../../molecules/Description";
import Heading from "../../molecules/Heading";

import DownloadButton from "../../molecules/Button";

const HeroSection = () => {
  return (
    <Box mt="3rem">
      <Box bg="white">
        <Grid
          w="91%"
          pb="5rem"
          ml={{ lg: "auto" }}
          gridTemplateColumns={{
            base: "1fr",
            sm: "1fr",
            md: "1fr",
            lg: "1fr .8fr",
          }}
          gap={{ base: "5rem", sm: "5rem", md: "", lg: "15rem" }}
          pt="7rem"
        >
          <Flex align={{ base: "center", lg: "unset" }} flexDirection="column">
            <Box>
              <Image
                src="https://assetscdn1.paytm.com/images/catalog/view/310944/1654517453942.png"
                alt="paytem_logo"
                w="80px"
                h="80px"
              />
            </Box>
            <Box mt="2rem">
              <Heading
                heading="India's Most-loved Payments App"
                maxWidth="30rem"
              />
            </Box>
            <Box>
              <Description
                maxWidth="32rem"
                description="Recharge & pay bills, book flights & movie tickets, open a savings account, invest in stocks & mutual funds, and do a lot more."
              />
            </Box>
            <Box mt="3rem">
              <DownloadButton buttonText="Download the App" />
            </Box>
          </Flex>
          <Box>
            <Image
              src="https://assetscdn1.paytm.com/images/catalog/view_item/850762/1656568118664.png"
              alt="paytem_logo"
              w="auto"
              h="auto"
            />
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default HeroSection;
