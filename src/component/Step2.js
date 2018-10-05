import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { connect } from 'react-redux';
import { updateImage } from '../ducks/reducer'

class Step2 extends Component {
    // constructor(){
    //     super()
    //     this.state = {
    //         image: ''
    //     }

    // }

   
    // handleImageChange(value){
    //     this.setState({
    //         image: value
    //     })
    // }

    render(){
        const {updateImage} = this.props
        console.log(this.props)

        return (
            <div>
                <div>
                    <h3>Image URL</h3>
                    <input onChange={(e) => {updateImage(e.target.value)}} value={this.props.image} />
                    
                    <Link to='/Wizard/Step1'><button onClick={() => {}}>Previous Step</button></Link>
                    <Link to='/Wizard/Step3'><button onClick={() => {}}>Next Step</button></Link>
                </div>
            </div>
        )
    }




}

function mapStateToProps(st) {
    const { image } = st;
    return {
        image: image
    };
}

export default connect(mapStateToProps, { updateImage })(Step2)