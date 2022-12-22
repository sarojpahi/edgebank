import {
  Box,
  Flex,
  Grid,
  Image,
  Text,
  Menu,
  Button,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";

import { FaUserCircle } from "react-icons/fa";
const Navbar = () => {
  return (
    <Box bg="white" boxShadow="0 5px 20px rgb(0 41 112 / 10%)">
      <Grid w="90%" m="auto" h="90px" align={"center"}>
        <Flex align={"center"} justifyContent="space-between">
          <Flex align={"center"}>
            <Image
              src="https://assetscdn1.paytm.com/images/catalog/category/5165/paytm_logo.png"
              alt="Picture of the author"
              width="180px"
              height="55px"
            />
          </Flex>
          <Flex gap=".5rem">
            <Box>
              <Menu>
                <MenuButton bg="white" as={Button} fontWeight="600">
                  Paytm for Consumer
                </MenuButton>
                <MenuList pb="5rem">
                  <MenuItem fontWeight={"600"}>Payment</MenuItem>
                  <MenuItem fontWeight={"600"}>Ticket Booking</MenuItem>
                  <MenuItem fontWeight={"600"}>Financial Services</MenuItem>
                </MenuList>
              </Menu>
            </Box>
            <Box>
              <Menu>
                <MenuButton bg="white" as={Button} fontWeight="600">
                  Paytm For Business
                </MenuButton>
                <MenuList>
                  <MenuItem fontWeight={"600"}>Consumer Payment</MenuItem>
                  <MenuItem fontWeight={"600"}>Business Software</MenuItem>
                  <MenuItem fontWeight={"600"}>Financial Services</MenuItem>
                  <MenuItem fontWeight={"600"}>Developer</MenuItem>
                </MenuList>
              </Menu>
            </Box>
            <Box>
              <Menu>
                <MenuButton bg="white" as={Button} fontWeight="600">
                  Investor Relations
                </MenuButton>
                <MenuList pb="5rem">
                  <MenuItem fontWeight={"600"}>Payment</MenuItem>
                  <MenuItem fontWeight={"600"}>Ticket Booking</MenuItem>
                  <MenuItem fontWeight={"600"}>Financial Services</MenuItem>
                </MenuList>
              </Menu>
            </Box>
            <Box>
              <Menu>
                <MenuButton bg="white" as={Button} fontWeight="600">
                  Company
                </MenuButton>
                <MenuList pb="5rem">
                  <MenuItem fontWeight={"600"}>Payment</MenuItem>
                  <MenuItem fontWeight={"600"}>Ticket Booking</MenuItem>
                  <MenuItem fontWeight={"600"}>Financial Services</MenuItem>
                </MenuList>
              </Menu>
            </Box>
            <Box>
              <Menu>
                <MenuButton bg="white" as={Button} fontWeight="600">
                  Career
                </MenuButton>
                <MenuList pb="5rem">
                  <MenuItem fontWeight={"600"}>Payment</MenuItem>
                  <MenuItem fontWeight={"600"}>Ticket Booking</MenuItem>
                  <MenuItem fontWeight={"600"}>Financial Services</MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Flex>
          <Flex>
            <Flex
              bg="#00baf2"
              px="1rem"
              py=".5rem"
              borderRadius="30px"
              align="center"
            >
              <Text
                color="white"
                fontSize="15px"
                fontWeight="600"
                fontFamily=""
              >
                Sign In
              </Text>
              <Box ml=".5rem">
                <FaUserCircle color="white" fontSize="24px" />
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Grid>
    </Box>
  );
};

export default Navbar;
