import {
  Avatar,
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  HStack,
  Input,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

function UserProfile() {
  const [form, setForm] = useState({
    userName: "",
    city: "",
    state: "",
    pin: "",
    email: "",
    houseDetails: "",
    image: ""
  });
  const [data, setData] = useState({});
  const [loading, setloading] = useState(false);


  useEffect(() => {
    getData()
  }, [])


  const getData = () => {
    axios.get(`/api/users/getuser`)
      .then(res => setData(res.data))
      .catch(e => console.log(e.message))
  }

  const handleChangeImage = (e) => {
    const data = new FormData();
    data.append("file", e.target.files[0]);
    data.append("upload_preset", "Facebook");
    data.append("cloud_name", "dhxtxmw5n");
    setloading(true);
    axios
      .post(`https://api.cloudinary.com/v1_1/dhxtxmw5n/image/upload`, data)
      .then((res) => {
        setForm({ ...form, [e.target.name]: res.data.url })
        setloading(false);
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    axios.patch(`/api/user_auth/register`, form)
      .then(res => setData(res.data))
      .catch(e => console.log(e.message))
  };

  return (
    <Box mt="10" pb="10">
      <Grid
        gridTemplateColumns={["1fr", "1fr", "1fr 1fr"]}
        w="80%"
        m="auto"
        h="90vh"
      >
        <VStack h="full" px="20">
          <Avatar
            size="3xl"
            src="https://avatars.githubusercontent.com/u/107462720?v=4"
          />
          <Input
            type="file"
            name='image'
            value={form.image}
            onChange={(e) => handleChangeImage(e)}
          />
        </VStack>
        <VStack h="full" align="start" px="10" py="0">
          <Flex w="full" justifyContent={"center"}>
            {" "}
            <Heading
              align="center"
              color=" rgb(255, 50, 120)"
              fontSize={"20px"}
              letterSpacing={"16px"}
              fontWeight="500"
            >
              USER DETAILS
            </Heading>
          </Flex>
          <VStack gap="2" pt="5" align={"start"}>
            <Heading fontWeight={"500"} size="sm">
              Name : <span style={{ fontWeight: "400" }}>Akshay Rajput</span>
            </Heading>
            <Heading fontWeight={"500"} size="sm">
              Email :{" "}
              <span style={{ fontWeight: "400" }}>
                akshay.rajput1197@gmail.com
              </span>
            </Heading>
            <Heading fontWeight={"500"} size="sm">
              Acc Number : <span style={{ fontWeight: "400" }}>123456789</span>
            </Heading>
            <Heading fontWeight={"500"} size="sm">
              Mobile Number :{" "}
              <span style={{ fontWeight: "400" }}>124324234</span>
            </Heading>
            <Heading fontWeight={"500"} size="sm">
              Aadhar Number :{" "}
              <span style={{ fontWeight: "400" }}>124324234</span>
            </Heading>
            <HStack>
              <Heading fontWeight={"500"} size="sm">
                City : <span style={{ fontWeight: "400" }}>address</span>
              </Heading>
              <Heading fontWeight={"500"} size="sm">
                pin : <span style={{ fontWeight: "400" }}>address</span>
              </Heading>
            </HStack>
            <HStack>
              <Heading fontWeight={"500"} size="sm">
                State : <span style={{ fontWeight: "400" }}>address</span>
              </Heading>
              <Heading fontWeight={"500"} size="sm">
                HouseDetails :{" "}
                <span style={{ fontWeight: "400" }}>address</span>
              </Heading>
            </HStack>
          </VStack>
          <VStack align="start" pt="5" w="full">
            <label>Name :</label>
            <Input
              size="sm"
              name="name"
              value={form.name}
              type="text"
              onChange={(e) => handleChange(e)}
              placeholder="Enter Updated name"
            />
            <label>Email :</label>
            <Input
              name="email"
              value={form.email}
              size="sm"
              type="text"
              placeholder="Enter Updated email address"
              onChange={(e) => handleChange(e)}
            />
            <label>Address :</label>
            <HStack>
              <Input
                size="sm"
                name="city"
                value={form.city}
                type="text"
                placeholder="Enter City"
                onChange={(e) => handleChange(e)}
              />
              <Input
                size="sm"
                name="pin"
                value={form.pin}
                type="text"
                placeholder="Enter PinCode"
                onChange={(e) => handleChange(e)}
              />
              <Input
                size="sm"
                name="state"
                value={form.state}
                type="text"
                placeholder="Enter State"
                onChange={(e) => handleChange(e)}
              />
              <Input
                size="sm"
                name="houseDetails"
                value={form.houseDetails}
                type="text"
                placeholder="Enter HouseDetails"
                onChange={(e) => handleChange(e)}
              />
            </HStack>
            <Button
              w="full"
              bgColor="rgba(255, 49, 109, 0.7)"
              size="sm"
              _hover={{ bgColor: "rgba(255, 49, 109, 0.7)" }}
              letterSpacing={"1.3px"}
              fontWeight="500"
              fontSize="14px"
              color="white"
              onClick={() => handleUpdate()}
            >
              {" "}
              Update profile
            </Button>
          </VStack>
        </VStack>
      </Grid>
    </Box>
  );
}

export default UserProfile;
