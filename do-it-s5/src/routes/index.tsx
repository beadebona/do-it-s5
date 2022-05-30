import { Route, Switch } from "react-router-dom"
import { Login } from "../pages/login"

export const Routes = () =>{
    return (
        <Switch>
            <Route exact path="/" component={Login}/>
        </Switch>
    )
}