//Imports
import React, { useEffect } from "react";
import { getSmurfs } from "../store/actions";
import { connect } from "react-redux";

const Smurfs = (props) => {
    useEffect((e) => {
        e.preventDefault();
        props.getSmurf()
    }, []);

    return(
        <div>
            {/* JSX */}
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