const initialState = ["redux", "react", "vue"];

function changeLibrary(state = initialState, action){
    console.log("changeLibrary", state);
    switch (action.type){
        case "ADD_LIBRARY":
            return [
                ...state,
                action.payload
                ]
            break;
        case "DELETE_LIBRARY":
            return state;
            break;
        default:
            return state;
    }
}

export default changeLibrary;