import { Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";


import { useForm } from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup"
import { useState } from "react";
import { useAuth } from "../../contexts/auth";
import { LoginForm } from "./LoginForm";
import { LoginInfo } from "./LoginInfo";

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
         .catch(_=>setLoading(false));
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
            <LoginInfo/>
            <LoginForm handleSubmit={handleSubmit(handleSignIn)} errors={errors} loading={loading} register={register}  />
        </Flex>
    </Flex>
    )
}