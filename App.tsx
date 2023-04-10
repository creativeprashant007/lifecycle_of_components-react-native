import React, { Component, ReactElement } from 'react';
import { Text, View } from 'react-native';

interface Props {
  name: string;
}

interface State {}

class CustomComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    console.log('Constructor Called.');
  }

  componentDidMount() {
    console.log('componentDidMount called.');
  }

  shouldComponentUpdate(nextProps: Props, nextState: State): boolean {
    console.log('shouldComponentUpdate called.');
    return true;
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    console.log('componentDidUpdate called.');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount called.');
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.log('componentDidCatch called.');
  }

  render(): ReactElement {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text>Language is: {this.props.name}</Text>
      </View>
    );
  }
}

export default class App extends Component {
  render(): ReactElement {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <CustomComponent name="Hello I am prashant timalsina" />
      </View>
    );
  }
}