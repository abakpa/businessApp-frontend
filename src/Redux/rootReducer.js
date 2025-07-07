import {combineReducers} from 'redux';
import userReducer from './slices/userSlice'
import businessReducer from './slices/businessSlice'
import loginReducer from './slices/loginSlice'
import branchReducer from './slices/branchSlice'


const rootReducer = combineReducers({
    user:userReducer,
    business:businessReducer,
    login:loginReducer,
    branch:branchReducer

});

export default rootReducer;