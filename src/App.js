import React from 'react'
import NavBar from './NavBar'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import Precautions from './Precautions'
import IndiaStatus from './component/IndiaStatus';
import Login from './component/Login'
import Signup from './component/Signup'

export default function App() {
    return (
        <>
        <NavBar></NavBar>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/india-status" component={IndiaStatus}></Route>
            <Route exact path="/precautions" component={Precautions}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/signup" component={Signup}></Route>
        </Switch>
        </>
    )
}