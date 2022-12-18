// import { useParams } from "react-router";
import { Box, SimpleGrid, Image, Heading, Text, Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { CityContext } from "../../Context/CityContext";
import { Link, useParams } from "react-router-dom";

function Subnavbar(){
  const { city } = useContext(CityContext);

    const { param } = useParams();
    const { para } = useParams();

return(
    <>
      <Flex
        bg="#FAFAFA"
        border="1px solid #e6e6e6"
        justifyContent="space-between"
        h="59px"
        alignItems="center"
        pl={["0%","2%","8%"]}
        pr={["0%","2%","8%"]}
        w="100%"
      >
        <Flex
          display={{ base: "none", md: "none", lg: "flex" }}
          fontSize="lg"
          color="#717171"
        >
          <Link to={`/${city}`}>Home&nbsp;{">"}&nbsp;</Link>
          <Text>{param}</Text>
          <Text>&nbsp;{">"}&nbsp;{para}</Text>
          {/* <Text>&nbsp;{">"}&nbsp;{}</Text> */}
        </Flex>
        <Flex>
          <Text
            mr={["9px", "20px", "40px"]}
            fontSize={["xs", "md", "lg"]}
            color="#717171"
          >
            <Link to={`/${city}/Packages`}>Packages</Link>
          </Text>
          <Text
            mr={["9px", "20px", "40px"]}
            fontSize={["xs", "md", "lg"]}
            color="#717171"
          >
            <Link to={`/${city}/Furniture`}>Furniture</Link>
          </Text>
          <Text
            mr={["9px", "20px", "40px"]}
            fontSize={["xs", "md", "lg"]}
            color="#717171"
          >
            <Link to={`/${city}/Appliances`}>Appliances</Link>
          </Text>
          <Text
            mr={["9px", "20px", "40px"]}
            fontSize={["xs", "md", "lg"]}
            color="#717171"
          >
            <Link to={`/${city}/Electronics`}>Electronics</Link>
          </Text>
          <Text
            mr={["9px", "20px", "40px"]}
            fontSize={["xs", "md", "lg"]}
            color="#717171"
          >
            <Link to={`/${city}/Fitness`}>Fitness</Link>
          </Text>
        </Flex>
      </Flex>
    </>
)


}
export default Subnavbar