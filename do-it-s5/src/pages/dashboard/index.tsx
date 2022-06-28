import { Button, Flex, Grid, Text } from "@chakra-ui/react";
import { Card } from "../../components/Card";
import { SearchBox } from "../../components/form/SearchBox";
import { Header } from "../../components/Header";


interface dataInfo{
    title: string,
    description: string,
    date: string
}

interface cardProps{
    data: dataInfo
}

const dataList = ()=>[
    {
        title:"",
        description: "",
        date: ""
    },
    {
        title:"",
        description: "",
        date: ""
    },
    {
        title:"",
        description: "",
        date: ""
    }
]

    export const Dashboard = () =>{
      
    return (
        <>
        <Header/>
        <SearchBox/>
        <Grid w="100%" templateColumns="repeat(auto-fill, minmax(420px, 1fr))" gap={10} paddingX="8" mt="8">
            {dataList.map((data:cardProps) =><Card data={data}/>)}
        </Grid>
        
        </>
    )
}