const initialState = {searchText: ""};

function changeSearchData(state = initialState, action){
    console.log("changeLibrary", state);
    switch (action.type){
        case "CHANGE_SEARCH":
            return {
                ...state,
                searchText: action.text
                }
            break;
        default:
            return state;
    }
}

export default changeSearchData;