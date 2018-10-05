import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'

export default class Wizard extends Component {

    render(){
        return (
            <div>
                <h1>Add New Listing</h1>
                <Route path='Wizard/Step1' component={Step1} />
                <Route path='Wizard/Step2' component={Step2} />
                <Route path='Wizard/Step3' component={Step3} />
                <Link to='/'><button>Cancel</button></Link>
            </div>
        )
    }
}