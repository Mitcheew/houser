import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './component/Dashboard'
import Wizard from './component/Step1'

export default (

    <Switch>
    <Route exact path='/' component={Dashboard} />
    <Route exact path='/wizard' component={Wizard} />
    </Switch>
)