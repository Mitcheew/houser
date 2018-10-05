import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { connect } from 'react-redux';
import { updateMortgage, updateRent } from '../ducks/reducer'

class Step3 extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         mortgage: 0,
    //         rent: 0
    //     }

    // }

    // handleMortgageChange(value){
    //     this.setState({
    //         mortgage: value
    //     })
    // }

    // handleRentChange(value){
    //     this.setState({
    //         rent: value
    //     })
    // }

    addHouse() {
        const { name, address, state, city, zip, image, mortgage, rent } = this.props
        axios.post('/api/houses/', { name, address, city, state, zip, image, mortgage, rent })
            .then(() => {
                window.location = '/'
            })
    }

    render() {
        const {updateMortgage, updateRent} = this.props
        console.log(this.props)

        return (
            <div>
                <div>
                    <h3>Monthly Mortgage Amount</h3>
                    <input onChange={(e) => { updateMortgage(e.target.value) }} value={this.props.mortgage} />
                    <h3>Desired Monthly Rent</h3>
                    <input onChange={(e) => { updateRent(e.target.value) }} value={this.props.rent} />
                    
                    <Link to='/Wizard/Step2' ><button onClick={() => {}}>Previous Step</button></Link>
                    <button onClick={() => {this.addHouse()}}>Complete</button>
                </div>
            </div>
        )
    }




}

function mapStateToProps(st) {
    const { name, address, city, state, zip, image, mortgage, rent } = st;
    return {
        name: name,
        address: address,
        city: city, 
        state: state,
        zip: zip,
        image: image,
        mortgage: mortgage,
        rent: rent
    };
}

export default connect(mapStateToProps, { updateMortgage, updateRent })(Step3)