import { createStore, combineReducers } from 'redux';
import uiReducer from './reducers/ui';
import contactsReducer from './reducers/contacts';

const reducers = combineReducers({
  uiState: uiReducer,
  contactsState: contactsReducer
});

const store = createStore(reducers);

export default store;
