import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import {thunk} from "redux-thunk";  // Correct import for thunk
import { Reducerfunction } from "./reducers";  
import { Authreducer } from "./reducers";

// Combine reducers
let allReducers = combineReducers({
     Reducerfunction,
    Authreducer
});

// Create the Redux store with combined reducers and apply thunk middleware
export let store = legacy_createStore(
    allReducers,// Pass the combined reducers
    applyMiddleware(thunk)  // Apply redux-thunk middleware for async actions
);