import { createStore,combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { restaurentListReducer } from "./reducers/restaurentReducer"

const reducers=combineReducers({
restaurantReducer:restaurentListReducer
})
 
const intialState={};
const middleware=[thunk]
const store=createStore(reducers,intialState,applyMiddleware(...middleware))
export default store