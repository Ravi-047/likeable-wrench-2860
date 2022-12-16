
import {Box,SimpleGrid,Image,Heading,Text, Flex,Divider, Button} from "@chakra-ui/react"
import { Link,useParams } from "react-router-dom"
import axios from "axios"
// import { useParam } from "react-router"
import { useEffect,useState } from "react"



function Checkout(){
    const {id}=useParams()
    const {para}=useParams()
    const {param}=useParams()
    const [item,setItem]=useState({})
    const [price,setPrice]=useState(item.rental)

    
   const getProd=()=>{
    axios.get(`http://localhost:8080/furniture/${id}`)
    .then((res)=>setItem(res.data))
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
                <Text>{item.title}</Text>
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
    <Flex>
        <Box w="75%" bg="blue" h="500px">
            <Image src={item.image}></Image>
        </Box>
        <Box w="25%" bg="silver">
          <Box>
            <Heading>{item.title}</Heading>
            <Box>
                <Text>How long do you want to rent this for? (Months)</Text>
            </Box>
            <Box>
                <Flex>
                    <Box>
                        <Text>{item.rental}/mo</Text>
                        <Text>Monthly Rent</Text>
                    </Box>
                    <Box>
                     <Text>{item.rental}</Text>
                     <Text>Refundable Deposit</Text>
                    </Box>
                </Flex>
                <Flex>
                    <Text></Text>
                </Flex>
            </Box>
            <Button bg="red"><Link to="">Book Your Plan</Link></Button>
          </Box>
          <Box></Box>
        </Box>
    </Flex>
    </Box>
)
}
export default Checkout