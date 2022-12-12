import React from "react";
import { HStack, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <HStack bgColor={"blackAlpha.100"} h={"24"} fontSize={"xl"} gap={"15"}>
        <Spacer />
        <Link to={"/"}>Home</Link>
        <Link to={"/exchanges"}>Exchanges</Link>
        <Link to={"/coins"} style={{ marginRight: "5vw" }}>
          Coins
        </Link>
      </HStack>
    </>
  );
};

export default Navbar;
