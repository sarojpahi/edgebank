import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../Components/Navbar/Navbar";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Navbar />
      <Component {...pageProps} />
      {/* <Footer /> */}
    </ChakraProvider>
  );
}

export default MyApp;
