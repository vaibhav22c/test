import { AppRegistry } from 'react-native';
import { name } from './app.json';
import App from './App';
if (module.hot) {
  module.hot.accept();
}
AppRegistry.registerComponent(name, () => App);
AppRegistry.runApplication(name, {
  initialProps: {},
  rootTag: document.getElementById('app-root'),
});