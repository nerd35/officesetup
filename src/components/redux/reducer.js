import { combineReducers } from 'redux';
import auth from '../redux/action/user/auth';
import getEntries from "./action/user/getEntries";

export default combineReducers({
    auth,
    getEntries

});