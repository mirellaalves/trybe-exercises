import { createStore, combineReducers } from 'redux';

import reducer from '../reducers';

const store = createStore(combineReducers({ reducer }));

export default store;