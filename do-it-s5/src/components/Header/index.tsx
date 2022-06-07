import { Center, Flex, Heading, Image, useDisclosure } from "@chakra-ui/react"
import {  FaTh } from "react-icons/fa"
import Logo from "../../assets/logo.svg"
import { theme } from "../../styles/theme"
import { Menu } from "./Menu"

export const Header = () =>{
    const { isOpen, onToggle, onClose } = useDisclosure()

    return (
        <Flex paddingX="6" paddingY="3"  borderBottom="2px" borderBottomColor="grey.50" >
            <Center>
                <Image w="60px" src={Logo} alt="logo-DoIt"/>
                <Heading ml="4" size="lg" as="h1">Dashboard</Heading>
            </Center>
            <Center ml="auto" as="button" fontSize="2rem" onClick={onToggle}>
                <FaTh color={ theme.colors.grey[250] } />
            </Center>
            
            <Menu isOpen={isOpen} onClose={onClose} />
        </Flex>
    )
}