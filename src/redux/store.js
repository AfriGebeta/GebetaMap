import { configureStore } from "@reduxjs/toolkit"
import  useReducer  from "./reducers/user"
import sideBarReducer from "./reducers/sidebar"
import currentRoute from "./reducers/currentRoute"
import ChoosedPlan from "./reducers/choosedplans"
import billing from "./reducers/billing"
import plan from "./reducers/plan"
import metrics from "./reducers/metrics"
export default configureStore({
    reducer: {
        user: useReducer, 
        sidebar: sideBarReducer, 
        currentRoute: currentRoute,
        choosedPlan: ChoosedPlan,
        billing: billing,
        plan: plan,
        metrics : metrics
    }
})