import { Button } from "@chakra-ui/react";
import { DiApple } from "react-icons/di";

const DownloadButton = ({ buttonText }) => {
  return (
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
      {buttonText}
    </Button>
  );
};

export default DownloadButton;
