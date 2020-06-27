import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist'
import cartReducer from "./cartReducer";
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    cart: cartReducer
})




export default persistReducer(persistConfig, rootReducer)
