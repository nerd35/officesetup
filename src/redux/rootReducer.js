import { combineReducers } from 'redux';
import auth from './reducer/auth';
import getProfileReducer from './reducer/getProfileReducer';

export default combineReducers({
    auth,
    getEntriesReducer: getProfileReducer
});