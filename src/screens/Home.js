import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import Counter from '../components/Counter';
import colors from '../config/colors';

@inject('uiStore')
@observer
export default class Home extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  static propTypes = {
    uiStore: PropTypes.object.isRequired,
  };

  render() {
    return (
      <View style={styles.container}>
        <Choose>
          <When condition={this.props.uiStore.count > 0}>
            <Text style={styles.welcome}>
              Welcome to React Native!
            </Text>
            <Text style={styles.instructions}>
              To get started, code some shit.
            </Text>
            <Text style={styles.instructions}>
              or else.
            </Text>
            <Counter />
            <TouchableOpacity
              style={{
                backgroundColor: colors.razzmatazz,
                paddingVertical: 16,
                paddingHorizontal: 32,
                borderRadius: 4,
              }}
              onPress={() =>
                this.props.uiStore.setCount(this.props.uiStore.count + 0.5)}
            >
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                HIT IT
              </Text>
            </TouchableOpacity>
          </When>
          <Otherwise>
            <Image
              source={require('../assets/images/already-late.png')}
              style={{
                width: 600 / 2,
                height: 379 / 2,
              }}
            />
          </Otherwise>
        </Choose>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
