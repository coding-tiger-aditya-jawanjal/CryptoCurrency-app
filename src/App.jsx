import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import CoinDetails from "./components/CoinDetails";
import Coins from "./components/Coins";
import Exchanges from "./components/Exchanges";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* <Flex> */}
        <Box className="navbar-page">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/exchanges" element={<Exchanges />} />
            <Route exact path="/coins" element={<Coins />} />
            <Route exact path="/coins/:id" element={<CoinDetails />} />
          </Routes>
        </Box>
        <Box className="footer">
          <Footer />
        </Box>
        {/* </Flex> */}
      </BrowserRouter>
    </>
  );
};

export default App;