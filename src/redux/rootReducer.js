import { combineReducers } from 'redux';
import auth from './reducer/auth';
import getEntries from './reducer/getEntries';

export default combineReducers({
    auth,
    getEntriesReducer: getEntries
});