
import Layout from "../components/Layout/layout";
import { ChakraProvider } from "@chakra-ui/react";
import Nav from "../Components/Navbar/Nav";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return (

    // <Layout>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    // </Layout>

  );
}
