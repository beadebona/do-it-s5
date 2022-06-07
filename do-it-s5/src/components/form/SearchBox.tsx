import { Button, Center, Flex, useDisclosure } from "@chakra-ui/react"
import { FaSearch } from "react-icons/fa"
import { ModalTask } from "../modal/ModalTask"
import { Input } from "./input"


export const SearchBox = () =>{
    const {isOpen, onOpen, onClose } = useDisclosure()
    return(

        <Flex alignItems="center" w="100vw"
        flexDirection={["column", "column", "row", "row"]}
        borderBottom="2px"
        borderBottomColor="grey.50"
    >
        <Flex w={["90%" , "80%" , "500px" , "550px" ]} maxW="640px"  ml={["4", "4","8"]} paddingY="4" mr="4" >
            <Input placeholder="Pesquisar por tarefa"/>
            <Center ml="2" w="60px" h="60px" bg="purple.600" fontSize="xl" borderRadius="8px" color="white"> <FaSearch/> </Center>
        </Flex>

       <Button              
            bg="purple.500" 
            w="90%"
            maxW={["90%" , "80%" , "280px" , "280px" ]}
            h="60px"
            color="white" 
            borderRadius="0.5rem" 
            _hover={{bg: "purple.900"}}
            onClick={onOpen}
            >Adicionar nova tarefa</Button>
            <ModalTask isOpen={isOpen} onClose={onClose} />
    </Flex>
    )
}