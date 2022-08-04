import { combineReducers } from 'redux';
import productReducer from "./bookReducer";


const rootReducer = combineReducers({
productReducer,

})

export default rootReducer;

/*

Create a rootreducer containing all the reducers, in this case it contains the single property bookreducer

*/ 