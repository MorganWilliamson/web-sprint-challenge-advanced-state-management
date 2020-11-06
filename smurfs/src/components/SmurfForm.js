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
        props.addSmurf(formState)
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
            </form>

            <button type="submit">Add a Smurf</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { 
        addSmurf: state.addSmurf,
    };
};

export default connect(mapStateToProps, { addSmurf })(SmurfForm);