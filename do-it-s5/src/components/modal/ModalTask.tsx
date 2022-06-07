import {  Button, Center, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react"
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FaFileAlt } from "react-icons/fa";
import { Input } from "../form/input";

interface ModalTaskProps {
    isOpen: boolean;
    onClose: ()=>void;
}

export const ModalTask = ({isOpen, onClose}:ModalTaskProps) =>{
    const {register, handleSubmit, errors } = useForm(resolver: yupResolver(taskSchema))
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader display="flex" mb="4">
                <Center bg="purple.500" w="30px" h="30px" borderRadius="5px" mr="1rem" >
                    <FaFileAlt color="white"/>
                </Center>
                <Heading as="h1" fontSize="20px" color="grey.title">Adicionar</Heading>
            </ModalHeader>
            <ModalCloseButton bg="red.600" color="white" _hover={{ bg: "red.600"}} />
            <ModalBody as="form">
                <Input label="Título"/>
                {!errors.title && <Text mb="8" color="grey.300" fontSize="12px" >Ex: Estudar React - Chakra UI</Text>}
                <Input label="Descrição"/>
                {!errors.description && <Text mb="8" color="grey.300" fontSize="12px" >Máximo 100 caracteres</Text>}

                <Button type="submit" mt="8" w="100%" bg="purple.500" _hover={{ bg: "purple.600"}} color="white" mr={3} onClick={onClose}>
                Adicionar Tarefa
                </Button>
          </ModalBody>
          <ModalFooter>
           
          </ModalFooter>
        </ModalContent>
      </Modal>
    )
}