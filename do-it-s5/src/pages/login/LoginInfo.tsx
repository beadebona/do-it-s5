import { Grid, Heading, Image, Text } from "@chakra-ui/react"
import LogoSecondary from "../../assets/logo-secondary.svg";

export const LoginInfo = () =>{
    return(
        <Grid w="100%" maxW="510px" paddingRight="100px">
            <Image src={LogoSecondary} boxSize={["120px", "120px", "150px", "150px"]} />
            <Heading as="h1">O jeito fácil, grátis</Heading>
            <Text>flexível e atrativo de gerenciar <b>seus projetos em uma única plataforma </b></Text>
        </Grid>
    )
}