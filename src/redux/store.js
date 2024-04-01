import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from "redux-thunk";

import checkReducer from './reducers/checkReducer';
import authReducer from './reducers/authReducer';
import postReducer from './reducers/postReducer';
import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    check: checkReducer,
    post: postReducer,
    user: userReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;