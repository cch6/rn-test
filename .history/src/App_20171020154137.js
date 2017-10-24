/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  // Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Root, Container, Header, Content, Toast, Button, Text, Icon } from "native-base";

import HomeScreen from './views/HomeScreen'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
  'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen }
});

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showToast: false
    }
  }

  render() {
    return (
      <Container>
        <SimpleApp />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
