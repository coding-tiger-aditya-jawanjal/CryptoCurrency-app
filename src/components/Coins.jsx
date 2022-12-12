import React , { useEffect , useState } from "react";
import axios  from "axios";
import { server } from "../index";
import {
  Button,
  Center,
  Container,
  Flex,
  HStack,
  Spinner,
} from "@chakra-ui/react";
import CoinCard from "./CoinCard";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  const Next = () => {
    setPage(page + 1);
  };
  const Previous = () => {
    setPage(page - 1);
  };

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=inr&page=${page}`
        );
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoins();
  }, [page]);

  if (error) {
    return "error";
  }
  return (
    <>
      <Container maxW={{ base: "container.lg", "2xl": "90vw" }}>
        {loading ? (
          <Center w={"95vw"} h={"95vh"}>
            <Spinner size={"xl"} />
          </Center>
        ) : (
          <>
            <Flex justifyContent={"space-between"} m={"5"}>
              <Button type="button" size={"lg"} onClick={Next}>
                Next
              </Button>
              <Button type="button" size={"lg"} onClick={Previous}>
                Previous
              </Button>
            </Flex>
            <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
              {coins.map((e) => {
                return (
                  <CoinCard
                    id={e.id}
                    key={e.id}
                    name={e.name}
                    price={e.current_price}
                    img={e.image}
                    symbol={e.symbol}
                    currencySymbol={"Rs."}
                  />
                );
              })}
            </HStack>
          </>
        )}
      </Container>
    </>
  );
};

export default Coins;
