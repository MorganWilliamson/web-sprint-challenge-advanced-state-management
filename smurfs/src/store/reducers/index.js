////////// index.js within the reducers directory ////////// 
//import from actions

//initial state
const initialState = {
    smurfs: [], 
    isLoading: false,
    error: "",
}

//reducer function
export function reducer (state = initialState, action) {
    switch(action.type) {
        case FETCH_SMURFS_START: 
            return{
                ...state, 
                isLoading: true,
            };

        case FETCH_SMURFS_SUCCESS: 
            return {
                ...state, 
                isLoading: false, 
                smurfs: action.payload,
            };

        case FETCH_SMURFS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }

        default: 
            return state;
    }
}