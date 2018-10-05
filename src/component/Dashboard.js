import React, { Component } from 'react'
import House from './House';
import { Link } from 'react-router-dom';
import axios from 'axios'

export default class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            houses: []
        }
        this.handleDeleteHouse = this.handleDeleteHouse.bind(this)
    }

    componentDidMount() {
        axios.get('/api/houses/')
        .then(res => this.setState({
            houses: res.data
        }))
    }

    handleDeleteHouse(id) {
        axios.delete(`/api/houses/${id}`)
        .then(res => {
            this.componentDidMount();
        })
    }

    render() {
        const houseList = this.state.houses.map(house => {
            return (
            <House id={house.id} key={house.id} name={house.name} address={house.address} city={house.city} state={house.state} zip={house.zip} delete={this.handleDeleteHouse}/>
            )
        })
        return (
            <div>
                Dashboard
                <Link to='/wizard/Step1'><button>Add New Property</button></Link>
                {houseList}
            </div>
        )
    }




}