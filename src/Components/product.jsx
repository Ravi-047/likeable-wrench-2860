// import { useParams } from "react-router"
import {Box,SimpleGrid,Image,Heading,Text, Flex,Divider} from "@chakra-ui/react"
import { Link,useParams } from "react-router-dom"
import axios from "axios"
// import { useParam } from "react-router"
import { useEffect,useState } from "react"



function Product(){
   const {param}=useParams()
   const {para}=useParams()
   const [proddata,setProddata]=useState([])

   const getProd=()=>{
    axios.get(`http://localhost:8080/furniture?category=${para}`)
    .then((res)=>setProddata(res.data))
   }

   useEffect(()=>{
      getProd()
   },[])
  
    return(
        <Box>
            <Flex  bg="#FAFAFA" border="1px solid #e6e6e6" justifyContent="space-between" h="55px" alignItems="center" pl="8%" pr="8%">
            <Flex display={{base:"none",md:"none",lg:"flex"}} fontSize="lg" color="#717171">
                <Link to="/">Home {">"}</Link>
                <Link to="/">{param}{">"}</Link>
                <Link to="/">{para}</Link>
            </Flex>
            <Flex  >
                <Text mr={["10px","20px","40px"]} fontSize={["sm","md","lg"]} color="#717171"><Link to="/product">Packages</Link></Text>
                <Text mr={["10px","20px","40px"]} fontSize={["sm","md","lg"]} color="#717171">
                <Link to="/furniture" >Furniture</Link>
                </Text>
                <Text mr={["10px","20px","40px"]} fontSize={["sm","md","lg"]} color="#717171">
                <Link to="/appliances">Appliances</Link>
                </Text>
                <Text mr={["10px","20px","40px"]} fontSize={["sm","md","lg"]} color="#717171">
                <Link to="/electronics">Electronics</Link>
                </Text>
                <Text mr={["10px","20px","40px"]} fontSize={["sm","md","lg"]} color="#717171">
                <Link to="/fitness">Fitness</Link>
                </Text>
            
            </Flex>
        </Flex>

        <Flex pr="8%" pl="8%" gap="3%">
            <Box w="30%"  h="200px" bg="silver"></Box>
            <Box w="100%" >
                <Flex mt="1rem" mb="1rem" bg="grey">
                    <Text fontSize="lg">{para}</Text>
                    <Link to={`/${param}`}>Icon</Link>
                </Flex>
                <SimpleGrid columns={[2,2,3]} columnGap="5%"rowGap="1%">
                  {proddata.map((prod)=>(
                    <Link to={`/${param}/${para}/${prod.id}`} target="_blank">
                    <Box bg="white" border="1px solid #e6e6e6">
                        <Image src={prod.image} h="270px" w="100%"></Image>
                        <Box p="5%">
                        <Text  fontSize="lg">{prod.title}</Text>
                        <Divider mt="3%" mb="3%" orientation='horizontal' />
                        <Flex justifyContent="space-between">
                            <Text fontSize="lg">{prod.rental}/mo</Text>
                            <Text>{prod.days}</Text>
                        </Flex>
                        </Box>
                    
                        
                    </Box>
                    </Link>
                  ))}
                </SimpleGrid>
            </Box>    
        </Flex>
        </Box>
    )

}
export default Product