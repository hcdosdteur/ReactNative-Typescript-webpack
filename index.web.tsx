import React from 'react';

import { AppRegistry } from 'react-native';

import { name as appName } from './app.json';

function App() {
  return (
    <>
      <h1>Hello world from react</h1>
    </>
  );
}

AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, {
  initialProps: {},
  rootTag: document.getElementById('root'),
});
