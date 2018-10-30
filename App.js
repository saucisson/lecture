import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage';

import AppNavigator from './navigation/AppNavigator';
// import Letters from './components/Letters';
import Reducer from './components/Reducer';

const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, Reducer)
const store = createStore(persistedReducer);
let persistor = persistStore(store)

export default class App extends React.Component {

  async componentDidMount() {
    await Font.loadAsync({
      'cursive': require('./assets/fonts/Clicker_Script/ClickerScript-Regular.ttf'),
      'computer': require('./assets/fonts/Roboto_Slab/RobotoSlab-Regular.ttf'),
    });
    this.setState({
      fontLoaded: true,
    });
  }

  render() {
    return <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          <AppNavigator />
        </Provider>
      </PersistGate>
    </Provider>;
  }
};

const styles = StyleSheet.create({
});
