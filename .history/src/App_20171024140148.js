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

import LoginScreen from './views/LoginScreen'
import HomeScreen from './views/HomeScreen'
import ChatScreen from './views/ChatScreen'

const SimpleApp = StackNavigator({
  Login: { screen: LoginScreen },
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen }
});

export default class App extends Component {

  render() {
    return (
      <Root>
        <SimpleApp />
      </Root>
    );
  }
}
