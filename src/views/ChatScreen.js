import React, { Component } from 'react';
import { Root, Container, Header, Content, Toast, Button, Text, Icon } from "native-base";
import {
  Platform,
  StyleSheet,
  // Text,
  View
} from 'react-native';

class ChatScreen extends React.Component {
  // Nav options can be defined as a function of the screen's props:
  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.user}`,
  });
  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Chat with2342342 {params.user}</Text>
      </View>
    );
  }
}

export default ChatScreen