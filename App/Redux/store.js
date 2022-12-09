import { combineReducers, createStore } from 'redux';
import CountReducer from './Reducers/reducer';

const rootReducer = combineReducers({
    count: CountReducer,
});

export const store = createStore(rootReducer);