import { Box, Button, Grid, Heading, Text, VStack } from "@chakra-ui/react"
import { DeepMap, FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { FaEnvelope, FaLock } from "react-icons/fa"
import { useHistory } from "react-router-dom";
import { Input } from "../../components/form/input";


interface SignInData {
    email: string;
    password: string;
}

interface LoginFormProps{
    handleSubmit: ()=> void;
    errors:DeepMap<FieldValues, FieldErrors> ;
    register: UseFormRegister<SignInData>;
    loading: boolean;
}

export const LoginForm = ({handleSubmit, errors, register,loading}: LoginFormProps) =>{
    const history = useHistory()

    return (
        <Grid 
        onSubmit={handleSubmit}
          as="form" 
          mt="4"
          w="100%" 
          padding="30px 15px" 
          borderColor="gray.100" 
          bg="white" 
          color="gray.900" 
          borderRadius="5px"
          border="5px solid #F5F5F5"
        >
            <Heading size="lg">Bem vindo de volta!</Heading>
            <VStack mt="6" >
                <Box w="100%">
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
                >Entrar</Button>
                <Text color="grey.400">Ainda não possui uma conta?</Text>
                <Button
                bg="grey.100" 
                w="100%" 
                h="60px"
                color="grey.300" 
                borderRadius="0.5rem" 
                _hover={{bg: "grey.200"}} 
                onClick={()=> history.push("/signup")}
                >Cadastrar</Button>
            </VStack>
        </Grid>
    )
}