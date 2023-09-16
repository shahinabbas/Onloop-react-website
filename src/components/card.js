import React from 'react'

function Card (props) {
    return(
        <div className="card">
            <img src={props.imgSrc}></img>
            <h1>Product:{props.product}</h1>
            <h2>Price : {props.price}</h2>
            <h3>Offer Price : {props.offer}</h3>
        </div>
    )
}
  

export default Card