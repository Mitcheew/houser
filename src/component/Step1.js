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

    handleNameChange(value){
        this.setState({
            name: value
        })
    }
    
    handleAddressChange(value){
        this.setState({
            address: value
        })
    }
    
    handleCityChange(value){
        this.setState({
            city: value
        })
    }
    
    handleStateChange(value){
        this.setState({
            state: value
        })
    }
    
    handleZipChange(value){
        this.setState({
            zip: value
        })
    }

    addHouse(){
        const {name, address, state, city, zip} = this.state
        axios.post('/api/houses/', {name, address, city, state, zip})
        .then(() => {
            window.location = '/'
        })
    }

    render(){
        return (
            <div>
                {/* Add New Listing
                <Link to='/'><button>Cancel</button></Link> */}
                <div>
                    <h3>Property Name</h3>
                    <input onChange={(e) => {this.handleNameChange(e.target.value)}} value={this.state.name} />
                    <h3>Address</h3>
                    <input onChange={(e) => {this.handleAddressChange(e.target.value)}} value={this.state.address} />
                    <h3>City</h3>
                    <input onChange={(e) => {this.handleCityChange(e.target.value)}} value={this.state.city} />
                    <h3>State</h3>
                    <input onChange={(e) => {this.handleStateChange(e.target.value)}} value={this.state.state} />
                    <h3>Zip</h3>
                    <input onChange={(e) => {this.handleZipChange(e.target.value)}} value={this.state.zip} />
                    <Link to='/Wizard/Step2'><button onClick={() => {}}>Next Step</button></Link>
                </div>
            </div>
        )
    }




}