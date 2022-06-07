import { Box, Button, Center, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Heading, Input, Text } from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";
import { useAuth } from "../../contexts/auth";
import { theme } from "../../styles/theme";

interface MenuProps{
    isOpen: boolean;
    onClose: ()=>void;
}

export const Menu = ({isOpen, onClose}:MenuProps) =>{
    const {user, LogOut} = useAuth()
    
    return(
        <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay mt="88px" />
        <DrawerContent ml="auto" mr="20px" mt="60px" w={["90%", "420px"]} borderRadius="8px" padding="8px" boxShadow="0px 0px 40px -20px rgba(0, 0, 0, 0.25)">
          <DrawerHeader borderColor="gray.50" color="grey.400" borderBottomWidth='1px'>{user.name}</DrawerHeader>
          <DrawerBody>
              <Flex>
                <Center as="button" bg="red.600" w="60px" h="60px" mr="4" onClick={LogOut} borderRadius="5px" >
                    <FiLogOut color="white" fontSize="30px" />
                </Center >
                <Box>
                    <Heading fontSize="20px" as="h2" > Sair da minha conta</Heading>
                    <Text color="grey.300" fontSize="14px" >Sair da minha conta agora</Text>
                </Box>
                
              </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    )
}