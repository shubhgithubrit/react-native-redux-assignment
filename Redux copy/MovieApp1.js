// Adding the provider and store 
import React from "react";

import rootReducer from "./src/reducers";

import { Provider } from 'react-redux';

import { createStore } from "redux";
import ProductApp from './src/Books';


const store = createStore(rootReducer); // adding reduer inside store

export default class MovieApp1 extends React.Component {
    render() {
        return (
            <Provider store={store}>
             <ProductApp/>  
              
            </Provider>
        )
    }
}