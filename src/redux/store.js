import { configureStore } from "@reduxjs/toolkit"
import  useReducer  from "./reducers/user"
import sideBarReducer from "./reducers/sidebar"
import currentRoute from "./reducers/currentRoute"
export default configureStore({
    reducer: {
        user: useReducer, 
        sidebar: sideBarReducer, 
        currentRoute : currentRoute
    }
})