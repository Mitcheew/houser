import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

export default class Wizard extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0
        }

    }

   
    handleZipChange(value){
        this.setState({
            zip: value
        })
    }

    render(){
        return (
            <div>
            {/* Add New Listing
                <Link to='/'><button>Cancel</button></Link> */}
                <div>
                    <h3>Image URL</h3>
                    <input onChange={(e) => {this.handleNameChange(e.target.value)}} value={this.state.name} />
                    
                    <Link to='/Wizard/Step1'><button onClick={() => {}}>Previous Step</button></Link>
                    <Link to='/Wizard/Step3'><button onClick={() => {}}>Next Step</button></Link>
                </div>
            </div>
        )
    }




}