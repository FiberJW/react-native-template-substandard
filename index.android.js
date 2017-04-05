import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App';

export default class substandard extends Component {
  render() {
    return <App />;
  }
}

AppRegistry.registerComponent('substandard', () => substandard);
