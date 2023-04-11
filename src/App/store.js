import { createStore, combineReducers , applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger';
import { reducertest,reducercreate } from '../Redux/Reducer'
// import { persistReducer } from "redux-persist";
// import { composeWithDevTools } from 'redux-devtools-extension';
//el store houwa objet bch ykounou fih des données partagées bin el components lkol
const reducer = combineReducers({
    //reducers
    reducertest:reducertest,
    reducercreate:reducercreate,
})

// const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null 


const initialState ={
        //localstorage
        
  }
  const middleware = [thunk,logger]
  
  const store = createStore(
    reducer, 
    initialState, 
    // composeWithDevTools(applyMiddleware(...middleware)));
    applyMiddleware(...middleware));
  
  export default store 