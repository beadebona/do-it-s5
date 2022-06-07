import { Center } from "@chakra-ui/react"
import { FaArrowLeft } from "react-icons/fa";
import { useHistory } from "react-router-dom";


export const GoBackButton = () =>{
    const history = useHistory()
    return(
        <Center 
          m={["0", "0", "2rem", "2rem"]} 
          mt={["2rem", "2rem"]}
          position={["absolute", "absolute", "absolute", "initial"]}
          left={["70%", "90%", "80%", "-155%"]}
          bg="purple.500" 
          borderRadius="5px" 
          as="button" 
          w={["44px", "44px", "84px", "84px"]} 
          h={["35px", "35px", "63px", "63px"]} 
          _hover={{
              bg: "purple.600",
          }}
          onClick={()=> history.push("/")}
        >
            <FaArrowLeft color="white"/>
        </Center>
    )
}