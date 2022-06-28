import { Flex, useDisclosure} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup"
import { useState } from "react";
import { SignUpForm } from "./SignUpForm";
import { SignUpInfo } from "./SignUpInfo";
import { useAuth } from "../../contexts/auth";
import { ModalError } from "../../components/modal/ModalError";
import { GoBackButton } from "./GoBackButton";


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
    const { SignUp} = useAuth()
    const {handleSubmit, register, formState: {errors}} = useForm<SignUpData>({
        resolver: yupResolver(signUpSchema)
    })
    const handleSignUp = ({name, email, password}: SignUpData) =>{
        const user = {name, email, password}
        setLoading(true)
        SignUp(user)
        .then(_=>{setLoading(false)})
        .catch(_=>{
            setLoading(false)
            onOpen()
        })  
    }
    const {isOpen, onOpen, onClose } = useDisclosure()

    return(
    <>
    <ModalError isOpen={isOpen} onClose={onClose} />
    
    <Flex 
      padding="10px 15px"
      flexDirection={["row-reverse", "row-reverse", "row", "row"]}
      justifyContent="center"
      color="white"
      height={["auto", "auto", "auto", "100vh"]}
      bgGradient={[
          "linear(to-b, purple.800 65%, white 5%)",
          "linear(to-b, purple.800 65%, white 5%)" , 
          "linear(to-b, purple.800 65%, white 35%)" ,
          "linear(to-l, purple.800 65%, white 35%)" 
        ]}
    ><GoBackButton/>
        <Flex
            w={["100%", "78%", "90%", "70%"]}
            justifyContent="center"
            flexDirection={["column-reverse", "column-reverse", "column-reverse", "row"]}
            alignItems="center"
        >
            <SignUpForm handleSubmit={handleSubmit(handleSignUp)} register={register} errors={errors} loading={loading}  />
            <SignUpInfo/>
            </Flex>
        </Flex>
        </>
    )
}