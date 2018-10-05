import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { connect } from 'react-redux';
import { updateName, updateAddress, updateCity, updateState, updateZip } from '../ducks/reducer'

class Step1 extends Component {
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

    render(){
        console.log(this.props)
        const {updateName, updateAddress, updateCity, updateState, updateZip} = this.props
        return (
            <div>
                <div>
                    <h3>Property Name</h3>
                    <input onChange={(e) => {updateName(e.target.value)}} />
                    <h3>Address</h3>
                    <input onChange={(e) => {updateAddress(e.target.value)}} />
                    <h3>City</h3>
                    <input onChange={(e) => {updateCity(e.target.value)}} />
                    <h3>State</h3>
                    <input onChange={(e) => {updateState(e.target.value)}} />
                    <h3>Zip</h3>
                    <input onChange={(e) => {updateZip(e.target.value)}} />
                    <Link to='/Wizard/Step2'><button onClick={() => {connect()}}>Next Step</button></Link>
                </div>
            </div>
        )
    }




}

function mapStateToProps(st) {
    const { name, address, city, state, zip } = st;
    return {
        name,
        address,
        city, 
        state,
        zip
    };
}

export default connect(mapStateToProps, { updateName, updateAddress, updateCity, updateState, updateZip })(Step1)