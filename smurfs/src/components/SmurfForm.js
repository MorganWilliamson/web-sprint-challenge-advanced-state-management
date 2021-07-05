import React, { useState } from "react"; 
import { addSmurf } from "../store/actions";
import { connect } from "react-redux";

const SmurfForm = (props) => {
    const [formState, setFormState] = useState({
        name: "",
        age: "",
        height: "",
    });

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addSmurf(formState)
        setFormState(formState)
    };

    return(
        <div className="smurfForm">
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Name"                   
                />

                <input 
                    type="text"
                    name="age"
                    value={formState.age}
                    onChange={handleChange}
                    placeholder="Age"
                />

                <input 
                    type="text"
                    name="height"
                    value={formState.height}
                    onChange={handleChange}
                    placeholder="Height (cm)"
                />
            <button type="submit">Add a Smurf</button>
            </form>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { 
        error: state.error,
    };
};

export default connect(mapStateToProps, { addSmurf })(SmurfForm);