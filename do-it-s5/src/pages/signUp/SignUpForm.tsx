import { Box, Button, Grid, Heading, Text, VStack } from "@chakra-ui/react"
import { DeepMap, FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa"
import { Input } from "../../components/form/input"

interface SignUpData {
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
}

interface SignUpFormProps{
    handleSubmit: ()=> void;
    errors:DeepMap<FieldValues, FieldErrors> ;
    register: UseFormRegister<SignUpData>;
    loading: boolean;
}

export const SignUpForm = ({handleSubmit, loading,  register, errors }:SignUpFormProps) =>{
    return (
        <Grid 
          onSubmit={handleSubmit}
          as="form" 
          mt="4"
          w={["100%", "90%", "80%", "80%"]} 
          maxW="510px"
          padding="20px" 
          borderColor="gray.100" 
          bg="white" 
          color="gray.900" 
          borderRadius="5px"
          border="5px solid #E0E0E0"
        >
            <Heading size="lg">Crie sua conta</Heading>
            <VStack mt="6" >
                <Box w="100%">
                    <Input 
                        label="Nome"
                        icon={FaUser} 
                        placeholder="Digite seu nome"
                        error={errors.name} 
                        {...register("name")}
                    />
                    {!errors.name && (<Text ml="1" mt="1" color="grey.300">Exemplo: Beatriz Costa</Text>)}
                    <Input 
                        label="Login"
                        icon={FaEnvelope} 
                        placeholder="Digite seu login"
                        error={errors.email} 
                        {...register("email")}
                    />
                {!errors.email && (<Text ml="1" mt="1" color="grey.300">Exemplo: nome@email.com</Text>)}
                </Box>
                <Input 
                  icon={FaLock} 
                  label="Senha"
                  placeholder="Digite sua senha"
                  error={errors.password}
                  type="password"
                  {...register("password")}
                />
                                <Input 
                  icon={FaLock} 
                  label="Senha"
                  placeholder="Digite sua senha"
                  error={errors.passwordConfirm}
                  type="password"
                  {...register("passwordConfirm")}
                />
            </VStack>
            <VStack mt="4" spacing="5">
                <Button 
                isLoading={loading}
                bg="purple.800" 
                w="100%" 
                h="60px"
                color="white" 
                borderRadius="0.5rem" 
                _hover={{bg: "purple.900"}} 
                type="submit"
                >Finalizar Cadastro</Button>

            </VStack>
        </Grid>
    )
}