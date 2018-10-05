import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { connect } from 'react-redux';
import { updateName, updateAddress, updateCity, updateState, updateZip } from '../ducks/reducer'

class Step1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        this.setState({
            name: this.props.name,
            address: this.props.address,
            city: this.props.city,
            state: this.props.state,
            zip: this.props.zip

        })
    }

    handleNameChange(value) {
        this.setState({
            name: value
        })
    }

    handleAddressChange(value) {
        this.setState({
            address: value
        })
    }

    handleCityChange(value) {
        this.setState({
            city: value
        })
    }

    handleStateChange(value) {
        this.setState({
            state: value
        })
    }

    handleZipChange(value) {
        this.setState({
            zip: value
        })
    }

handleClick(){
    this.props.dispatch(
        {
            type: 'UPDATE_NAME',
            payload: this.state.name
        },
        {
            type: 'UPDATE_ADDRESS',
            payload: this.state.address
        },
        {
            type: 'UPDATE_CITY',
            payload: this.state.city
        },
        {
            type: 'UPDATE_STATE',
            payload: this.state.state
        },
        {
            type: 'UPDATE_ZIP',
            payload: this.state.zip
        }
    )
}

    render() {
        console.log(this.props)
        const { updateName, updateAddress, updateCity, updateState, updateZip } = this.props
        return (
            <div>
                <div>
                    <h3>Property Name</h3>
                    <input onChange={(e) => { this.handleNameChange(e.target.value) }} value={this.state.name} />
                    <h3>Address</h3>
                    <input onChange={(e) => { this.handleAddressChange(e.target.value) }} value={this.state.address} />
                    <h3>City</h3>
                    <input onChange={(e) => { this.handleCityChange(e.target.value) }} value={this.state.city} />
                    <h3>State</h3>
                    <input onChange={(e) => { this.handleStateChange(e.target.value) }} value={this.state.state} />
                    <h3>Zip</h3>
                    <input onChange={(e) => { this.handleZipChange(e.target.value) }} value={this.state.zip} />
                    <Link to='/Wizard/Step2'><button onClick={() => {this.handleClick()}}>Next Step</button></Link>
                </div>
            </div>
        )
    }




}

function mapStateToProps(st) {
    const { name, address, city, state, zip } = st;
    return {
        name: name,
        address: address,
        city: city,
        state: state,
        zip: zip
    };
}

export default connect(mapStateToProps, { updateName, updateAddress, updateCity, updateState, updateZip })(Step1)