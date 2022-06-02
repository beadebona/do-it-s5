import { Switch } from "react-router-dom"
import { Dashboard } from "../pages/dashboard"
import { Login } from "../pages/login"
import { SignUp } from "../pages/signUp"
import { Route } from "./Route"

export const Routes = () =>{
    return (
        <Switch>
            <Route exact path="/" component={ Login }/>
            <Route path="/dash" component={ Dashboard } isPrivate />
            <Route exact path="/signup" component={ SignUp }/>
        </Switch>
    )
}