import React, { Component, PropTypes } from 'react';
import { observer, inject } from 'mobx-react/native';
import CounterContainer from './styled/CounterContainer';
import CounterText from './styled/CounterText';

@inject('uiStore')
@observer
export default class Counter extends Component {
  static propTypes = {
    uiStore: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.uiStore.setCount(10);
    this.timerHandle = setInterval(
      () => {
        if (this.props.uiStore.count === 0) {
          this.props.uiStore.setCount(10);
        }
        this.props.uiStore.decrementCount();
      },
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerHandle);
  }

  render() {
    return (
      <CounterContainer>
        <CounterText>{this.props.uiStore.count}</CounterText>
      </CounterContainer>
    );
  }
}
