import {combineReducers} from 'redux'
import productsReducer from './ProductsReducer'
import alertReducer from './alertReducer'
export default combineReducers({
    products : productsReducer,
    alert : alertReducer
})