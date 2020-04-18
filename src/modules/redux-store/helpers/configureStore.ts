import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import { userReducer } from 'modules/user';
import { settingsReducer } from 'modules/settings';
import { scoreReducer } from 'modules/score';
import { activitiesReducer } from 'modules/activities';
import { contactsReducer } from 'modules/contacts';

export const configureStore = () => {
  const persistedRootReducer = {
    user: userReducer,
    settings: settingsReducer,
    score: scoreReducer,
    activities: activitiesReducer,
    contacts: contactsReducer,
  };

  const store = createStore(
    combineReducers(persistedRootReducer),
    {},
    applyMiddleware(thunk),
  );

  return store;
};
