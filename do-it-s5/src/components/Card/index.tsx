import { Box, Center, Flex, Heading, HStack, Progress, Text } from "@chakra-ui/react"
import { FaCheck, FaTrash } from "react-icons/fa"

interface dataInfo{
    title: string,
    description: string,
    date: string
}

interface cardProps{
    data: dataInfo
}

export const Card = ({data}: cardProps) =>{
    return (
        <Box cursor="pointer" 
        transition=" border 0.2s, ease 0s, transform 0.2s"
        w={["310px", "auto"]}
        h="200px"
        padding="6"
        border=" 1px"
        borderColor="green.50"
        boxShadow="base"
        borderRadius="5px"
        _hover={{
            transform: "translateY(-7px)", 
            borderColor:"grey.100"
        }}>
            <Flex justify="space-between">
                <Heading w="75%" color="grey.title" as="h2" fontSize="20px">{data.title}</Heading>
                <HStack>
                    <Center as="button" w="30px" h="30px" color="grey.300" border="2px" borderColor="grey.300" borderRadius="5px" >
                        <FaTrash/>
                    </Center>
                    <Center ml="2" as="button" w="30px" h="30px" color="grey.300" border="2px" borderColor="grey.300" borderRadius="5px">
                        <FaCheck  />
                    </Center>
                </HStack>
            </Flex>
            <Box mt="2.5">
                <Text color="grey.400" fontSize="14px" >{data.description}</Text>
                <Progress colorScheme="purple" value={10} mt="2.5" />
                <Text color="grey.200" mt="3" fontSize="12px">{data.date}</Text>
            </Box>
            
        </Box>
    )
}