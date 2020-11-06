//React/Redux
import React, { useEffect } from "react";
import { getSmurfs } from "../store/actions";
import { connect } from "react-redux";

//Components
import SmurfCard from "./SmurfCard";
import SmurfForm from "./SmurfForm";

const Smurfs = (props) => {
    useEffect((e) => {
        e.preventDefault();
        props.getSmurf()
    }, []);

    return(
        <div className="smurfsComp">
            <SmurfForm />
            {props.smurfs.map((smurf) => (
                <SmurfCard 
                    name={smurf.name}
                    age={smurf.age}
                    height={smurf.height}
                />
            ))}
        </div>
    )
};

const mapStateToProps = (state) => {
    return{
        smurfs: state.smurfs,
        isLoading: state.isLoading,
        error: state.error,
    };
};

export default connect((mapStateToProps, { getSmurfs }))(Smurfs)