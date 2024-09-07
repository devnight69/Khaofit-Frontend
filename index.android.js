/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import appJson from './src/app.json';

const appName = appJson.name;
AppRegistry.registerComponent(appName, () => App);
