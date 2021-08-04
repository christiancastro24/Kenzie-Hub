import { Switch, Route } from 'react-router-dom'
import { Dashboard } from '../Dashboard'
import { FormLogin } from '../FormLogin'
import { FormRegister } from '../FormRegister'
import { useEffect, useState } from 'react'
import { PageNotFound } from '../PageNotFound'
import { User } from "../User"
import { Home } from '../Home'
import { Devs } from '../Devs'
import { About } from '../About'



export const Routes = () => {

    const [autenticado, setAutenticado] = useState(false)

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("@kenziehub:token"))
        
        if(token) {
            return setAutenticado(true)
        }

    }, [autenticado])

    return (
      <Switch>

        <Route exact path="/"> <Home autenticado={autenticado}/> </Route>   

        <Route path="/register">  <FormRegister autenticado={autenticado} /> </Route>

        <Route path="/devs"> <Devs /> </Route>

        <Route path="/about"> <About /> </Route>

        <Route path="/login"> <FormLogin  autenticado={autenticado} setAutenticado={setAutenticado}/> </Route>

        <Route path="/dashboard"> <Dashboard autenticado={autenticado} setAutenticado={setAutenticado}  /> </Route>

        <Route path="/user"> <User setAutenticado={setAutenticado} autenticado={autenticado} /> </Route>

            <Route path="*"> <PageNotFound /> </Route>
            
        </Switch>
    )
}