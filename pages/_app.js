import { ChakraProvider } from "@chakra-ui/react";
import Nav from "../Components/Navbar/Nav";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Nav />
      <Component {...pageProps} />
      {/* <Footer /> */}
    </ChakraProvider>
  );
}

export default MyApp;
