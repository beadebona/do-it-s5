import { AxiosResponse } from "axios";
import { useContext, createContext, useState, useCallback, ReactNode  } from "react";
import { API } from "../../services/api";

interface TaskData{
    title: string;
    description: string;
    value: number;
    date: Date;
    id: string;
    userid: string;
    completed: boolean;
}

interface TaskContextData {
    tasks: TaskData[];
    createTask: (data: TaskData, accessToken: string)=> Promise<void>

}

interface TaskProviderProps {
    children: ReactNode;
}

const TaskContext = createContext<TaskContextData>({} as TaskContextData)

export const useTasks =()=>{
    const context = useContext(TaskContext);

    if(!context){
        throw new Error ("useTasks must be used within an AuthProvider")
    }
    return context;
}

export const TaskProvider =({children}: TaskProviderProps)=>{
    const [tasks, setTasks] = useState<TaskData[]>([])

    const createTask = useCallback(async(data: TaskData, accessToken: string) =>{
         API.post("/tasks", data, {headers:{
            Authorization: `Bearer ${accessToken}`
        }}).then((res: AxiosResponse)=>{
            setTasks([...tasks, res.data])
        }).catch(err=> console.log(err))
        
    }, [])

    return (
        <TaskContext.Provider value={{tasks , createTask }}>
            {children}
        </TaskContext.Provider>
    )

}