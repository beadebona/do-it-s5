import { Box, Button, Flex, Grid, Heading, Image, Text, VStack } from "@chakra-ui/react";
import LogoSecondary from "../../assets/logo-secondary.svg";
import { Input } from "../../components/form/input";
import { FaEnvelope, FaLock } from "react-icons/fa"
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup"
import { useState } from "react";
import { useAuth } from "../../contexts/auth";

const signInSchema = yup.object().shape({
    email: yup.string().required("Email Obrigatório").email("Email Inválido"),
    password: yup.string().required("Senha Obrigatória")
})

interface SignInData {
    email: string;
    password: string;
}

export const Login = () => {
    const [loading, setLoading] = useState(false)

    const {LogIn} = useAuth()

    const {handleSubmit, register, formState: {errors}} = useForm<SignInData>({
        resolver: yupResolver(signInSchema)
    })

    const handleSignIn = (data: SignInData) =>{
        setLoading(true);
        LogIn(data)
         .then(_=>setLoading(false))
         .catch(err=>setLoading(false));
    }
    return(
    <Flex 
      padding="10px 15px"
      alignItems="center"
      justifyContent="center"
      color="white"
      height={["auto", "auto", "100vh", "100vh"]}
      bgGradient={[
          "linear(to-b, purple.800 45%, white 5%)",
          "linear(to-b, purple.800 45%, white 5%)" , 
          "linear(to-r, purple.800 65%, white 35%)" ,
          "linear(to-r, purple.800 65%, white 35%)" 
        ]}
    >
        <Flex
          w={["100%", "78%", "90%", "70%"]}
          justifyContent="center"
          flexDirection={["column", "column", "row", "row"]}
          alignItems="center"
        >
            <Grid w="100%" paddingRight="100px">
                <Image src={LogoSecondary} boxSize={["120px", "120px", "150px", "150px"]} />
                <Heading as="h1">O jeito fácil, grátis</Heading>
                <Text>flexível e atrativo de gerenciar <b>seus projetos em uma única plataforma </b></Text>
            </Grid>
            <Grid 
            onSubmit={handleSubmit(handleSignIn)}
              as="form" 
              mt="4"
              w="100%" 
              padding="30px 15px" 
              borderColor="gray.100" 
              bg="white" 
              color="gray.900" 
              borderRadius="5px"
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
                    >Cadastrar</Button>
                </VStack>
            </Grid>

        </Flex>
    </Flex>
    )
}