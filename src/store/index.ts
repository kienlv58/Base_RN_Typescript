import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import rootReducer from 'redux/rootReducer';

/* eslint-disable */
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

export default function appConfigureStore() {
  const middlewares = [];

  const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['session'],
  };

  if (__DEV__) {
    const logger = createLogger({
      collapsed: true,
    });
    middlewares.push(logger);
  }

  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = configureStore({
    reducer: persistedReducer,
    // middleware: compose(applyMiddleware(...middlewares)),
  });
  const persistor = persistStore(store);

  return { store, persistor };
}

// export type AppDispatch = typeof store.dispatch;
