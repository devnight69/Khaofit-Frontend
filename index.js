/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import appJson from './app.json';
import store, {persistor} from './src/redux/store/store';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';

const appName = appJson.name;

const ReduxApp = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxApp);
