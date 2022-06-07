import {  Button, Center, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react"
import { FaExclamation } from "react-icons/fa";


interface ModalErrorProps {
    isOpen: boolean;
    onClose: ()=>void;
}

export const ModalError = ({isOpen, onClose}:ModalErrorProps) =>{
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader display="flex">
            <Center bg="red.600" w="30px" h="30px" borderRadius="5px" mr="1rem" ><FaExclamation color="white"/></Center>
            
            Oops!
            </ModalHeader>
          <ModalCloseButton bg="red.600" color="white" _hover={{ bg: "red.600"}} />
          <ModalBody>
            <Text>Ocorreu algum erro! Você já pode tentar novamente ou aguarde alguns minutos...</Text>

          </ModalBody>

          <ModalFooter>
            <Button bg="red.600" _hover={{ bg: "red.600"}} color="white" mr={3} onClick={onClose}>
              Tentar novamente
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    )
}