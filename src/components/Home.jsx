import React from "react";
import { Box, Center } from "@chakra-ui/react";

const Home = () => {
  return (
    <>
      <Box
        backgroundImage={
          "url('https://st2.depositphotos.com/6504442/9281/i/600/depositphotos_92819326-stock-photo-raster-abstract-dark-blue-blurred.jpg')"
        }
        bgRepeat={"no-repeat"}
        w={"100vw"}
        h={"72.3vh"}
        bgPosition={"center"}
        backgroundSize={"cover"}
        opacity={"0.8"}
      >
        <Center
          h={"100%"}
          float={"right"}
          mr={{
            sm: "16",
            lg: "28",
          }}
          fontSize={{
            base: "5xl",
            md: "7xl",
          }}
          fontFamily={"cursive"}
          color={"aliceblue"}
        >
          CryptoCurrency
        </Center>
      </Box>
    </>
  );
};

export default Home;