import { Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import LogoSecondary from "../../assets/logo-secondary.svg";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup"
import { useState } from "react";
import { useAuth } from "../../contexts/auth";
import { SignUpForm } from "./SignUpForm";
import { SignUpInfo } from "./SignUpInfo";


const signUpSchema = yup.object().shape({
    name : yup.string().required("Nome Obrigatório"),
    email: yup.string().required("Email Obrigatório").email("Email Inválido"),
    password: yup.string().required("Senha Obrigatória"),
    passwordConfirm: yup.string().required("Confirmação de senha obrigatória").oneOf([yup.ref('password')], 'As senhas não estão iguais')
})

interface SignUpData {
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
}

export const SignUp = () =>{
    const [loading, setLoading] = useState(false)
    const {handleSubmit, register, formState: {errors}} = useForm<SignUpData>({
        resolver: yupResolver(signUpSchema)
    })
    const handleSignUp = (data: SignUpData) =>{
        setLoading(true)
        console.log(data)
    }

    return(
   
    <Flex 
      padding="10px 15px"
      alignItems="center"
      justifyContent="center"
      color="white"
      height={["auto", "auto", "100vh", "100vh"]}
      bgGradient={[
          "linear(to-b, purple.800 65%, white 5%)",
          "linear(to-b, purple.800 65%, white 5%)" , 
          "linear(to-l, purple.800 65%, white 35%)" ,
          "linear(to-l, purple.800 65%, white 35%)" 
        ]}
    >
        <Flex
            w={["100%", "78%", "90%", "70%"]}
            justifyContent="center"
            flexDirection={["column-reverse", "column-reverse", "row", "row"]}
            alignItems="center"
        >
            <SignUpForm handleSubmit={handleSubmit(handleSignUp)} register={register} errors={errors} loading={loading}  />
            <SignUpInfo/>
            </Flex>
        </Flex>
    )
}