import { Box, Center, Flex, Grid, Heading, Image, Text, VStack } from "@chakra-ui/react"
import { FaForward } from "react-icons/fa";
import LogoSecondary from "../../assets/logo-secondary.svg";
import { SimpleIcon } from "../../assets/simple";
import { theme } from "../../styles/theme";
import { GoBackButton } from "./GoBackButton";


export const SignUpInfo = () =>{
    return(
        <Grid 
          w="100%"
          ml={["30px", "0", "20px", "100px"]}
          h={["100%", "100%", "100%", "90vh"]}
          position="relative"
          maxW="500px"
        >
        <Image src={LogoSecondary} boxSize={["120px", "120px", "150px", "150px"]} />
        <VStack spacing="14" >
            <Flex w="100%" >
                <Center borderRadius="5px" w="50px" h="50px" bg="white">
                    <FaForward color={theme.colors.purple[800]} size={25} />
                </Center>
                <Box ml="4">
                    <Heading size="lg" >Agilidade</Heading>
                    <Text>Agilize seus projetos com rapidez <br/> e muita performance</Text>
                </Box>
            </Flex>
            <Flex w="100%" >
                <Center borderRadius="5px" w="50px" h="50px" bg="white">
                    <SimpleIcon/>
                </Center>
                <Box ml="4">
                    <Heading size="lg" >Simplicidade</Heading>
                    <Text>Armazene seus projetos em uma <br/>interface altamente usual</Text>
                </Box>
            </Flex>
        </VStack>
    </Grid>
    )
}