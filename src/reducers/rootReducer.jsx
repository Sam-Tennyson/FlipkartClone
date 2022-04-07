import counterReducer from "./counter";
import loggedReducer from "./islogged";
import add_To_Cart from "./addToCart";
import DetailViewer from "./detail_Viewer";
import getPrice from "./getPrice";
import totalItem from "./total_price";
import {combineReducers} from 'redux'

const RootReducers = combineReducers({
    myCount: counterReducer,
    isLogged: loggedReducer,
    addedItem: add_To_Cart,
    detailViewer: DetailViewer,
    getPrice: getPrice,
    no_of_item: totalItem

})

export default RootReducers