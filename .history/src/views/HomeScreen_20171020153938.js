import React, { Component } from 'react';
import { Root, Container, Header, Content, Toast, Button, Text, Icon } from "native-base";

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome'
  };
  render() {
    return <Text>Hello, Navigation!</Text>;
  }
}
export default HomeScreen