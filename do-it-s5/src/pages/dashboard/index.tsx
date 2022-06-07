import { Button, Flex, Grid, Text } from "@chakra-ui/react";
import { Card } from "../../components/Card";
import { SearchBox } from "../../components/form/SearchBox";
import { Header } from "../../components/Header";

    export const Dashboard = () =>{
      
    return (
        <>
        <Header/>
        <SearchBox/>
        <Grid w="100%" templateColumns="repeat(auto-fill, minmax(420px, 1fr))" gap={10} paddingX="8" mt="8">
            {[1,2,3,4,5,6,].map(_=><Card/>)}
        </Grid>
        
        </>
    )
}