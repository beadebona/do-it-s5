import { ChakraProvider } from "@chakra-ui/react"
import { ReactNode } from "react"
import { theme } from "../styles/theme"
import { AuthProvider } from "./auth"
import { TaskProvider } from "./task"

interface Page {
    children: ReactNode,
}

export const Providers = ({ children }: Page) =>{
    return(
        <>
            <ChakraProvider theme={ theme }>
                <AuthProvider>
                    <TaskProvider>
                        {children}
                    </TaskProvider>
                </AuthProvider>
            </ChakraProvider>
        </>
    )
}