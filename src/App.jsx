import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import Coins from "./components/Coins";
import Exchanges from "./components/Exchanges";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Flex direction={"column"} minH={"full"} justifyContent={"space-between"}></Flex>
        <Box>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/exchanges" element={<Exchanges />} />
            <Route exact path="/coins" element={<Coins />} />
          </Routes>
        </Box>
        <Box>
          <Footer />
        </Box>
      </BrowserRouter>
    </>
  );
};

export default App;
