import React from "react";
import { Heading, Image, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CoinCard = ({ id, name, img, symbol, price, currencySymbol }) => {
  return (
    <>
      <Link to={`/coin/${id}`} target="blank">
        <VStack
          w={"52"}
          p={"8"}
          shadow={"dark-lg"}
          borderRadius={"lg"}
          transition={"all 0.3s"}
          m={"4"}
          css={{
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
        >
          <Image src={img} alt={name} w={"10"} h={"10"} objectFit={"contain"} />
          <Heading size={"md"} noOfLines={1}>
            {symbol}
          </Heading>
          <Text noOfLines={1}>{name}</Text>
          <Text noOfLines={1}>
            {price ? `${currencySymbol} ${price}` : "NA"}
          </Text>
        </VStack>
      </Link>
    </>
  );
};

export default CoinCard;
