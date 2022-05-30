import { ChakraProvider } from "@chakra-ui/react"
import { ReactNode } from "react"
import { theme } from "../styles/theme"

interface Page {
    children: ReactNode,
}

export const Providers = ({ children }: Page) =>{
    return(
        <>
            <ChakraProvider theme={ theme }>
               {children}
            </ChakraProvider>
        </>
    )
}