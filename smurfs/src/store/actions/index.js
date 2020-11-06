////////// index.js within the actions directory ////////// 
//You need: Fetch start, fetch success, fetch failure.
import axios from "axios";

//GET
export const FETCH_SMURFS_START = "FETCH_SMURFS_START"
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS"
export const FETCH_SMURFS_FAILURE = "FETCH_SMURFS_FAILURE"

//POST
export const ADD_SMURF_START = "ADD_SMURF_START"
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS"
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE"

export const getSmurfs = () => (dispatch) => {
    dispatch({ FETCH_SMURFS_START });
    axios
        .get("http://localhost:3333/smurfs")
        .then((res) => {
            console.log(res)
            dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data });
        })
        .catch((err) => {
            console.log(err)
            dispatch({ type: FETCH_SMURFS_FAILURE, payload: err });
        });
};

export const addSmurf = (newSmurf) => (dispatch) => {
    dispatch({ ADD_SMURF_START });
        axios
            .post("http://localhost:3333/smurfs", newSmurf)
            .then((res) => {
                console.log(res)
                dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data })
            })
            .catch((err) => {
                dispatch({ type: ADD_SMURF_FAILURE, payload: err})
            });
};