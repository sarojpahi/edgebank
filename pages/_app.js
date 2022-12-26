
import Layout from "../components/Layout/layout";
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import { useEffect, useState } from "react";
import axios from "axios";

const fetchData = () => {
  return axios.get('/api/users/getuser')
}

const logout = async () => {
  return axios.post('/api/user_auth/logout')
}



export default function App({ Component, pageProps }) {
  const [user, setUser] = useState({})

  useEffect(() => {
    fetchData()
      .then(({ data }) => {
        setUser(data.user)
      })
      .catch((err) => console.log(err))
  }, [])


  return (

    <ChakraProvider>
      <Layout user={user} logout={logout}>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>

  );
}
