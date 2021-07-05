import React from "react";

const SmurfCard = (props) => {
    return(
        <div>
            <h2>Name: {props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Height: {props.height}</p>
        </div>
    )
};

export default SmurfCard;