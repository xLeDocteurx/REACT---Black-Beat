import { combineReducers } from "redux";
import exemple from './exemple'
import currentUser from './currentUser'
import currentProject from './currentProject'

export default combineReducers({
    exemple,
    currentUser,
    currentProject
})