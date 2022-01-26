/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Routers from './src/routers';
import FlashMessage from 'react-native-flash-message';

const App = () => {
  return (
    <>
      <Routers />
      <FlashMessage position="top" />
    </>
  );
};

export default App;
