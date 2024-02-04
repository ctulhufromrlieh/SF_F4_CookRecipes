import { combineReducers } from "redux";

import libraries from "./libraries";
import frameworks from "./frameworks";
import searchData from "./searchData";

// export default combineReducers({
//     changeFramework: frameworks, changeLibrary: libraries
// })

export default combineReducers({
    frameworks, libraries, searchData
})