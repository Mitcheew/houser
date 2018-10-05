import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

export default class Wizard extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0
        }

    }

    addHouse() {
        const { name, address, state, city, zip } = this.state
        axios.post('/api/houses/', { name, address, city, state, zip })
            .then(() => {
                window.location = '/'
            })
    }

    render() {
        return (
            <div>
                {/* Add New Listing
                <Link to='/'><button>Cancel</button></Link> */}
                <div>
                    <h3>Monthly Mortgage Amount</h3>
                    <input onChange={(e) => { this.handleNameChange(e.target.value) }} value={this.state.name} />
                    <h3>Desired Monthly Rent</h3>
                    <input onChange={(e) => { this.handleAddressChange(e.target.value) }} value={this.state.address} />
                    
                    <Link to='/Wizard/Step2' ><button onClick={() => {}}>Previous Step</button></Link>
                    <button onClick={() => {this.addHouse()}}>Complete</button>
                </div>
            </div>
        )
    }




}