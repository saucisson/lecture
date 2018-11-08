import React from 'react';
import { AppLoading, Asset, Font, Icon } from 'expo';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { createMigrate, persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';

import AppNavigator from './navigation/AppNavigator';
import Reducer from './components/Reducer';
import { initialState } from './components/Reducer';
import Data from './components/Data';

const DATA_VERSION = 0;

const migrations = {
  0: (state) => {
    return {...initialState};
  },
}

const persistConfig = {
  key: 'lecture:state',
  storage: storage,
  version: DATA_VERSION,
  stateReconciler: hardSet,
  migrate: createMigrate(migrations, { debug: true }),
};
const persistedReducer = persistReducer(persistConfig, Reducer);
const store = createStore(persistedReducer);
let persistor = persistStore(store);

export default class App extends React.Component {

  async componentDidMount() {
    await Font.loadAsync({
      'cursive': require('./assets/fonts/Parisienne-Regular.ttf'),
      'computer': require('./assets/fonts/RobotoSlab-Regular.ttf'),
    });
    this.setState({
      fontLoaded: true,
    });
  }

  render() {
    return <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </Provider>;
  }

};
