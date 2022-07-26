import React, {  } from 'react';
import { LogBox } from 'react-native';
import Router from './src/router';

const App = () => {
  LogBox.ignoreAllLogs()

  return (
    <Router />
  );
};


export default App;
