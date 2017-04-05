import React, { Component } from 'react';
import { Provider as MobXProvider } from 'mobx-react/native';
import uiStore from './stores/UIStore';
import RootStack from './navigation/RootStack';

export default class App extends Component {
  render() {
    return (
      <MobXProvider {...{ uiStore }}>
        <RootStack />
      </MobXProvider>
    );
  }
}
