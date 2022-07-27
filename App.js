import React, { } from 'react';
import { LogBox } from 'react-native';
import { Provider } from 'react-redux'
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from 'redux-persist'
import FlashMessage from "react-native-flash-message";
import Router from './src/router';
import store from './src/redux/store'

let persistor = persistStore(store);

const App = () => {
  LogBox.ignoreAllLogs()

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router />
      </PersistGate>
      <FlashMessage position="top" duration={3000} />
    </Provider>
  );
};


export default App;
