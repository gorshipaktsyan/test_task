import productListReducer from "./modules/ProductList";

import {combineReducers} from "redux";

const rootReducer = combineReducers({
    productList: productListReducer,
    
});

export default rootReducer;
