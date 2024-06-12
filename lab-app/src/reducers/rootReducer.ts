import { createStore, combineReducers } from 'redux';
import dataReducer from './reducer';


const rootReducer = combineReducers({
  data: dataReducer
});

const store = createStore(rootReducer);

export default store;
