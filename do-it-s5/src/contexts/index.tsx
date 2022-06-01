import { ChakraProvider } from "@chakra-ui/react"
import { ReactNode } from "react"
import { theme } from "../styles/theme"
import { AuthProvider } from "./auth"

interface Page {
    children: ReactNode,
}

export const Providers = ({ children }: Page) =>{
    return(
        <>
            <ChakraProvider theme={ theme }>
                <AuthProvider>
                    {children}
                </AuthProvider>
            </ChakraProvider>
        </>
    )
}