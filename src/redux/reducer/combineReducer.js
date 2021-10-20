import {productReducer , selectedProductReducer} from "./reducer";
import {combineReducers} from "redux"

const reducers = combineReducers({
       allProducts:productReducer,
      productDetail:selectedProductReducer
})

export default reducers