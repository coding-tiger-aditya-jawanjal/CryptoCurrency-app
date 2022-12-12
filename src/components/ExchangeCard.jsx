import React from "react";
import { Heading, Image, Text, VStack } from "@chakra-ui/react";

const ExchangeCard = ({ name, img, rank, url }) => {
  return (
    <>
      <a href={url} target="blank" rel="noopener noreferrer">
        <VStack
          w={"52"}
          p={"8"}
          shadow={"dark-lg"}
          borderRadius={"lg"}
          transition={"all 0.3s"}
          m={"2"}
          css={{
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
        >
          <Image src={img} alt={name} w={"10"} h={"10"} objectFit={"contain"} />
          <Heading size={"md"} noOfLines={1}>
            {rank}
          </Heading>
          <Text noOfLines={1}>{name}</Text>
        </VStack>
      </a>
    </>
  );
};

export default ExchangeCard;
