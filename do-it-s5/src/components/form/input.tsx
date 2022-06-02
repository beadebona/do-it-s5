import { 
    FormControl, 
    FormLabel, 
    InputGroup, 
    InputLeftElement, 
    Input as ChakraInput, 
    FormErrorMessage, 
    InputProps as ChakraInputProps 
} from "@chakra-ui/react"
import { useEffect } from "react";
import { useRef } from "react";
import { forwardRef } from "react";
import { ForwardRefRenderFunction } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { FieldError } from "react-hook-form";
import{ IconType } from "react-icons/lib"

interface InputProps{
    name?: string;
    label?: string;
    error?: FieldError | null;
    icon?: IconType;
    placeholder?: string;
    type?: string;
}

type VariationsOptions = {
    [key: string]: string;
}
const inputVariation: VariationsOptions = {
    error: "red.600",
    default: "grey.200",
    focus: "purple.800",
    filled: "green.600",
}

const InputBase : ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({name, label, error, icon:Icon, ...rest}, ref) =>{
    const [value, setValue] = useState("")
    const [variation, setVariation] = useState("default")

    useEffect(()=>{
        if(error){
            return setVariation("error")
        }
    },[error])

    const handleInputFocus = useCallback(() =>{
        if(!error){
            setVariation("focus")
        }
    }, [error])

    const handleInputBlur = useCallback(() =>{
        if(value.length > 1 && !error){
            setVariation("filled")
        }
    },[error, value])

    return(
        <FormControl isInvalid={!!error}>
            {!!label && (<FormLabel color="grey.400" >{label}</FormLabel>)}
            <InputGroup flexDirection="column">
                {!!Icon && (
                    <InputLeftElement color={inputVariation[variation]} mt="2.5">
                        <Icon/>
                    </InputLeftElement>
                )}
                <ChakraInput
                name={name} 
                    color={inputVariation[variation]}
                    border="solid 2px"
                    borderColor={inputVariation[variation]}  
                    onFocus={handleInputFocus}
                    onBlurCapture={handleInputBlur}
                    onChangeCapture = {(e)=>setValue(e.currentTarget.value)}
                    bg="grey.50" 
                    variant="outline" 
                    _hover={{bg:"grey.100"}} 
                    _placeholder={{color: "grey.300"}} 
                    _focus={{borderColor:inputVariation[variation]}}
                    size="lg" 
                    h="60px"
                    ref={ref}
                    {...rest} 
                />
                <FormErrorMessage>{!!error && error.message}</FormErrorMessage>
            </InputGroup>
        </FormControl>
    )
}

export const Input = forwardRef(InputBase)