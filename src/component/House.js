import React from 'react'

export default function House(props){
    return (
        <div>
            <p>Property Name: {props.name}</p>
            <p>Address: {props.address}</p>
            <p>City: {props.city}</p>
            <p>State: {props.state}</p>
            <p>Zip: {props.zip}</p>
            <button onClick={() => {props.delete(props.id)}}>X</button>
        </div>
    )
}